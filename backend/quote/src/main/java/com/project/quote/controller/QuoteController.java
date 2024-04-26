package com.project.quote.controller;

import com.project.quote.response.QuoteResponse;
import com.project.quote.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuoteController {

    @Autowired
    private QuoteService quoteService;


    @GetMapping("/quotes")
    public ResponseEntity<List<QuoteResponse>> getAllQuoteDetails() {
        List<QuoteResponse> quotes = quoteService.getAllQuotes();
        return !quotes.isEmpty() ?
                ResponseEntity.status(HttpStatus.OK).body(quotes) :
                ResponseEntity.notFound().build();

    }

    @GetMapping("/quotes/{id}")
    private ResponseEntity<QuoteResponse> getQuoteDetails(@PathVariable("id") int id) {
        QuoteResponse quote = quoteService.getQuoteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(quote);
    }
}
