'use client';

import { useState } from 'react';
import styles from './ProjectsCard.module.css';

interface Project {
  name: string;
  time: string;
}

interface ProjectsCardProps {
  projects: Project[];
  selectedProject: string | null;
  onProjectSelect: (project: string | null) => void;
  onAddProject: (projectName: string) => void;
}

export default function ProjectsCard({ projects, selectedProject, onProjectSelect, onAddProject }: ProjectsCardProps) {
  const [projectName, setProjectName] = useState('');

  const handleAdd = () => {
    if (projectName.trim()) {
      onAddProject(projectName);
      setProjectName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

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
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={styles.addButton}
          aria-label="Add Project"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className={styles.projectsList}>
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`${styles.projectItem} ${selectedProject === project.name ? styles.projectItemSelected : ''}`}
            onClick={() => onProjectSelect(selectedProject === project.name ? null : project.name)}
          >
            <span className={styles.projectName}>{project.name}</span>
            <span className={styles.projectTime}>{project.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
