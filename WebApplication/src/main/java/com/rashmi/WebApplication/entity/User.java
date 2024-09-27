package com.rashmi.WebApplication.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String user_id;
    @Column(name = "name")
    private String name;
    @Column(name = "role")
    private String role;
}
