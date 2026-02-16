package com.Abella.UserAuth.controller;

import  com.Abella.UserAuth.entity.User;
import com.Abella.UserAuth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired private UserRepository userRepository;
    @Autowired private BCryptPasswordEncoder encoder;

    @PostMapping("/auth/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if(userRepository.existsById(user.getUserid())) {
            return ResponseEntity.badRequest().body("User ID already exists");
        }
        user.setPassword(encoder.encode(user.getPassword()));
        user.setStatus("ACTIVE"); // Default status
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/auth/login")
    public String login() {
        return "Authenticated"; // Managed by Spring Security
    }

    @GetMapping("/user/me")
    public ResponseEntity<?> getMyProfile(Authentication authentication) {
        return ResponseEntity.ok(userRepository.findByUsername(authentication.getName()));
    }
}