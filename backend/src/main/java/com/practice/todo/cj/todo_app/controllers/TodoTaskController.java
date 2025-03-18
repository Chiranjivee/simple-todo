package com.practice.todo.cj.todo_app.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.todo.cj.todo_app.entity.TodoTask;

@RestController
@RequestMapping("/todos")
public class TodoTaskController {
    
    List<TodoTask> todos = new ArrayList<>();

    @PostMapping
    @CrossOrigin(origins = "*")
    public TodoTask createTodoTask(@RequestBody TodoTask task) {

        todos.add(task);
        return todos.get(todos.size() - 1);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public List<TodoTask> getAllTodoTasks() {
        return todos;
    }
}
