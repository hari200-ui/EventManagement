package com.example.EventManagement.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.EventManagement.Model.Events;
import com.example.EventManagement.Model.User;
import com.example.EventManagement.Service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {

        return userService.signUp(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String uemail, @RequestParam String upassword) {
        return userService.login(uemail, upassword);
    }


    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestParam  String email,@RequestParam String newpassword) {

        return userService.forgotPassword(email, newpassword);
    }
    @PostMapping("/bookevent")
    public ResponseEntity<?>bookEvent(@RequestBody Events event){
    	return null;
    }
}
