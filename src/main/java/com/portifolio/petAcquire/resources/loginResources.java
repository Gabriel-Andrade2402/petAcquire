package com.portifolio.petAcquire.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class loginResources {

	@GetMapping(value="/login")
	public ModelAndView login(){
		   return new ModelAndView("login");
	}
}
