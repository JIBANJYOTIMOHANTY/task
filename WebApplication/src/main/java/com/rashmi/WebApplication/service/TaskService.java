package com.rashmi.WebApplication.service;

import com.rashmi.WebApplication.entity.Tasks;

import java.util.List;

public interface TaskService {
    Tasks createTask(Tasks tasks);
    List<Tasks> getAllTasks();
    Tasks updateTask(Long id, Tasks task);
    void deleteTask(Long id);

}
