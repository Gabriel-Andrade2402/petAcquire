package com.portifolio.petAcquire.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.portifolio.petAcquire.entitys.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{
	@Query(value = "SELECT * FROM Client WHERE email = :email", nativeQuery=true)
	Client findByEmail(@Param("email") String email);
}
