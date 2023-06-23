package com.masai.config;


import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
public class AppConfig {

	@Bean
	public SecurityFilterChain springSecurityConfiguration(HttpSecurity http) throws Exception {
		CsrfTokenRequestAttributeHandler requestHandler = new CsrfTokenRequestAttributeHandler();
		http.sessionManagement(sessionManagement -> sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	.cors
	(cors->{
		cors.configurationSource(new CorsConfigurationSource() {
			
			@Override
			public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
				CorsConfiguration cfg=new CorsConfiguration();
				cfg.setAllowCredentials(true);
				cfg.setAllowedOriginPatterns(Collections.singletonList("*"));
				cfg.setAllowedHeaders(Collections.singletonList("*"));
				cfg.setExposedHeaders(Arrays.asList("Authorization"));
				cfg.setAllowedMethods(Collections.singletonList("*"));
				return cfg;
			}
		});
	})
	
	.authorizeHttpRequests(auth ->{
	auth.requestMatchers(HttpMethod.POST, "/signup").permitAll()
	.requestMatchers(HttpMethod.GET, "/admin/customers").permitAll()
//	.requestMatchers("/swagger-ui*/**","/v3/api-docs/**").permitAll()
	.anyRequest().authenticated();
	})
//	.csrf(csrf-> csrf.disable())
	.csrf(csrf -> csrf.csrfTokenRequestHandler(requestHandler)
			.ignoringRequestMatchers("/signup")
			.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))
        	.addFilterBefore(new JwtTokenValidatorFilter(),BasicAuthenticationFilter.class)
	        .addFilterAfter(new JwtTokenGeneratorFilter(), BasicAuthenticationFilter.class)
            .addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class)
	.formLogin(Customizer.withDefaults())
	.httpBasic(Customizer.withDefaults());
	return http.build();
	}
	
//	@Bean
//	public InMemoryUserDetailsManager imudm() {
//		InMemoryUserDetailsManager im=new InMemoryUserDetailsManager();
//		UserDetails admin=User.withUsername("ritik").password("1234").authorities("admin").build();
//		UserDetails user=User.withUsername("akhil").password("1234").authorities("read").build();
//		im.createUser(user);
//		im.createUser(admin);
//		return im;
//	}
	
	
	@Bean
	public PasswordEncoder passwordEncoder() {

		return new BCryptPasswordEncoder();

	}
}
