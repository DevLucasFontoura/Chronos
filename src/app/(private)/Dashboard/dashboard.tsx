import styles from './dashboard.module.css';
import PrivateMenu from '@/components/Menus/PrivateMenu/PrivateMenu';
import TimerCard from '@/components/Dashboard/TimerCard/TimerCard';
import ProjectsCard from '@/components/Dashboard/ProjectsCard/ProjectsCard';
import HistoryCard from '@/components/Dashboard/HistoryCard/HistoryCard';

export default function Dashboard() {
  const projects = [
    {
      name: 'Website Redesign',
      time: '12h 30m',
      tasks: [
        { name: 'Implementar Header', status: 'Em andamento', active: true },
        { name: 'Criar Footer', status: 'Não iniciada', active: false },
        { name: 'Responsividade', status: 'Finalizada', active: false },
      ],
    },
    {
      name: 'App Mobile',
      time: '8h 15m',
      tasks: [
        { name: 'Tela de Login', status: 'Finalizada', active: false },
        { name: 'Navegação', status: 'Não iniciada', active: false },
      ],
    },
  ];

  const history = [
    { project: 'Website Redesign', task: 'Implementar Header', date: 'Hoje, 14:30', duration: '01:23:45' },
    { project: 'Website Redesign', task: 'Responsividade', date: 'Hoje, 10:15', duration: '02:45:12' },
    { project: 'App Mobile', task: 'Tela de Login', date: 'Ontem, 16:20', duration: '03:10:30' },
    { project: 'App Mobile', task: 'Tela de Login', date: 'Ontem, 13:00', duration: '01:45:00' },
  ];

  return (
    <div className={styles.dashboard}>
      <PrivateMenu />
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.dashboardTitle}>Dashboard</h1>
          <p className={styles.dashboardSubtitle}>
            Controle seu tempo com disciplina e foco
          </p>
        </div>
        <div className={styles.dashboardGrid}>
          <TimerCard
            selectedProject="Website Redesign"
            selectedTask="Implementar Header"
          />
          <ProjectsCard projects={projects} />
          <HistoryCard history={history} />
        </div>
      </div>
    </div>
  );
}
