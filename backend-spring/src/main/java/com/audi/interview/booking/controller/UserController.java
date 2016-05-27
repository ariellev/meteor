package com.audi.interview.booking.controller;

import com.audi.interview.booking.jpa.domain.User;
import com.audi.interview.booking.service.UserService;
import com.wordnik.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/users")
@Api(value = "users", description = "User resource endpoint")
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public List<User> index() {
        log.debug("Getting all users");
        return userService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User get(@PathVariable("id") Long id) {
        return userService.findOne(id);
    }

    @RequestMapping(value = "/name/{name}", method = RequestMethod.GET)
    public List<User> getByName(@PathVariable("name") String name) {
        return userService.findByName(name);
    }

    @RequestMapping(value = "/save/**", method = RequestMethod.PUT)
    public User save(@RequestBody User user) {
        log.debug("save a user");
        return userService.saveUser(user);
    }
}
