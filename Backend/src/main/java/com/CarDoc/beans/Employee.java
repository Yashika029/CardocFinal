package com.CarDoc.beans;

import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@Generated
@AllArgsConstructor
@NoArgsConstructor
public class Employee
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long empId;
	private String pwd;
	private String fName;
	private String lName;
	private String email;
	private String phoneNo;
	private double salary;
	private Date hireDate;
	private String designation;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "Employee_emp_id")
	private List<Serv> servicesList = new ArrayList<>();

}
