package com.rashmi.WebApplication.controller;

import com.rashmi.WebApplication.entity.Tasks;
import com.rashmi.WebApplication.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/")
public class RashmiController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Tasks> createEmployee(@RequestBody Tasks tasks){
        Tasks savedTasks = taskService.createTask(tasks);
        return new ResponseEntity<>(savedTasks, HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<List<Tasks>> getAllEmployees(){
        List<Tasks> employees = taskService.getAllTasks();
        return ResponseEntity.ok(employees);
    }

    @PutMapping("{id}")
    public ResponseEntity<Tasks> updatedTask(@PathVariable("id") Long id, @RequestBody Tasks updatedTask){
        Tasks tasks = taskService.updateTask(id, updatedTask);
        return ResponseEntity.ok(tasks);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long id){
        taskService.deleteTask(id);
        return ResponseEntity.ok("Employee deleted");
    }

}
