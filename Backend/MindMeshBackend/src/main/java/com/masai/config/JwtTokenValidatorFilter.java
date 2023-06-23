
package com.masai.config;

import java.io.IOException;
import javax.crypto.SecretKey;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtTokenValidatorFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {


		String jwt= request.getHeader(SecurityConstants.JWT_HEADER);
//		System.err.println(jwt);
System.out.println("inside before ");
		if(jwt != null) {

			try {

				//extracting the word Bearer
				System.out.println("one");
				jwt = jwt.substring(7);
				System.err.println(jwt);


				SecretKey key= Keys.hmacShaKeyFor(SecurityConstants.JWT_KEY.getBytes());
//				String base64UrlEncodedKey = Base64.getUrlEncoder().withoutPadding().encodeToString(key.getEncoded());
				System.out.println("two");
				Claims claims= Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
				System.out.println("three");
				String username= String.valueOf(claims.get("username"));
				System.out.println("four");
				String authorities= (String)claims.get("authorities");
				System.out.println("five");
				Authentication auth = new UsernamePasswordAuthenticationToken(username, null, AuthorityUtils.commaSeparatedStringToAuthorityList(authorities));
				System.out.println("six");
				SecurityContextHolder.getContext().setAuthentication(auth);
				System.out.println("seven");
			} catch (Exception e) {
				throw new BadCredentialsException("Invalid Token received..");
			}

		}

		filterChain.doFilter(request, response);

	}



	//this time this validation filter has to be executed for all the apis except the /signIn api

	@Override
	protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {

		return request.getServletPath().equals("/signIn");
	}

}

