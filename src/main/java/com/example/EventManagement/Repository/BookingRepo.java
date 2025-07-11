package com.example.EventManagement.Repository;

import com.example.EventManagement.Model.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepo extends JpaRepository<Bookings, Integer> {
//    List<Bookings> findByeventId(Long eventId);
}
