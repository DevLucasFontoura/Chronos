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

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className={styles.xIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Preview() {
  return (
    <section className={styles.preview}>
      <div className={styles.previewContent}>
        <h2 className={styles.sectionTitle}>Preview</h2>
        <p className={styles.sectionSubtitle}>
          See how Chronos transforms your time control
        </p>
        <div className={styles.previewGrid}>
          {/* Timer Section */}
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <TimerIcon />
              <h3 className={styles.cardTitle}>Active Timer</h3>
            </div>
            <div className={styles.timerDisplay}>
              <div className={styles.timerTime}>01:23:45</div>
              <div className={styles.timerInfo}>
                <span className={styles.timerProject}>Project: Website Redesign</span>
                <span className={styles.timerTask}>Task: Implementar Header</span>
              </div>
            </div>
            <div className={styles.timerControls}>
              <button className={styles.controlButton}>
                <PlayIcon />
                Start
              </button>
              <button className={`${styles.controlButton} ${styles.controlButtonStop}`}>
                Finish
              </button>
            </div>
          </div>

          {/* Projects Section */}
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Add Project</h3>
            </div>
            <div className={styles.addProjectContainer}>
              <input
                type="text"
                className={styles.projectInput}
                placeholder="Project Name"
                readOnly
              />
              <button className={styles.addButton}>+</button>
            </div>
            <div className={styles.projectsList}>
              <div className={`${styles.projectItem} ${styles.projectItemSelected}`}>
                <span className={styles.projectName}>Website Redesign</span>
                <span className={styles.projectTime}>4h 0m</span>
              </div>
              <div className={styles.projectItem}>
                <span className={styles.projectName}>App Mobile</span>
                <span className={styles.projectTime}>7h 0m</span>
              </div>
              <div className={styles.projectItem}>
                <span className={styles.projectName}>Sistema E-commerce</span>
                <span className={styles.projectTime}>9h 0m</span>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Add Task</h3>
            </div>
            <div className={styles.addTaskContainer}>
              <input
                type="text"
                className={styles.taskInput}
                placeholder="Task Name"
                readOnly
              />
              <button className={styles.addButton}>+</button>
            </div>
            <div className={styles.tasksList}>
              <div className={`${styles.taskItem} ${styles.taskItemSelected}`}>
                <div className={styles.taskNameContainer}>
                  <span className={styles.taskName}>Implementar Header</span>
                  <CheckIcon />
                </div>
              </div>
              <div className={styles.taskItem}>
                <div className={styles.taskNameContainer}>
                  <span className={styles.taskName}>Responsividade Mobile</span>
                  <CheckIcon />
                </div>
              </div>
              <div className={styles.taskItem}>
                <div className={styles.taskNameContainer}>
                  <span className={styles.taskName}>Tela de Login</span>
                  <XIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

