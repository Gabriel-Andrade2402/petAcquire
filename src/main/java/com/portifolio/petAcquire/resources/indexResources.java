package com.portifolio.petAcquire.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class indexResources {

	@GetMapping(value="/index")
	public ModelAndView index(){
		   return new ModelAndView("index");
	}
}
