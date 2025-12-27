import styles from './ProjectsCard.module.css';

interface Project {
  name: string;
  time: string;
}

interface ProjectsCardProps {
  projects: Project[];
}

export default function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Add Project</h3>
      </div>
      <div className={styles.addProjectContainer}>
        <input
          type="text"
          className={styles.projectInput}
          placeholder="Project Name"
        />
        <button
          className={styles.addButton}
          aria-label="Add Project"
        >
          +
        </button>
      </div>
      <div className={styles.projectsList}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.projectItem}>
            <span className={styles.projectName}>{project.name}</span>
            <span className={styles.projectTime}>{project.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
