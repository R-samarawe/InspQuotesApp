package com.project.profile.service;

import com.project.profile.entity.Profile;
import com.project.profile.repository.ProfileRepository;
import com.project.profile.response.ProfileResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private ModelMapper mapper;

    public List<ProfileResponse> getAllProfiles() {
        List<Profile> profiles = profileRepository.findAll();
        return profiles.stream()
                .map(profile -> mapper.map(profile, ProfileResponse.class))
                .collect(Collectors.toList());
    }

    public ProfileResponse getProfileById(int id) {
        Optional<Profile> profile = profileRepository.findById(id);
        ProfileResponse profileResponse = mapper.map(profile, ProfileResponse.class);
        return profileResponse;
    }

    public ProfileResponse createNewProfile(Profile profileData) {
        Profile profile = mapper.map(profileData, Profile.class);
        profile = profileRepository.save(profile);
        return mapper.map(profile, ProfileResponse.class);
    }

    public ProfileResponse updateExistingProfile(int id, Profile profileData) {
        Profile profile = profileRepository.findById(id)
                .orElseThrow();
        mapper.map(profileData, profile);
        profile = profileRepository.save(profile);
        return mapper.map(profile, ProfileResponse.class);
    }

    public void deleteProfileById(int id) {
        profileRepository.deleteById(id);
    }

}
