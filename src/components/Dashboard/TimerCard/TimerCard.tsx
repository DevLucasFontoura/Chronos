import styles from './TimerCard.module.css';

function TimerIcon() {
  return (
    <svg
      className={styles.timerIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      className={styles.pauseIcon}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className={styles.playIcon}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

interface TimerCardProps {
  selectedProject: string;
  selectedTask: string;
}

export default function TimerCard({ selectedProject, selectedTask }: TimerCardProps) {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <TimerIcon />
        <h3 className={styles.cardTitle}>Timer Ativo</h3>
      </div>
      <div className={styles.timerDisplay}>
        <div className={styles.timerTime}>01:23:45</div>
        <div className={styles.timerInfo}>
          <span className={styles.timerProject}>Projeto: {selectedProject}</span>
          <span className={styles.timerTask}>Tarefa: {selectedTask}</span>
        </div>
      </div>
      <div className={styles.timerControls}>
        <button className={styles.controlButton}>
          <PauseIcon />
          Pausar
        </button>
        <button className={`${styles.controlButton} ${styles.controlButtonStop}`}>
          Finalizar
        </button>
      </div>
    </div>
  );
}
