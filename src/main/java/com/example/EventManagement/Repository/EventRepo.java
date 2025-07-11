package com.example.EventManagement.Repository;

import com.example.EventManagement.Model.Events;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository<Events, Integer> {
}
