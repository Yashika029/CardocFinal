
package com.CarDoc.beans;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Setter
@Generated
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Car {
    @Id
    @GeneratedValue()
    private Long carId;
    private String brand;
    private String model;
    private String fuel;
    private String plateNo;
    private int mfgYear;

}
