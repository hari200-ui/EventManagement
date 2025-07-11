 package com.example.EventManagement.Model;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "ADMIN")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ADMIN_ID")
    private int admin_id;

    @Column(name="ADMIN_MAIL",unique = true, nullable = false)
    private String aemail;

    @Column(name="AMAIL_PASSWORD",nullable = false)
    private String apassword;
 
    //cons
    public Admin() {}



	//getter setters

	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public String getAemail() {
		return aemail;
	}
	public void setAemail(String aemail) {
		this.aemail = aemail;
	}
	public String getApassword() {
		return apassword;
	}
	public void setApassword(String apassword) {
		this.apassword = apassword;
	}




  
}
