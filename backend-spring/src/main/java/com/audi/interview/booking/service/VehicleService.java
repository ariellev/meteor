package com.audi.interview.booking.service;

import com.audi.interview.booking.jpa.domain.Vehicle;
import com.audi.interview.booking.jpa.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Date;
import java.util.List;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public Vehicle saveVehicle(Vehicle vehicle) {
        Assert.notNull(vehicle);
        Assert.notNull(vehicle.getColor());
        Assert.notNull(vehicle.getLicensePlate());
        Assert.notNull(vehicle.getModel());
        Assert.notNull(vehicle.getValidTill());

        // date not in the past
        Assert.isTrue(vehicle.getValidTill().after(new Date()), "field validTill should be at least a future date");
        Assert.notNull(vehicle.getVin());

        return vehicleRepository.saveAndFlush(vehicle);
    }

    public List<Vehicle> findAll() {
        return vehicleRepository.findAll();
    }

    public Vehicle findOne(Long id) {
        Assert.notNull(id);
        return vehicleRepository.findOne(id);
    }

    public Vehicle findByLicensePlate(String licensePlate) {
        Assert.hasLength(licensePlate);
        return vehicleRepository.findByLicensePlate(licensePlate);
    }
}
