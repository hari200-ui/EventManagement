package com.example.EventManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.EventManagement.Model.EventModel;

public interface EventRepository extends JpaRepository<EventModel, Long> {
}
	