package com.CarDoc.beans;

import lombok.*;

import java.sql.Time;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Getter
@Setter
@Generated
@AllArgsConstructor
@NoArgsConstructor
public class Appointment
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long appId;
	private Date appDate;
	private Time appTime;
	private double billAmount;
	private String status;
	@OneToOne(cascade = CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="pId")
	private Payment payment;
	@OneToOne(cascade = CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="carId")
	private Car car;
	//String car_ID;

}
