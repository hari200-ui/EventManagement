package com.example.EventManagement.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.EventManagement.Model.User;
import com.example.EventManagement.Repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userrepo;

    //User signup 
    public ResponseEntity<?> signUp(User user) {
       userrepo.save(user);
        return ResponseEntity.ok("User registered successfully");
    }
    
    
//User Login
    public ResponseEntity<?> login(String email, String password) {
    	Optional<User> u=userrepo.findByuemail(email);
    	if(u.isPresent()&&u.get().getUemail().equals(email)&&u.get().getUpassword().equals(password)) {
		return ResponseEntity.ok("SUCCESSFULLY LOGGED IN...");
    	}else {
    		return ResponseEntity.badRequest().body("EMAIL OR PASSWORD IS INCORRECT...");
    	}
    
    }

    
    //User forgot PAssword
    public ResponseEntity<?> forgotPassword(String email, String newPassword) {
    	Optional<User>check=userrepo.findByuemail(email);
    	if(check.isPresent()&&check.get().getUemail().equals(email)) {
    		if(check.get().getUpassword().equals(newPassword)) {
    			return ResponseEntity.badRequest().body("PLEASE CHOOSE ANOTHER PASSWORD...");
    		}else {
    		check.get().setUpassword(newPassword);
    		userrepo.save(check.get());
    		
    		return ResponseEntity.ok("SUCCESSFULLY PASSWORD CHANGED...");
    		}
    	}else {
    		return ResponseEntity.badRequest().body("Email was incorrect...");
    	}
    }
}
