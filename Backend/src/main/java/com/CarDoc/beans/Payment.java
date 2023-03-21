package com.CarDoc.beans;

import lombok.*;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@Generated
@AllArgsConstructor
@NoArgsConstructor
public class Payment 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pId;
	private Date payDate;
    private double amount;
	

}
