package com.example.demo.repo;

import com.example.demo.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Long> {
    Optional<User> findByUserName(String username);

    List<User> findByUserNameContainingIgnoreCase(String search);

    Optional<User> findByEmail(String username);
}
