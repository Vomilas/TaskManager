package ru.compito.taskmanager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.compito.taskmanager.entity.TaskStatus;
import ru.compito.taskmanager.repository.TaskStatusRepository;
import ru.compito.taskmanager.service.TaskStatusService;

import java.util.List;

@Service(value = "TaskStatusService")
@Transactional
public class TaskStatusServiceImpl implements TaskStatusService {

    @Autowired
    private TaskStatusRepository taskStatusRepository;

    @Override
    public TaskStatus getOne(Integer Id) {
        return taskStatusRepository.getOne(Id);
    }

    @Override
    public List<TaskStatus> findAll() {
        return taskStatusRepository.findAll();
    }

    @Override
    public TaskStatus save(TaskStatus taskStatus) {
        return taskStatusRepository.save(taskStatus);
    }

    @Override
    public void update(TaskStatus updatedTaskStatus) {
        taskStatusRepository.save(updatedTaskStatus);
    }

    @Override
    public void delete(Integer taskStatusId) {
        taskStatusRepository.delete(taskStatusId);
    }
}