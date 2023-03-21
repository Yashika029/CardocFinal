package com.CarDoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.CarDoc.beans.User;

public interface UserDao extends JpaRepository<User, Long>
{


	//@Query("SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE u.email = :email AND u.pwd = :pwd")
	//boolean findByEmail(String email,String pwd);

	@Query("SELECT u FROM User u WHERE u.email = :email AND u.pwd = :pwd")
	User findByEmail(String email, String pwd);

}

