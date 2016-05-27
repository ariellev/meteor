package com.audi.interview.booking.service;

import com.audi.interview.booking.jpa.domain.User;
import com.audi.interview.booking.jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        Assert.notNull(user);
        return userRepository.saveAndFlush(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findOne(Long id) {
        Assert.notNull(id);
        return userRepository.findOne(id);
    }

    public User findByEmail(String email) {
        Assert.hasLength(email);
        return userRepository.findByEmail(email);
    }

    public List<User> findByName(String name) {
        Assert.hasLength(name);
        return userRepository.findByLastNameContainingOrFirstNameContaining(name, name);
    }

}
