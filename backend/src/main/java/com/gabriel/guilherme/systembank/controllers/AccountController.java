package com.gabriel.guilherme.systembank.controllers;
import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.model.KeyPix;
import com.gabriel.guilherme.systembank.services.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping(value ="/account")
public class AccountController {
    @Autowired
    private AccountService service;
    @GetMapping("/createpix")
    public String createRandomPix () {
        return service.createRandomPix();
    }

    @PutMapping(value="/{clientId}/{index}")
    public Client registerKeyPix(@PathVariable String clientId, @PathVariable String index, @RequestBody KeyPix keypix) {
        
        return service.registerKeyPix(clientId, index, keypix);
    }
}
