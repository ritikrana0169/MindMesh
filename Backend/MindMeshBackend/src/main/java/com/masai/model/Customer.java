package com.masai.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
@Data
@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer customerId;
	@NotNull(message = "Email of customer can't be Null")
	private String  customerName;
	@NotNull(message = "Email of customer can't be Null")
	@Email(message = "Email should be in proper Format")
	@Column(unique = true)
	private String  email;
	@NotNull(message = "Password of customer can't be Null")
	private String password;
//	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	private String role="ROLE_USER";
	@NotNull
	private String track;
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	private Boolean status=true;
	private String level;
	
}
