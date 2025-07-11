package com.example.EventManagement.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EventManagement.Model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {
    Optional<Admin> findByaemail(String mail);
}
