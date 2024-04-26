package com.project.profile.response;

import java.time.LocalDateTime;

public class ProfileResponse {

    private int id;
    private String name;
    private String email;
    private String priority_area;
    private LocalDateTime created_date;
    private LocalDateTime updated_date;
    private LocalDateTime deleted_date;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPriority_area() {
        return priority_area;
    }

    public void setPriority_area(String priority_area) {
        this.priority_area = priority_area;
    }


    public LocalDateTime getCreated_date() {
        return created_date;
    }

    public void setCreated_date(LocalDateTime created_date) {
        this.created_date = created_date;
    }

    public LocalDateTime getUpdated_date() {
        return updated_date;
    }

    public void setUpdated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }

    public LocalDateTime getDeleted_date() {
        return deleted_date;
    }

    public void setDeleted_date(LocalDateTime deleted_date) {
        this.deleted_date = deleted_date;
    }

}
