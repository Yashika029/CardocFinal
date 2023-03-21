package com.CarDoc.beans;

import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;


@Entity
@Getter
@Setter
@Generated
@AllArgsConstructor
@NoArgsConstructor
public class Serv
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long sId;
	private String name;
	private double price;

	//Commenting to change the logic
	//@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	//@JoinColumn(name="empId")
	//private Employee e;

}
