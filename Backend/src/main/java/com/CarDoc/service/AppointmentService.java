package com.CarDoc.service;

import com.CarDoc.beans.Appointment;

import java.util.List;

public interface AppointmentService {
    void addnewAppointment(Appointment a);

    List<Appointment> getAllAppointments();

    Appointment getById(long appId);

    int updateAppointment(Appointment a);

    void deleteById(long appId);
}
