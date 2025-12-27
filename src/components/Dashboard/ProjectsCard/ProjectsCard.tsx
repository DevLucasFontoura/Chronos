import styles from './ProjectsCard.module.css';

interface Task {
  name: string;
  status: string;
  active: boolean;
}

interface Project {
  name: string;
  time: string;
  tasks: Task[];
}

interface ProjectsCardProps {
  projects: Project[];
}

export default function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Projetos</h3>
      </div>
      <div className={styles.addProjectContainer}>
        <input
          type="text"
          className={styles.projectInput}
          placeholder="Nome do projeto"
        />
        <button
          className={styles.addButton}
          aria-label="Adicionar projeto"
        >
          +
        </button>
      </div>
      <div className={styles.projectsList}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.projectItem}>
            <div className={styles.projectHeader}>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectTime}>{project.time}</span>
            </div>
            <div className={styles.tasksList}>
              {project.tasks.map((task, taskIdx) => (
                <div
                  key={taskIdx}
                  className={`${styles.taskItem} ${task.active ? styles.taskActive : ''}`}
                >
                  <span className={styles.taskName}>{task.name}</span>
                  <span className={styles.taskStatus}>{task.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
