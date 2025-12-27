'use client';

import { useState } from 'react';
import styles from './dashboard.module.css';
import PrivateMenu from '@/components/Menus/PrivateMenu/PrivateMenu';
import TimerCard from '@/components/Dashboard/TimerCard/TimerCard';
import ProjectsCard from '@/components/Dashboard/ProjectsCard/ProjectsCard';
import TaskCard from '@/components/Dashboard/TaskCard/TaskCard';
import HistoryCard from '@/components/Dashboard/HistoryCard/HistoryCard';

export default function Dashboard() {
  const [showHistory, setShowHistory] = useState(false);
  const projects = [
    {
      name: 'Website Redesign',
      time: '12h 30m',
    },
    {
      name: 'App Mobile',
      time: '8h 15m',
    },
    {
      name: 'Sistema de E-commerce',
      time: '24h 45m',
    },
    {
      name: 'Dashboard Analytics',
      time: '18h 20m',
    },
    {
      name: 'API Backend',
      time: '32h 10m',
    },
    {
      name: 'Design System',
      time: '15h 55m',
    },
    {
      name: 'Documentação Técnica',
      time: '9h 30m',
    },
    {
      name: 'Testes Automatizados',
      time: '21h 15m',
    },
    {
      name: 'Otimização Performance',
      time: '14h 40m',
    },
    {
      name: 'Integração de Pagamentos',
      time: '19h 25m',
    },
  ];

  const tasks = [
    { name: 'Implementar Header', status: 'Active' },
    { name: 'Responsividade Mobile', status: 'Pending' },
    { name: 'Tela de Login', status: 'Completed' },
    { name: 'API Integration', status: 'Active' },
    { name: 'Database Setup', status: 'Pending' },
    { name: 'Testing', status: 'Pending' },
  ];

  const history = [
    { project: 'Website Redesign', task: 'Implementar Header', date: 'Hoje, 14:30', duration: '01:23:45' },
    { project: 'Website Redesign', task: 'Responsividade', date: 'Hoje, 10:15', duration: '02:45:12' },
    { project: 'App Mobile', task: 'Tela de Login', date: 'Ontem, 16:20', duration: '03:10:30' },
    { project: 'App Mobile', task: 'Tela de Login', date: 'Ontem, 13:00', duration: '01:45:00' },
    { project: 'Sistema de E-commerce', task: 'Checkout Flow', date: 'Ontem, 09:00', duration: '02:15:30' },
    { project: 'Dashboard Analytics', task: 'Gráficos', date: '25/01, 15:45', duration: '04:30:00' },
  ];

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
              selectedProject="Website Redesign"
              selectedTask="Implementar Header"
            />
            <ProjectsCard projects={projects} />
            <TaskCard tasks={tasks} />
          </div>
        )}
      </div>
    </div>
  );
}
