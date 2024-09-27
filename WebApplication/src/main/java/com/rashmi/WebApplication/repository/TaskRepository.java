package com.rashmi.WebApplication.repository;

import com.rashmi.WebApplication.entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Tasks, Long> {
}
