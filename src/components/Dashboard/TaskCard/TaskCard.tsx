import styles from './TaskCard.module.css';

interface Task {
  name: string;
  status: string;
}

interface TaskCardProps {
  tasks: Task[];
}

export default function TaskCard({ tasks }: TaskCardProps) {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Add Task</h3>
      </div>
      <div className={styles.addTaskContainer}>
        <input
          type="text"
          className={styles.taskInput}
          placeholder="Task Name"
        />
        <button
          className={styles.addButton}
          aria-label="Add Task"
        >
          +
        </button>
      </div>
      <div className={styles.tasksList}>
        {tasks.map((task, idx) => (
          <div key={idx} className={styles.taskItem}>
            <span className={styles.taskName}>{task.name}</span>
            <span className={styles.taskStatus}>{task.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

