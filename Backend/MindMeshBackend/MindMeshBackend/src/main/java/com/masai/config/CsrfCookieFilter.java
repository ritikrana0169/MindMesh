package com.masai.config;

import java.io.IOException;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CsrfCookieFilter extends OncePerRequestFilter{

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {


		CsrfToken csrfToken= (CsrfToken)request.getAttribute(CsrfToken.class.getName());

		if(csrfToken.getHeaderName() != null) {
			response.setHeader(csrfToken.getHeaderName(), csrfToken.getToken());
		}

		filterChain.doFilter(request, response);

	}

}

