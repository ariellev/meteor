package com.audi.interview.booking.jpa.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Vehicle extends AbstractPersistable {

    @Column(unique = true)
    private String licensePlate;

    private String vin;

    private String model;

    private Boolean active;

    private String color;

    private Date validTill;

    public String getLicensePlate() {
        return licensePlate;
    }

    public String getVin() {
        return vin;
    }

    public String getModel() {
        return model;
    }

    public Boolean getActive() {
        return active;
    }

    public String getColor() {
        return color;
    }

    public Date getValidTill() {
        return validTill;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setValidTill(Date validTill) {
        this.validTill = validTill;
    }
}
