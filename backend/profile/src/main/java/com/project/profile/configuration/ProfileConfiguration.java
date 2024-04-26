package com.project.profile.configuration;

import com.project.profile.service.ProfileService;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProfileConfiguration {
    @Bean
    public ProfileService profileBean() {
        return new ProfileService();
    }

    @Bean
    public ModelMapper modelMapperBean() {
        return new ModelMapper();
    }
}
