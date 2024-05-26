package com.yong.stock.myproject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/api/hello")
    public String apiTest() {
        System.out.println("apiTest");
        return "hello world11111";
    }

    @RequestMapping("/api/stock")
    public String insertTest() {



        return "true";
    }
}
