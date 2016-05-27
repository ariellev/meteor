package com.audi.interview.booking.controller;

import com.audi.interview.booking.jpa.domain.Vehicle;
import com.audi.interview.booking.service.VehicleService;
import com.wordnik.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/vehicles")
@Api(value = "vehicles", description = "Vehicle resource endpoint")
public class VehicleController {

    private static final Logger log = LoggerFactory.getLogger(VehicleController.class);

    @Autowired
    private VehicleService vehicleService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Vehicle> index() {
        log.debug("Getting all vehicles");
        return vehicleService.findAll();
    }

    @RequestMapping(value = "/save/**", method = RequestMethod.PUT)
    public Vehicle save(@RequestBody Vehicle vehicle) {
        log.debug("save a vehicle");
        return vehicleService.saveVehicle(vehicle);
    }
}
