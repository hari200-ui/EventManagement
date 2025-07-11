package com.example.EventManagement.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.example.EventManagement.Service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminService adminser;

    @PostMapping("/login")
    public ResponseEntity<?> adminLogin(@RequestParam String email,@RequestParam String password) {
    	return adminser.adminlogin(email, password);
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestParam String email,@RequestParam String newPassword) {	
    	return adminser.forgotPassword(email,newPassword);
    }
}
