package com.masai.exception;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MyErrorClass {
	private LocalDateTime dateTime;
	private String msg;
	private String des;
}
