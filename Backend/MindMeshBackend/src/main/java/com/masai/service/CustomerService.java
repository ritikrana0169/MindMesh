package com.masai.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masai.exception.ApplicationException;
import com.masai.exception.CustomerException;
import com.masai.model.Customer;
import com.masai.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	public List<Customer> getAllCustomers() throws CustomerException {
		
		List<Customer> customerList=customerRepository.findAll();
		if(customerList.size()==0)
			throw new CustomerException("No Customer Found");
		
		
		
		return customerList;
	}

	
	
	
	public Customer deleteCustomer(Integer id) throws ApplicationException{
		Optional<Customer> opt = customerRepository.findById(id);
		if(opt.isEmpty()) {
			throw new ApplicationException("No Admin Found with these Details...");
		}
		opt.get().setStatus(false);;
		customerRepository.save(opt.get());
		return opt.get();
	}




	public Customer updateRole(Integer customerId, Customer cust) throws ApplicationException {
		Optional<Customer> customerr = customerRepository.findById(customerId);
		if(customerr.isEmpty()) {
			throw new ApplicationException("No Customer Found");
		}
//		if(!cust.getRole().toUpperCase().equals("ADMIN") && !cust.getRole().toUpperCase().equals("USER")) {
//			throw new ApplicationException("Role isn't a Valid one");
//		}
		customerr.get().setRole("ROLE_"+cust.getRole().toUpperCase());
		customerRepository.save(customerr.get());
		return customerr.get();
	}




	public Customer createCustomer(Customer customer) {
		Customer cust=customerRepository.save(customer);
		return cust;
		
	}




	public Customer getCustomerDetailsByEmail(String email)throws CustomerException {
		
		return customerRepository.findByEmail(email).orElseThrow(() -> new CustomerException("Customer Not found with Email: "+email));
	}




	public Customer getSingleCustomers(Integer id) {
	Optional<Customer> cust=customerRepository.findById(id);
	if(cust.isEmpty())
		throw new CustomerException("Customer Not Found");
	else
		return cust.get();
	
	}}
	
	
	
