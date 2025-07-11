package com.example.EventManagement.Service;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.EventManagement.Model.Admin;
import com.example.EventManagement.Repository.AdminRepo;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminrepo;

    public ResponseEntity<?> adminlogin( String email,String password) {
    	Optional<Admin>check=adminrepo.findByaemail(email);
    	if(check.isPresent()&&check.get().getAemail().equals(email)&&
    			check.get().getApassword().equals(password)) {
    		return ResponseEntity.ok("Successfully logged IN...");
    	}else {
		return ResponseEntity.badRequest().body("Failed TO login...");
    	}
    	}

    public ResponseEntity<?> forgotPassword(String email, String newPassword) {
       Optional<Admin> admin = adminrepo.findByaemail(email);
        if (admin.isEmpty()) {
            return ResponseEntity.badRequest().body("Admin not found");
        }else {
        	admin.get().setApassword(newPassword);
        	adminrepo.save(admin.get());
            return ResponseEntity.ok("Password reset successfully");
        }

    }
}
