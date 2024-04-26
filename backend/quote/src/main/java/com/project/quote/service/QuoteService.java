package com.project.quote.service;

import com.project.quote.entity.Quote;
import com.project.quote.repository.QuoteRepository;
import com.project.quote.response.QuoteResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuoteService {
    @Autowired
    private QuoteRepository quoteRepository;

    @Autowired
    private ModelMapper mapper;

    public List<QuoteResponse> getAllQuotes() {
        List<Quote> quotes = quoteRepository.findAll();
        return quotes.stream()
                .map(quote -> mapper.map(quote, QuoteResponse.class))
                .collect(Collectors.toList());
    }
    public QuoteResponse getQuoteById(int id) {
        Optional<Quote> quote = quoteRepository.findById(id);
        QuoteResponse quoteResponse = mapper.map(quote, QuoteResponse.class);
        return quoteResponse;
    }
}
