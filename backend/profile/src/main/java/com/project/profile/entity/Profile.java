package com.project.profile.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "profile")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "priority_area")
    private String priority_area;

    @Column(name = "created_date")
    private LocalDateTime created_date;

    @Column(name = "updated_date")
    private LocalDateTime updated_date;

    @Column(name = "deleted_date")
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
