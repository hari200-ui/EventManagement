package com.example.EventManagement.Model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "EVENTS")
public class Events {
	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="EVENT_ID")
    private int event_id;
    @Column(name="EVENT_TITLE")
    private String event_title;
    @Column(name="DESCRIPTION")
    private String description;
    @Column(name="LOCATION")
    private String location;
    @Column(name="EVENT_DATE")
    private LocalDate event_date;
    @Column(name="START_TIME")
    private LocalTime startTime;
    @Column(name="END_TIME")
    private LocalTime endTime;
    @Column(name="PRICE")
    private Double price;
    @Column(name="AVAILABLE_SEATS")
    private int availableSeats;
    @Column(name="IMAGE_URL",length = 1000000)
    private String imageUrl;
    @Column(name="CATEGORY")
    private String category;
    @Transient
    private String image; // 🔥 Base64 data from frontend (not stored in DB)
	@OneToMany(mappedBy="event")
	private List<Bookings> event;

	
	
	
	//cons
    public Events() {
    	
    }




	public int getEvent_id() {
		return event_id;
	}




	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}




	public String getEvent_title() {
		return event_title;
	}




	public void setEvent_title(String event_title) {
		this.event_title = event_title;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public String getLocation() {
		return location;
	}




	public void setLocation(String location) {
		this.location = location;
	}




	public LocalDate getEvent_date() {
		return event_date;
	}




	public void setEvent_date(LocalDate event_date) {
		this.event_date = event_date;
	}




	public LocalTime getStartTime() {
		return startTime;
	}




	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}




	public LocalTime getEndTime() {
		return endTime;
	}




	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}




	public Double getPrice() {
		return price;
	}




	public void setPrice(Double price) {
		this.price = price;
	}




	public int getAvailableSeats() {
		return availableSeats;
	}




	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}




	public String getImageUrl() {
		return imageUrl;
	}




	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}




	public String getCategory() {
		return category;
	}




	public void setCategory(String category) {
		this.category = category;
	}




	public String getImage() {
		return image;
	}




	public void setImage(String image) {
		this.image = image;
	}








    
}

