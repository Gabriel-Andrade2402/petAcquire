package com.portifolio.petAcquire.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.portifolio.petAcquire.entitys.Client;
import com.portifolio.petAcquire.services.ClientService;

@RestController
public class signUpResources {

	@GetMapping("/signUp")
	public ModelAndView signUp() {
		return new ModelAndView("signUp");
	}
	@PostMapping("/register")
	public ResponseEntity<Client> registerClient(@RequestBody Client client){
		return ResponseEntity.ok().body(ClientService.getInstance(null).RegisterClient(client));
	}
}
