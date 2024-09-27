package com.rashmi.WebApplication.service.impl;

import com.rashmi.WebApplication.entity.Tasks;
import com.rashmi.WebApplication.exception.ResourceNotFoundException;
import com.rashmi.WebApplication.repository.TaskRepository;
import com.rashmi.WebApplication.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {
    private TaskRepository taskRepository;
    @Override
    public Tasks createTask(Tasks tasks) {
        System.out.println("hello");
        return taskRepository.save(tasks);
    }

    @Override
    public List<Tasks> getAllTasks() {
        List<Tasks> tasks = taskRepository.findAll();
        return tasks;
    }

    @Override
    public Tasks updateTask(Long id, Tasks tasks) {
        Tasks task = taskRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Task not found with specified id : " + id)

        );
        task.setTask_id(tasks.getTask_id());
        task.setStatus(tasks.getStatus());
        task.setUpdated_at(tasks.getUpdated_at());
        task.setDescription(tasks.getDescription());
        task.setDue_date(tasks.getDue_date());
        task.setPriority(tasks.getPriority());
        task.setTitle(tasks.getTitle());
        task.setCreated_at(tasks.getCreated_at());

        return taskRepository.save(tasks);
    }

    @Override
    public void deleteTask(Long id) {
        Tasks tasks = taskRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Task id not found " + id)
        );
        taskRepository.deleteById(id);
    }
}
