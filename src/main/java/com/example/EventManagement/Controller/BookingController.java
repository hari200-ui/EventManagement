package com.example.EventManagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.EventManagement.Model.Duplbooking;
import com.example.EventManagement.Service.BookingService;

@RestController
@RequestMapping("/Bookings")
public class BookingController {
	@Autowired
	BookingService bookser;
	
	@PostMapping("/book_event")
	public ResponseEntity<?>bookevent(@RequestBody Duplbooking book){
		return bookser.bookevent(book);
		
	}
	@DeleteMapping("/cancel_event")
	public ResponseEntity<?>cancel_event(@RequestParam int bookid){
		return bookser.cancel_event(bookid);
		
	}
}
