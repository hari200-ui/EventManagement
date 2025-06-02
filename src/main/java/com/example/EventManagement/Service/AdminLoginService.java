package com.example.EventManagement.Service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.EventManagement.Model.AdminLoginModel;
import com.example.EventManagement.Repository.AdminLoginRepo;

@Service
public class AdminLoginService {

    @Autowired
    private AdminLoginRepo adminLoginRepo;

    public ResponseEntity<String> processLoginRequest(Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        AdminLoginModel admin = adminLoginRepo.findByEmail(email);

        if (admin != null && admin.getPassword().equals(password)) {
            return ResponseEntity.ok("Admin Login Successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    public ResponseEntity<String> resetPassword(String email, String newPassword) {
        AdminLoginModel admin = adminLoginRepo.findByEmail(email);
        if (admin == null) {
            return ResponseEntity.badRequest().body("Admin not found");
        }

        admin.setPassword(newPassword);
        adminLoginRepo.save(admin);

        return ResponseEntity.ok("Password reset successfully");
    }
}
