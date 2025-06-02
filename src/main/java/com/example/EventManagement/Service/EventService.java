package com.example.EventManagement.Service;

import com.example.EventManagement.Model.EventModel;
import com.example.EventManagement.Repository.EventRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public ResponseEntity<?> createEventRequest(EventModel event) {
        EventModel saved = eventRepository.save(event);
        return ResponseEntity.ok(saved);
    }

    public ResponseEntity<?> updateEventRequest(Long id, EventModel updatedEvent) {
        Optional<EventModel> optional = eventRepository.findById(id);
        if (optional.isPresent()) {
            EventModel existing = optional.get();
            existing.setTitle(updatedEvent.getTitle());
            existing.setDescription(updatedEvent.getDescription());
            existing.setLocation(updatedEvent.getLocation());
            existing.setDate(updatedEvent.getDate());
            existing.setTime(updatedEvent.getTime());
            existing.setCategory(updatedEvent.getCategory());
            existing.setPrice(updatedEvent.getPrice());
            existing.setAvailableSeats(updatedEvent.getAvailableSeats());
            existing.setImageUrl(updatedEvent.getImageUrl());
            return ResponseEntity.ok(eventRepository.save(existing));
        }
        return ResponseEntity.status(404).body("Event not found");
    }

    public ResponseEntity<?> deleteEventRequest(Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return ResponseEntity.ok("Event deleted successfully");
        }
        return ResponseEntity.status(404).body("Event not found");
    }

    public ResponseEntity<?> getAllEventsRequest() {
        List<EventModel> events = eventRepository.findAll();
        return ResponseEntity.ok(events);
    }
}
