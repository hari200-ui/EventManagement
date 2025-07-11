package com.example.EventManagement.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EventManagement.Model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByuemail(String email);
}
