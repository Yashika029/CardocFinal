package com.CarDoc.beans;

import lombok.*;

import java.util.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Generated
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Customer {
    @Id
    @GeneratedValue()
    private Long custId;
    private String pwd;
    private String fName;
    private String lName;
    private String email;
    private String phoneNo;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "customer_cust_id")
    private List<Car> cars = new ArrayList<>();

}

/*
For Testing Purpose
{
    "pwd": "pwd1",
    "fname": "fName1",
    "lname": "lName1",
    "email": "email1",
    "phoneNo": "phoneNo1",
    "custId":2,
    "cars": [
        {
            "brand": "brand11111",
            "model": "model",
            "fuel": "fuel",
            "plateNo": "plateNo",
            "mfgYear": 1990
        },
        {
            "brand": "brand1111111111",
            "model": "model12",
            "fuel": "fuel",
            "plateNo": "plateNo",
            "mfgYear": 1990
        },
        {
            "brand": "brand11111112",
            "model": "model12",
            "fuel": "fuel",
            "plateNo": "plateNo",
            "mfgYear": 1990
        }
    ]
}
 */