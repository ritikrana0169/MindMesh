package com.masai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.masai.exception.ApplicationException;
import com.masai.model.Customer;
import com.masai.service.CustomerService;

import jakarta.validation.Valid;

@RestController
public class AdminController {


	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	//get all customers
	@GetMapping("/admin/customers")
	public ResponseEntity<List<Customer>> getAllCustomerHandler(){
		List<Customer> cList=customerService.getAllCustomers();
		return new ResponseEntity<>(cList,HttpStatus.OK);
	}
	
	
@GetMapping("/customer/{id}")
public ResponseEntity<Customer> getSingleCustomerHandler(@PathVariable Integer id){

Customer cList=customerService.getSingleCustomers(id);
return new ResponseEntity<>(cList,HttpStatus.OK);
}
	
	
	
	
	
	@DeleteMapping("admin/deleteUser/{customerId}")
	public ResponseEntity<Customer> deleteCustomerHandler(@PathVariable Integer customerId) throws ApplicationException{
		Customer cust=customerService.deleteCustomer(customerId);
		return new ResponseEntity<>(cust,HttpStatus.OK);
}
	
	
	@PostMapping("admin/update/role/{customerId}")
	public ResponseEntity<Customer> updateCustomerRoleHandler(@PathVariable Integer customerId,@RequestBody Customer cust) throws ApplicationException{
		Customer custom=customerService.updateRole(customerId,cust);
		return new ResponseEntity<>(custom,HttpStatus.CREATED);	
		}
	
	
	
	@PostMapping("signup")
	public ResponseEntity<Customer> signUpHandler(@RequestBody @Valid Customer customer){
		customer.setPassword(passwordEncoder.encode(customer.getPassword()));
		Customer custom=customerService.createCustomer(customer);
		return new ResponseEntity<>(custom,HttpStatus.CREATED);	
		}
	
	
	@GetMapping("/signIn")
	public ResponseEntity<String> getLoggedInCustomerDetailsHandler(Authentication auth){

		System.out.println(auth); // this Authentication object having Principle object details

		 Customer customer= customerService.getCustomerDetailsByEmail(auth.getName());

		 return new ResponseEntity<>(customer.getCustomerName()+"Logged In Successfully", HttpStatus.ACCEPTED);


	}

	
}
