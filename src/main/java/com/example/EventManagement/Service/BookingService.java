package com.example.EventManagement.Service;

import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.EventManagement.Model.Bookings;
import com.example.EventManagement.Model.Duplbooking;
import com.example.EventManagement.Model.Events;
import com.example.EventManagement.Model.User;
import com.example.EventManagement.Repository.BookingRepo;
import com.example.EventManagement.Repository.EventRepo;

@Service
public class BookingService {
	@Autowired
	BookingRepo bkrepo;
	@Autowired
	EventRepo eventrepo;
	
	//book event
	public ResponseEntity<?>bookevent(Duplbooking book){
		System.out.println(book.getEvent_id());
		Optional<Events>check=eventrepo.findById( book.getEvent_id());
		
		
		Bookings bm= new Bookings();
		if(check.isPresent()){
//		bm.setBooking_id(book.getBooking_id());
			Events e = new Events();
			User u= new User();
			u.setUser_id(book.getUser_id());
			e.setEvent_id(book.getEvent_id());
		bm.setEvent(e);
		bm.setUser(u);
		bm.setSeats(book.getSeats());
		bkrepo.save(bm);
		
		return  ResponseEntity.ok("SUCCESFULLY BOOKED...");	
		}else {
		 return ResponseEntity.status(404).body("Event not found");
		}
	}
	
	//cancel event
	public ResponseEntity<?>cancel_event(int id){
		Optional<Bookings>check=bkrepo.findById(id);
		if(check.isPresent()) {
			bkrepo.deleteById(id);
			return ResponseEntity.ok("SUCCESSFULLY DELETED...");
		}
		else {
			return ResponseEntity.status(404).body("UNABLE TO CANCEL BECOZ NO EVENT WAS BOOKED..");
		}
	}

}
