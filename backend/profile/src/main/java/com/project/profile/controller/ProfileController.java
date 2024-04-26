package com.project.profile.controller;

import com.project.profile.entity.Profile;
import com.project.profile.response.ProfileResponse;
import com.project.profile.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @GetMapping("/profiles")
    public ResponseEntity<List<ProfileResponse>> getAllProfileDetails() {
        List<ProfileResponse> profiles = profileService.getAllProfiles();
        return !profiles.isEmpty() ?
                ResponseEntity.status(HttpStatus.OK).body(profiles) :
                ResponseEntity.notFound().build();

    }

    @GetMapping("/profiles/{id}")
    private ResponseEntity<ProfileResponse> getProfileDetails(@PathVariable("id") int id) {
        ProfileResponse profile = profileService.getProfileById(id);
        return ResponseEntity.status(HttpStatus.OK).body(profile);
    }


    @PostMapping("/profiles")
    public ResponseEntity<ProfileResponse> createNewProfile(@RequestBody Profile newProfile) {
        ProfileResponse profile = profileService.createNewProfile(newProfile);
        return ResponseEntity.status(HttpStatus.CREATED).body(profile);
    }

    @PutMapping("/profiles/{id}")
    public ResponseEntity<ProfileResponse> updateExistingProfile(@PathVariable("id") int id,
                                                   @RequestBody Profile modifyProfile) {
        ProfileResponse profile = profileService.updateExistingProfile(id, modifyProfile);
        return ResponseEntity.status(HttpStatus.OK).body(profile);
    }

    @DeleteMapping("/profiles/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable("id") int id) {
        profileService.deleteProfileById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
