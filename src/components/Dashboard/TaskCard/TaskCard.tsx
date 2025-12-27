'use client';

import { useState } from 'react';
import styles from './TaskCard.module.css';

interface Task {
  name: string;
  completed: boolean;
}

interface TaskCardProps {
  tasks: Task[];
  selectedTask: string | null;
  onTaskSelect: (task: string | null) => void;
  onAddTask: (taskName: string) => void;
  disabled?: boolean;
  runningTask?: string | null;
}

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function RunningIcon() {
  return (
    <span className={styles.runningIcon}>-</span>
  );
}

function XIcon() {
  return (
    <svg
      className={styles.xIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function TaskCard({ tasks, selectedTask, onTaskSelect, onAddTask, disabled = false, runningTask = null }: TaskCardProps) {
  const [taskName, setTaskName] = useState('');

  const handleAdd = () => {
    if (taskName.trim() && !disabled) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disabled) {
      handleAdd();
    }
  };

  return (
    <div className={`${styles.dashboardCard} ${disabled ? styles.dashboardCardDisabled : ''}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Add Task</h3>
      </div>
      <div className={styles.addTaskContainer}>
        <input
          type="text"
          className={styles.taskInput}
          placeholder={disabled ? 'Select a project first' : 'Task Name'}
          disabled={disabled}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={styles.addButton}
          aria-label="Add Task"
          disabled={disabled}
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className={styles.tasksList}>
        {disabled ? (
          <div className={styles.taskPlaceholder}>
            Select a project first
          </div>
        ) : (
          tasks.map((task, idx) => {
            const isRunning = runningTask === task.name;
            return (
              <div 
                key={idx} 
                className={`${styles.taskItem} ${selectedTask === task.name ? styles.taskItemSelected : ''}`}
                onClick={() => onTaskSelect(selectedTask === task.name ? null : task.name)}
              >
                <div className={styles.taskNameContainer}>
                  <span className={styles.taskName}>{task.name}</span>
                  {isRunning && <RunningIcon />}
                  {!isRunning && task.completed && <CheckIcon />}
                  {!isRunning && !task.completed && <XIcon />}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

