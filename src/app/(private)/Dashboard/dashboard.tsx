'use client';

import { useState } from 'react';
import styles from './dashboard.module.css';
import PrivateMenu from '@/components/Menus/PrivateMenu/PrivateMenu';
import TimerCard from '@/components/Dashboard/TimerCard/TimerCard';
import ProjectsCard from '@/components/Dashboard/ProjectsCard/ProjectsCard';
import TaskCard from '@/components/Dashboard/TaskCard/TaskCard';
import HistoryCard from '@/components/Dashboard/HistoryCard/HistoryCard';
import StatsCard from '@/components/Dashboard/StatsCard/StatsCard';

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
  const [showStats, setShowStats] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    { name: 'Website Redesign', totalSeconds: 14400 }, // 4h
    { name: 'App Mobile', totalSeconds: 25200 }, // 7h
    { name: 'E-commerce System', totalSeconds: 32400 }, // 9h
    { name: 'Dashboard Analytics', totalSeconds: 18000 }, // 5h
    { name: 'API Backend', totalSeconds: 28800 }, // 8h
    { name: 'Mobile App iOS', totalSeconds: 21600 }, // 6h
    { name: 'Mobile App Android', totalSeconds: 19800 }, // 5.5h
    { name: 'Landing Page', totalSeconds: 10800 }, // 3h
    { name: 'Payment System', totalSeconds: 36000 }, // 10h
    { name: 'CRM Integration', totalSeconds: 14400 }, // 4h
  ]);
  const [tasks, setTasks] = useState<Task[]>([
    { name: 'Implement Header', completed: true, projectName: 'Website Redesign' },
    { name: 'Mobile Responsiveness', completed: true, projectName: 'Website Redesign' },
    { name: 'Login Screen', completed: false, projectName: 'Website Redesign' },
    { name: 'API Integration', completed: true, projectName: 'App Mobile' },
    { name: 'Database Setup', completed: false, projectName: 'App Mobile' },
    { name: 'Checkout Flow', completed: true, projectName: 'E-commerce System' },
    { name: 'Payment Gateway', completed: false, projectName: 'E-commerce System' },
    { name: 'Sales Charts', completed: true, projectName: 'Dashboard Analytics' },
    { name: 'Custom Reports', completed: true, projectName: 'Dashboard Analytics' },
    { name: 'Data Export', completed: false, projectName: 'Dashboard Analytics' },
    { name: 'REST API Endpoints', completed: true, projectName: 'API Backend' },
    { name: 'JWT Authentication', completed: true, projectName: 'API Backend' },
    { name: 'Swagger Documentation', completed: false, projectName: 'API Backend' },
    { name: 'UI Components', completed: true, projectName: 'Mobile App iOS' },
    { name: 'Navigation Flow', completed: true, projectName: 'Mobile App iOS' },
    { name: 'Push Notifications', completed: false, projectName: 'Mobile App iOS' },
    { name: 'Material Design', completed: true, projectName: 'Mobile App Android' },
    { name: 'RecyclerView', completed: true, projectName: 'Mobile App Android' },
    { name: 'Location Services', completed: false, projectName: 'Mobile App Android' },
    { name: 'Hero Section', completed: true, projectName: 'Landing Page' },
    { name: 'Contact Form', completed: true, projectName: 'Landing Page' },
    { name: 'SEO Optimization', completed: false, projectName: 'Landing Page' },
    { name: 'Gateway Stripe', completed: true, projectName: 'Payment System' },
    { name: 'Gateway PayPal', completed: true, projectName: 'Payment System' },
    { name: 'Webhooks', completed: false, projectName: 'Payment System' },
    { name: 'Contact Sync', completed: true, projectName: 'CRM Integration' },
    { name: 'Lead Import', completed: true, projectName: 'CRM Integration' },
    { name: 'Task Automation', completed: false, projectName: 'CRM Integration' },
  ]);
  const [history, setHistory] = useState<HistoryItem[]>([
    { project: 'Website Redesign', task: 'Implement Header', date: 'Today, 14:30', duration: '01:23:45' },
    { project: 'Website Redesign', task: 'Mobile Responsiveness', date: 'Today, 10:15', duration: '02:45:12' },
    { project: 'App Mobile', task: 'API Integration', date: 'Yesterday, 16:20', duration: '03:10:30' },
    { project: 'E-commerce System', task: 'Checkout Flow', date: 'Yesterday, 09:00', duration: '02:15:30' },
    { project: 'Website Redesign', task: 'Login Screen', date: '25/12/2024, 15:45', duration: '01:30:00' },
    { project: 'Dashboard Analytics', task: 'Sales Charts', date: '24/01/2025, 11:00', duration: '02:30:00' },
    { project: 'Dashboard Analytics', task: 'Custom Reports', date: '24/01/2025, 08:30', duration: '02:30:00' },
    { project: 'API Backend', task: 'REST API Endpoints', date: '23/01/2025, 15:00', duration: '04:00:00' },
    { project: 'API Backend', task: 'JWT Authentication', date: '23/01/2025, 10:00', duration: '04:00:00' },
    { project: 'Mobile App iOS', task: 'UI Components', date: '22/01/2025, 14:00', duration: '03:00:00' },
    { project: 'Mobile App iOS', task: 'Navigation Flow', date: '22/01/2025, 10:00', duration: '03:00:00' },
    { project: 'Mobile App Android', task: 'Material Design', date: '21/01/2025, 13:00', duration: '02:45:00' },
    { project: 'Mobile App Android', task: 'RecyclerView', date: '21/01/2025, 09:00', duration: '02:45:00' },
    { project: 'Landing Page', task: 'Hero Section', date: '20/01/2025, 11:00', duration: '01:30:00' },
    { project: 'Landing Page', task: 'Contact Form', date: '20/01/2025, 09:00', duration: '01:30:00' },
    { project: 'Payment System', task: 'Gateway Stripe', date: '19/01/2025, 16:00', duration: '05:00:00' },
    { project: 'Payment System', task: 'Gateway PayPal', date: '19/01/2025, 10:00', duration: '05:00:00' },
    { project: 'CRM Integration', task: 'Contact Sync', date: '18/01/2025, 14:00', duration: '02:00:00' },
    { project: 'CRM Integration', task: 'Lead Import', date: '18/01/2025, 11:00', duration: '02:00:00' },
    { project: 'App Mobile', task: 'Database Setup', date: '24/01/2025, 11:20', duration: '02:45:00' },
    { project: 'E-commerce System', task: 'Payment Gateway', date: '24/01/2025, 09:15', duration: '03:20:15' },
    { project: 'Website Redesign', task: 'SEO Optimization', date: '23/01/2025, 16:30', duration: '01:15:30' },
    { project: 'App Mobile', task: 'UI/UX Design', date: '23/01/2025, 14:00', duration: '04:10:45' },
    { project: 'E-commerce System', task: 'Shopping Cart', date: '23/01/2025, 10:45', duration: '02:30:20' },
    { project: 'Website Redesign', task: 'Analytics Integration', date: '22/01/2025, 15:20', duration: '01:45:10' },
    { project: 'App Mobile', task: 'Push Notifications', date: '22/01/2025, 13:10', duration: '03:00:00' },
    { project: 'E-commerce System', task: 'Inventory Management', date: '22/01/2025, 08:30', duration: '02:15:45' },
    { project: 'Website Redesign', task: 'A/B Testing', date: '21/01/2025, 17:00', duration: '01:30:30' },
    { project: 'App Mobile', task: 'OAuth Authentication', date: '21/01/2025, 14:45', duration: '03:45:20' },
    { project: 'E-commerce System', task: 'Sales Reports', date: '21/01/2025, 11:15', duration: '02:20:10' },
    { project: 'Website Redesign', task: 'Performance Optimization', date: '20/01/2025, 16:00', duration: '01:50:00' },
    { project: 'App Mobile', task: 'Offline Mode', date: '20/01/2025, 13:30', duration: '04:00:15' },
    { project: 'E-commerce System', task: 'Coupon System', date: '20/01/2025, 09:45', duration: '02:35:30' },
    { project: 'Website Redesign', task: 'Accessibility Features', date: '19/01/2025, 15:45', duration: '01:25:45' },
    { project: 'App Mobile', task: 'Geolocation', date: '19/01/2025, 12:20', duration: '02:50:00' },
    { project: 'E-commerce System', task: 'Multi-language', date: '19/01/2025, 10:00', duration: '03:10:20' },
    { project: 'Website Redesign', task: 'Dark Mode', date: '18/01/2025, 17:30', duration: '01:40:15' },
    { project: 'App Mobile', task: 'Biometrics', date: '18/01/2025, 14:15', duration: '02:15:30' },
    { project: 'E-commerce System', task: 'ERP Integration', date: '18/01/2025, 08:45', duration: '04:20:00' },
    { project: 'Website Redesign', task: 'Blog Section', date: '17/01/2025, 16:20', duration: '02:00:45' },
    { project: 'App Mobile', task: 'Chat Support', date: '17/01/2025, 13:00', duration: '03:30:10' },
    { project: 'E-commerce System', task: 'Wishlist', date: '17/01/2025, 11:30', duration: '01:45:20' },
    { project: 'Website Redesign', task: 'Newsletter Signup', date: '16/01/2025, 15:10', duration: '01:20:30' },
    { project: 'App Mobile', task: 'Social Login', date: '16/01/2025, 12:45', duration: '02:30:00' },
    { project: 'E-commerce System', task: 'Reviews System', date: '16/01/2025, 09:20', duration: '03:15:45' },
    { project: 'Website Redesign', task: 'Contact Form', date: '15/01/2025, 14:30', duration: '01:35:20' },
    { project: 'App Mobile', task: 'In-App Purchases', date: '15/01/2025, 11:15', duration: '03:45:30' },
    { project: 'E-commerce System', task: 'Shipping Calculator', date: '15/01/2025, 08:00', duration: '02:10:15' },
    { project: 'Website Redesign', task: 'FAQ Section', date: '14/01/2025, 16:45', duration: '01:25:00' },
    { project: 'App Mobile', task: 'Video Streaming', date: '14/01/2025, 13:30', duration: '04:15:20' },
    { project: 'E-commerce System', task: 'Loyalty Program', date: '14/01/2025, 10:20', duration: '02:50:30' },
    { project: 'Website Redesign', task: 'Sitemap Generation', date: '13/01/2025, 15:00', duration: '01:15:45' },
    { project: 'App Mobile', task: 'AR Features', date: '13/01/2025, 12:00', duration: '03:20:10' },
    { project: 'E-commerce System', task: 'Subscription Model', date: '13/01/2025, 09:45', duration: '02:40:00' },
    { project: 'Website Redesign', task: 'Cookie Consent', date: '12/01/2025, 14:20', duration: '01:30:15' },
    { project: 'App Mobile', task: 'Widget System', date: '12/01/2025, 11:30', duration: '02:55:45' },
    { project: 'E-commerce System', task: 'Bulk Import', date: '12/01/2025, 08:15', duration: '03:30:20' },
    { project: 'Website Redesign', task: 'RSS Feed', date: '11/01/2025, 16:00', duration: '01:20:30' },
    { project: 'App Mobile', task: 'Background Sync', date: '11/01/2025, 13:45', duration: '04:05:15' },
    { project: 'E-commerce System', task: 'Affiliate System', date: '11/01/2025, 10:30', duration: '02:25:40' },
    { project: 'Website Redesign', task: 'Sitemap XML', date: '10/01/2025, 15:30', duration: '01:10:20' },
    { project: 'App Mobile', task: 'Deep Linking', date: '10/01/2025, 12:15', duration: '03:15:30' },
    { project: 'E-commerce System', task: 'Gift Cards', date: '10/01/2025, 09:00', duration: '02:45:15' },
    { project: 'Website Redesign', task: '404 Page', date: '09/01/2025, 14:45', duration: '01:35:00' },
    { project: 'App Mobile', task: 'Crash Reporting', date: '09/01/2025, 11:20', duration: '02:20:45' },
    { project: 'E-commerce System', task: 'Inventory Alerts', date: '09/01/2025, 08:30', duration: '03:00:30' },
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

  const handleStatsClick = () => {
    setShowStats(!showStats);
  };

  const handleLogoClick = () => {
    setShowStats(false);
  };

  return (
    <div className={styles.dashboard}>
      <PrivateMenu 
        onStatsClick={handleStatsClick}
        showStats={showStats}
        onLogoClick={handleLogoClick}
      />
      <div className={styles.dashboardContent}>
        {showStats ? (
          <div className={styles.dashboardHistory}>
            <StatsCard projects={projects} tasks={tasks} history={history} />
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
