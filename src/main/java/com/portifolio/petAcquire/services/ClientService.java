package com.portifolio.petAcquire.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portifolio.petAcquire.entitys.Client;
import com.portifolio.petAcquire.repositorys.ClientRepository;

//@Configuration
//@ComponentScan("com.portifolio.petAcquire.repositorys")
@Service
public class ClientService {
	@Autowired
	private ClientRepository clientRepository;
	
	private static ClientService instance;
	protected ClientService() {}
	public static ClientService getInstance(ClientRepository repository) {
		if(instance==null) {
			instance=new ClientService();
			instance.setRepository(repository);
		}
		return instance;
	}
	
	public Client RegisterClient(Client client) {
		clientRepository.save(client);
		return clientRepository.findByEmail(client.getEmail());
	}
	public void setRepository(ClientRepository repositoryClient) {
		clientRepository=repositoryClient;
	}
	public Client login(Client client) {
		return clientRepository.login(client.getEmail(),client.getPassword());
	}
}
