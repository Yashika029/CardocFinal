package com.CarDoc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CarDoc.beans.User;
import com.CarDoc.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

//  @PostMapping("/users")
//  public ResponseEntity<String> validateUser(@RequestBody User user) {
//    boolean isValid = userService.validateUser(user);

//    if (isValid) {
//      return ResponseEntity.ok("User is valid");
//    } else {
//      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not valid");
//    }
//  }

    @PostMapping("/login")
    public ResponseEntity<String> validateUser(@RequestBody User user) {
        User isValidUser = userService.validateUser(user);

        if (isValidUser != null) {
            if (isValidUser.getRole().equals("Mechanic")) {
                return ResponseEntity.ok("User is valid\nRole is Mechanic");
            }
            if (isValidUser.getRole().equals("Customer")) {
                return ResponseEntity.ok("User is valid\nRole is Customer");
            }
            if (isValidUser.getRole().equals("Admin")) {
                return ResponseEntity.ok("User is valid\nRole is Admin");
            }
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not valid");
        }
        return null;
    }

    @PostMapping("/logout")
    public ResponseEntity<String> Logout(@RequestBody User user) {

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User signed Out\nRedirect to Login page again");
    }
}

