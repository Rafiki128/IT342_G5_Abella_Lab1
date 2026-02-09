package com.Abella.UserAuth.service;

import com.Abella.UserAuth.entity.User;
import com.Abella.UserAuth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // Logic for registering a new user
    public User registerUser(User user) {
        // 1. Encrypt the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // 2. Set default status
        user.setStatus("ACTIVE");

        // 3. Save to database
        return userRepository.save(user);
    }

    // Logic for finding a user by username (used for login and profile)
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // Logic for finding a user by ID
    public Optional<User> findById(String userid) {
        return userRepository.findById(userid);
    }
}