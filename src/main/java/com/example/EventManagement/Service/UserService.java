package com.example.EventManagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.EventManagement.Model.UserModel;
import com.example.EventManagement.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<String> signUp(String email, String password) {
        if (userRepository.findByEmail(email) != null) {
            return ResponseEntity.badRequest().body("Email already registered");
        }
        UserModel user = new UserModel(email, password);
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    public ResponseEntity<String> login(String email, String password) {
        UserModel user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok("User Login Successful");
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    public ResponseEntity<String> forgotPassword(String email, String newPassword) {
        UserModel user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }
        user.setPassword(newPassword);
        userRepository.save(user);
        return ResponseEntity.ok("Password reset successfully");
    }
}
