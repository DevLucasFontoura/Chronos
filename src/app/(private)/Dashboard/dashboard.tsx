'use client';

import { useState } from 'react';
import styles from './dashboard.module.css';
import PrivateMenu from '@/components/Menus/PrivateMenu/PrivateMenu';
import TimerCard from '@/components/Dashboard/TimerCard/TimerCard';
import ProjectsCard from '@/components/Dashboard/ProjectsCard/ProjectsCard';
import TaskCard from '@/components/Dashboard/TaskCard/TaskCard';
import HistoryCard from '@/components/Dashboard/HistoryCard/HistoryCard';

interface Project {
  name: string;
  totalSeconds: number;
}

interface Task {
  name: string;
  completed: boolean;
  projectName: string;
}

interface HistoryItem {
  project: string;
  task: string;
  date: string;
  duration: string;
}

function formatProjectTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatHistoryDate(): string {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const itemDate = new Date(now);
  itemDate.setHours(0, 0, 0, 0);
  
  if (itemDate.getTime() === today.getTime()) {
    return 'Today';
  } else {
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

function formatHistoryTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export default function Dashboard() {
  const [showHistory, setShowHistory] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    { name: 'Website Redesign', totalSeconds: 14400 }, // 4h
    { name: 'App Mobile', totalSeconds: 25200 }, // 7h
    { name: 'Sistema E-commerce', totalSeconds: 32400 }, // 9h
  ]);
  const [tasks, setTasks] = useState<Task[]>([
    { name: 'Implementar Header', completed: true, projectName: 'Website Redesign' },
    { name: 'Responsividade Mobile', completed: true, projectName: 'Website Redesign' },
    { name: 'Tela de Login', completed: false, projectName: 'Website Redesign' },
    { name: 'API Integration', completed: true, projectName: 'App Mobile' },
    { name: 'Database Setup', completed: false, projectName: 'App Mobile' },
    { name: 'Checkout Flow', completed: true, projectName: 'Sistema E-commerce' },
    { name: 'Payment Gateway', completed: false, projectName: 'Sistema E-commerce' },
  ]);
  const [history, setHistory] = useState<HistoryItem[]>([
    { project: 'Website Redesign', task: 'Implementar Header', date: 'Today, 14:30', duration: '01:23:45' },
    { project: 'Website Redesign', task: 'Responsividade Mobile', date: 'Today, 10:15', duration: '02:45:12' },
    { project: 'App Mobile', task: 'API Integration', date: 'Yesterday, 16:20', duration: '03:10:30' },
    { project: 'Sistema E-commerce', task: 'Checkout Flow', date: 'Yesterday, 09:00', duration: '02:15:30' },
    { project: 'Website Redesign', task: 'Tela de Login', date: '25/12/2024, 15:45', duration: '01:30:00' },
  ]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleAddProject = (projectName: string) => {
    if (projectName.trim() && !projects.find(p => p.name === projectName.trim())) {
      setProjects([...projects, { name: projectName.trim(), totalSeconds: 0 }]);
    }
  };

  const handleAddTask = (taskName: string) => {
    if (taskName.trim() && selectedProject) {
      setTasks([...tasks, { 
        name: taskName.trim(), 
        completed: false,
        projectName: selectedProject
      }]);
    }
  };

  const handleTimerFinish = (seconds: number) => {
    if (selectedProject && selectedTask && seconds > 0) {
      // Add to history
      const duration = formatDuration(seconds);
      const date = formatHistoryDate();
      const time = formatHistoryTime();
      
      // Format date with time for HistoryCard formatDate function
      const dateWithTime = date === 'Today' 
        ? `Today, ${time}`
        : `${date}, ${time}`;
      
      setHistory([{
        project: selectedProject,
        task: selectedTask,
        date: dateWithTime,
        duration: duration
      }, ...history]);

      // Update project total time
      setProjects(projects.map(p => 
        p.name === selectedProject 
          ? { ...p, totalSeconds: p.totalSeconds + seconds }
          : p
      ));

      // Mark task as completed
      setTasks(tasks.map(t => 
        t.name === selectedTask && t.projectName === selectedProject
          ? { ...t, completed: true }
          : t
      ));

      // Reset selections
      setSelectedTask(null);
    }
  };

  const projectsWithTime = projects.map(p => ({
    name: p.name,
    time: formatProjectTime(p.totalSeconds)
  }));

  const projectTasks = selectedProject 
    ? tasks.filter(t => t.projectName === selectedProject)
    : [];

  return (
    <div className={styles.dashboard}>
      <PrivateMenu 
        onHistoryClick={() => setShowHistory(!showHistory)}
        showHistory={showHistory}
      />
      <div className={styles.dashboardContent}>
        {showHistory ? (
          <div className={styles.dashboardHistory}>
            <HistoryCard history={history} />
          </div>
        ) : (
          <div className={styles.dashboardTop}>
            <TimerCard
              selectedProject={selectedProject}
              selectedTask={selectedTask}
              onFinish={handleTimerFinish}
              onRunningChange={setIsTimerRunning}
            />
            <ProjectsCard 
              projects={projectsWithTime}
              selectedProject={selectedProject}
              onProjectSelect={(project) => {
                setSelectedProject(project);
                setSelectedTask(null); // Reset task when project changes
              }}
              onAddProject={handleAddProject}
            />
            <TaskCard 
              tasks={projectTasks}
              selectedTask={selectedTask}
              onTaskSelect={setSelectedTask}
              onAddTask={handleAddTask}
              disabled={!selectedProject}
              runningTask={isTimerRunning ? selectedTask : null}
            />
          </div>
        )}
      </div>
    </div>
  );
}
