import styles from "./Preview.module.css";

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

export default function Preview() {
  return (
    <section className={styles.preview}>
      <div className={styles.previewContent}>
        <h2 className={styles.sectionTitle}>Preview</h2>
        <p className={styles.sectionSubtitle}>
          Veja como o Chronos transforma seu controle de tempo
        </p>
        <div className={styles.previewGrid}>
          {/* Timer Section */}
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <TimerIcon />
              <h3 className={styles.cardTitle}>Timer Ativo</h3>
            </div>
            <div className={styles.timerDisplay}>
              <div className={styles.timerTime}>01:23:45</div>
              <div className={styles.timerInfo}>
                <span className={styles.timerProject}>Projeto: Website Redesign</span>
                <span className={styles.timerTask}>Tarefa: Implementar Header</span>
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

          {/* Projects & Tasks Section */}
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Projetos e Tarefas</h3>
            </div>
            <div className={styles.projectsList}>
              <div className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectName}>Website Redesign</span>
                  <span className={styles.projectTime}>12h 30m</span>
                </div>
                <div className={styles.tasksList}>
                  <div className={`${styles.taskItem} ${styles.taskActive}`}>
                    <span className={styles.taskName}>Implementar Header</span>
                    <span className={styles.taskStatus}>Em andamento</span>
                  </div>
                  <div className={styles.taskItem}>
                    <span className={styles.taskName}>Criar Footer</span>
                    <span className={styles.taskStatus}>Não iniciada</span>
                  </div>
                  <div className={styles.taskItem}>
                    <span className={styles.taskName}>Responsividade</span>
                    <span className={styles.taskStatus}>Finalizada</span>
                  </div>
                </div>
              </div>
              <div className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectName}>App Mobile</span>
                  <span className={styles.projectTime}>8h 15m</span>
                </div>
                <div className={styles.tasksList}>
                  <div className={styles.taskItem}>
                    <span className={styles.taskName}>Tela de Login</span>
                    <span className={styles.taskStatus}>Finalizada</span>
                  </div>
                  <div className={styles.taskItem}>
                    <span className={styles.taskName}>Navegação</span>
                    <span className={styles.taskStatus}>Não iniciada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* History Section */}
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Histórico Recente</h3>
            </div>
            <div className={styles.historyList}>
              <div className={styles.historyItem}>
                <div className={styles.historyInfo}>
                  <span className={styles.historyProject}>Website Redesign</span>
                  <span className={styles.historyTask}>Implementar Header</span>
                </div>
                <div className={styles.historyMeta}>
                  <span className={styles.historyDate}>Hoje, 14:30</span>
                  <span className={styles.historyDuration}>01:23:45</span>
                </div>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyInfo}>
                  <span className={styles.historyProject}>Website Redesign</span>
                  <span className={styles.historyTask}>Responsividade</span>
                </div>
                <div className={styles.historyMeta}>
                  <span className={styles.historyDate}>Hoje, 10:15</span>
                  <span className={styles.historyDuration}>02:45:12</span>
                </div>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyInfo}>
                  <span className={styles.historyProject}>App Mobile</span>
                  <span className={styles.historyTask}>Tela de Login</span>
                </div>
                <div className={styles.historyMeta}>
                  <span className={styles.historyDate}>Ontem, 16:20</span>
                  <span className={styles.historyDuration}>03:10:30</span>
                </div>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyInfo}>
                  <span className={styles.historyProject}>App Mobile</span>
                  <span className={styles.historyTask}>Tela de Login</span>
                </div>
                <div className={styles.historyMeta}>
                  <span className={styles.historyDate}>Ontem, 13:00</span>
                  <span className={styles.historyDuration}>01:45:00</span>
                </div>
              </div>
            </div>
            <button className={styles.exportButton}>
              📄 Exportar PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

