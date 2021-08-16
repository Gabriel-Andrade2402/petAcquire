package com.portifolio.petAcquire.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class signUpResources {

	@GetMapping("/signUp")
	public ModelAndView signUp() {
		return new ModelAndView("signUp");
	}
}
