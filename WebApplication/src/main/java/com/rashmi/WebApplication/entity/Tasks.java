package com.rashmi.WebApplication.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tasks")
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long task_id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private String status;

    @Column(name = "due_date")
    private String due_date;

    @Column(name = "priority")
    private String priority;

    @Column(name = "created_at")
    private String created_at;

    @Column(name = "updated_at")
    private String updated_at;




}
