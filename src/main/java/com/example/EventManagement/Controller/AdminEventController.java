package com.example.EventManagement.Controller;

import com.example.EventManagement.Model.EventModel;
import com.example.EventManagement.Service.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/events")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminEventController {

    @Autowired
    private EventService eventService;

    @PostMapping
    public ResponseEntity<?> createEvent(@RequestBody EventModel event) {
        return eventService.createEventRequest(event);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEvent(@PathVariable Long id, @RequestBody EventModel event) {
        return eventService.updateEventRequest(id, event);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
        return eventService.deleteEventRequest(id);
    }

    @GetMapping
    public ResponseEntity<?> getAllEvents() {
        return eventService.getAllEventsRequest();
    }
}
