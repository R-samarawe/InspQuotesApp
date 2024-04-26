package com.project.quote.configuration;

import com.project.quote.service.QuoteService;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QuoteConfiguration {
    @Bean
    public QuoteService quoteBean() {
        return new QuoteService();
    }

    @Bean
    public ModelMapper modelMapperBean() {
        return new ModelMapper();
    }

}
