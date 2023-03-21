package com.CarDoc.service;

import com.CarDoc.beans.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentDao extends JpaRepository<Appointment,Long> {

}
