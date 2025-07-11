package com.example.EventManagement.Model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name ="USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="USER_ID")
    private int user_id;

    @Column(name="USER_MAIL",unique=true, nullable = false)
    private String uemail;

    @Column(name="UMAIL_PASSWORD",nullable = false)
    private String upassword;

    public int getUser_id() {
		return user_id;
	}





	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}





	public String getUemail() {
		return uemail;
	}





	public void setUemail(String uemail) {
		this.uemail = uemail;
	}





	public String getUpassword() {
		return upassword;
	}





	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}





	// Constructors
    public User() {
    	
    }
    
    



	@OneToMany(mappedBy="user")
	private List<Bookings> bookings;


    
}
