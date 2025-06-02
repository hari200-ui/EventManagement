package com.example.EventManagement.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.EventManagement.Service.AdminLoginService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminLoginController {

    @Autowired
    private AdminLoginService adminLoginService;

    @PostMapping("/login")
    public ResponseEntity<String> adminLogin(@RequestBody Map<String, String> credentials) {
        return adminLoginService.processLoginRequest(credentials);
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newPassword = request.get("newPassword");
        return adminLoginService.resetPassword(email, newPassword);
    }
}
