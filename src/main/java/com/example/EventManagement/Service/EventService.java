package com.example.EventManagement.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import com.example.EventManagement.Model.Bookings;
import com.example.EventManagement.Model.Events;
import com.example.EventManagement.Repository.BookingRepo;
import com.example.EventManagement.Repository.EventRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    EventRepo eventRepository;

    @Autowired
    BookingRepo bkrepo;

    public ResponseEntity<?> createEventRequest(Events event) {
        try {
            if (event.getImage() != null && !event.getImage().isEmpty()) {
                String imageUrl = saveImageFromBase64(event.getImage(), event.getEvent_title());
                event.setImageUrl(imageUrl);
            }
            event.setImage(null); 
            Events saved = eventRepository.save(event);
            return ResponseEntity.ok(saved);
        } catch (IOException | IllegalArgumentException e) {
            return ResponseEntity.status(500).body("Failed to save image: " + e.getMessage());
        }
    }

    public ResponseEntity<?> updateEventRequest(int id, Events updatedEvent) {
        try {
            Optional<Events> optional = eventRepository.findById(id);
            if (optional.isPresent()) {
                Events existing = optional.get();
                existing.setEvent_title(updatedEvent.getEvent_title());
                existing.setDescription(updatedEvent.getDescription());
                existing.setLocation(updatedEvent.getLocation());
                existing.setEvent_date(updatedEvent.getEvent_date());
                existing.setStartTime(updatedEvent.getStartTime());
                existing.setEndTime(updatedEvent.getEndTime());
                existing.setCategory(updatedEvent.getCategory());
                existing.setPrice(updatedEvent.getPrice());
                existing.setAvailableSeats(updatedEvent.getAvailableSeats());

                if (updatedEvent.getImage() != null && !updatedEvent.getImage().isEmpty()) {
                    String imageUrl = saveImageFromBase64(updatedEvent.getImage(), updatedEvent.getEvent_title());
                    existing.setImageUrl(imageUrl);
                }

                return ResponseEntity.ok(eventRepository.save(existing));
            }
            return ResponseEntity.status(404).body("Event not found");
        } catch (IOException | IllegalArgumentException e) {
            return ResponseEntity.status(500).body("Failed to update image: " + e.getMessage());
        }
    }

    public ResponseEntity<?> deleteEventRequest(int id) {
        Optional<Events> optional = eventRepository.findById(id);
        if (optional.isPresent()) {
            Optional<Bookings> bookings = bkrepo.findById(id);
            if (!bookings.isEmpty()) {
                return ResponseEntity.badRequest().body("Cannot delete event with existing bookings");
            }
            eventRepository.deleteById(id);
            return ResponseEntity.ok("Event deleted successfully");
        }
        return ResponseEntity.status(404).body("Event not found");
    }

    public ResponseEntity<?> getAllEventsRequest() {
        List<Events> events = eventRepository.findAll();
        return ResponseEntity.ok(events);
    }

    private String saveImageFromBase64(String base64, String title) throws IOException {
        if (base64 == null || base64.isEmpty()) return null;
        if (title == null || title.isEmpty()) throw new IllegalArgumentException("Event title is missing");

        String[] parts = base64.split(",");
        if (parts.length != 2) throw new IllegalArgumentException("Invalid base64 format");

        String metadata = parts[0];
        String data = parts[1];

        String extension = metadata.substring(metadata.indexOf("/") + 1, metadata.indexOf(";"));
        byte[] imageBytes = Base64.getDecoder().decode(data);

        String filename = title.replaceAll("\\s+", "_") + "_" + System.currentTimeMillis() + "." + extension;
        Path path = Paths.get("uploads/images/" + filename);
        Files.createDirectories(path.getParent());
        Files.write(path, imageBytes);

        return "http://localhost:8080/images/" + filename;
    }
}
