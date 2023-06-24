package com.masai.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptions {
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<MyErrorClass> methodException(MethodArgumentNotValidException e , WebRequest req){
		MyErrorClass my = new MyErrorClass();
		my.setDateTime(LocalDateTime.now());
		my.setMsg(e.getMessage());
		my.setDes(req.getDescription(false));
		return new ResponseEntity<MyErrorClass>(my, HttpStatus.BAD_GATEWAY);
	}
	@ExceptionHandler(ApplicationException.class)
	public ResponseEntity<MyErrorClass> applicationException(ApplicationException e , WebRequest req){
		MyErrorClass my = new MyErrorClass();
		my.setDateTime(LocalDateTime.now());
		my.setMsg(e.getMessage());
		my.setDes(req.getDescription(false));
		return new ResponseEntity<MyErrorClass>(my, HttpStatus.BAD_GATEWAY);
	}
	@ExceptionHandler(Exception.class)
	public ResponseEntity<MyErrorClass> exception(Exception e , WebRequest req){
		MyErrorClass my = new MyErrorClass();
		my.setDateTime(LocalDateTime.now());
		my.setMsg(e.getMessage());
		my.setDes(req.getDescription(false));
		return new ResponseEntity<MyErrorClass>(my, HttpStatus.BAD_GATEWAY);
	}
	@ExceptionHandler(NoHandlerFoundException.class)
	public ResponseEntity<MyErrorClass> noHandlerException(NoHandlerFoundException e , WebRequest req){
		MyErrorClass my = new MyErrorClass();
		my.setDateTime(LocalDateTime.now());
		my.setMsg(e.getMessage());
		my.setDes(req.getDescription(false));
		return new ResponseEntity<MyErrorClass>(my, HttpStatus.BAD_GATEWAY);
	}

	@ExceptionHandler(CustomerException.class)
	public ResponseEntity<MyErrorClass> customerException(CustomerException e , WebRequest req){
		MyErrorClass my = new MyErrorClass();
		my.setDateTime(LocalDateTime.now());
		my.setMsg(e.getMessage());
		my.setDes(req.getDescription(false));
		return new ResponseEntity<MyErrorClass>(my, HttpStatus.BAD_GATEWAY);
	}
}
