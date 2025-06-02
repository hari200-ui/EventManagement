package com.example.EventManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.EventManagement.Model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findByEmail(String email);
}
