'use client';

import styles from './HistoryCard.module.css';

interface HistoryItem {
  project: string;
  task: string;
  date: string;
  duration: string;
}

interface HistoryCardProps {
  history: HistoryItem[];
}

export default function HistoryCard({ history }: HistoryCardProps) {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Histórico Recente</h3>
      </div>
      <div className={styles.historyList}>
        {history.map((item, idx) => (
          <div key={idx} className={styles.historyItem}>
            <div className={styles.historyInfo}>
              <span className={styles.historyProject}>{item.project}</span>
              <span className={styles.historyTask}>{item.task}</span>
            </div>
            <div className={styles.historyMeta}>
              <span className={styles.historyDate}>{item.date}</span>
              <span className={styles.historyDuration}>{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.exportButton}>
        📄 Exportar PDF
      </button>
    </div>
  );
}

