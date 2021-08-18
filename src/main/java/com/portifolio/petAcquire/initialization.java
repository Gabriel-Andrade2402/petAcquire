package com.portifolio.petAcquire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Service;

import com.portifolio.petAcquire.repositorys.ClientRepository;
import com.portifolio.petAcquire.services.ClientService;

@Service
public class initialization implements ApplicationRunner{
	@Autowired
	private ClientRepository repositoryClient;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		ClientService.getInstance(repositoryClient);
	}

}