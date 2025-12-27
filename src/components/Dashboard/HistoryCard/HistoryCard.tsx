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

function formatDate(dateString: string): { date: string; time: string } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Parse different date formats
  let date: Date | null = null;
  let time: string = '';
  
  // Format: "Hoje, 14:30" or "Today, 14:30"
  if (dateString.toLowerCase().includes('hoje') || dateString.toLowerCase().includes('today')) {
    const timeMatch = dateString.match(/(\d{1,2}):(\d{2})/);
    if (timeMatch) {
      time = timeMatch[0];
      date = new Date();
      date.setHours(parseInt(timeMatch[1]), parseInt(timeMatch[2]), 0, 0);
    }
  }
  // Format: "Ontem, 16:20" or "Yesterday, 16:20"
  else if (dateString.toLowerCase().includes('ontem') || dateString.toLowerCase().includes('yesterday')) {
    const timeMatch = dateString.match(/(\d{1,2}):(\d{2})/);
    if (timeMatch) {
      time = timeMatch[0];
      date = new Date();
      date.setDate(date.getDate() - 1);
      date.setHours(parseInt(timeMatch[1]), parseInt(timeMatch[2]), 0, 0);
    }
  }
  // Format: "25/01, 15:45" or "25/01/2025, 15:45"
  else {
    const dateTimeMatch = dateString.match(/(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?.*?(\d{1,2}):(\d{2})/);
    if (dateTimeMatch) {
      const day = parseInt(dateTimeMatch[1]);
      const month = parseInt(dateTimeMatch[2]) - 1; // Month is 0-indexed
      const year = dateTimeMatch[3] ? parseInt(dateTimeMatch[3]) : today.getFullYear();
      const hour = parseInt(dateTimeMatch[4]);
      const minute = parseInt(dateTimeMatch[5]);
      
      date = new Date(year, month, day, hour, minute, 0, 0);
      time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    }
  }
  
  if (!date) {
    return { date: dateString, time: '' }; // Return original if parsing fails
  }
  
  // Check if it's today
  const itemDate = new Date(date);
  itemDate.setHours(0, 0, 0, 0);
  
  let formattedDate: string;
  if (itemDate.getTime() === today.getTime()) {
    formattedDate = 'Today';
  } else {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    formattedDate = `${day}/${month}/${year}`;
  }
  
  return { date: formattedDate, time };
}

export default function HistoryCard({ history }: HistoryCardProps) {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Recent History</h3>
      </div>
      <div className={styles.historyTableContainer}>
        <table className={styles.historyTable}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Task</th>
              <th>Total Time</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => {
              const { date, time } = formatDate(item.date);
              return (
                <tr key={idx}>
                  <td className={styles.historyProject}>{item.project}</td>
                  <td className={styles.historyTask}>{item.task}</td>
                  <td className={styles.historyDuration}>{item.duration}</td>
                  <td className={styles.historyDate}>{date}</td>
                  <td className={styles.historyTime}>{time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

