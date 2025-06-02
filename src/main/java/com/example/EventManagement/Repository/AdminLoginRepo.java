package com.example.EventManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.EventManagement.Model.AdminLoginModel;

public interface AdminLoginRepo extends JpaRepository<AdminLoginModel, Long> {
    AdminLoginModel findByEmail(String email);
}
