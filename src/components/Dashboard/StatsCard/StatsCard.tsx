'use client';

import { useState } from 'react';
import { Clock, FolderOpen, CheckSquare, CheckCircle2 } from 'lucide-react';
import styles from './StatsCard.module.css';
import HistoryCard from '../HistoryCard/HistoryCard';

interface Project {
  name: string;
  totalSeconds: number;
}

interface Task {
  name: string;
  completed: boolean;
  projectName: string;
}

interface HistoryItem {
  project: string;
  task: string;
  date: string;
  duration: string;
}

interface StatsCardProps {
  projects: Project[];
  tasks: Task[];
  history: HistoryItem[];
}

function formatHours(seconds: number): string {
  const hours = (seconds / 3600).toFixed(1);
  return `${hours}h`;
}

function formatProjectTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

// Convert duration string "HH:MM:SS" to seconds
function durationToSeconds(duration: string): number {
  const parts = duration.split(':');
  if (parts.length !== 3) return 0;
  const hours = parseInt(parts[0], 10) || 0;
  const minutes = parseInt(parts[1], 10) || 0;
  const seconds = parseInt(parts[2], 10) || 0;
  return hours * 3600 + minutes * 60 + seconds;
}

export default function StatsCard({ projects, tasks, history }: StatsCardProps) {
  const [activeTab, setActiveTab] = useState<'statistics' | 'history'>('statistics');
  
  // Calculate statistics from history
  const historyByProject = history.reduce((acc, item) => {
    const seconds = durationToSeconds(item.duration);
    if (!acc[item.project]) {
      acc[item.project] = 0;
    }
    acc[item.project] += seconds;
    return acc;
  }, {} as Record<string, number>);

  // Get unique projects from history
  const uniqueProjects = Array.from(new Set(history.map(item => item.project)));
  
  // Get unique tasks from history
  const uniqueTasks = Array.from(new Set(history.map(item => item.task)));
  
  // Calculate total hours from history
  const totalHoursFromHistory = Object.values(historyByProject).reduce((sum, seconds) => sum + seconds, 0);
  
  // Calculate totals
  const totalHours = totalHoursFromHistory;
  const totalProjects = uniqueProjects.length;
  const totalTasks = uniqueTasks.length;
  
  // Count completed tasks from history (tasks that appear in history are considered completed)
  const completedTasks = uniqueTasks.length;

  // Create project data from history, sorted by time descending
  const projectDataFromHistory = uniqueProjects
    .map(projectName => ({
      name: projectName,
      seconds: historyByProject[projectName] || 0
    }))
    .filter(p => p.seconds > 0) // Only include projects with time
    .sort((a, b) => b.seconds - a.seconds); // Sort by time descending

  // Get top 4 projects for charts
  const top4Projects = projectDataFromHistory.slice(0, 4);
  
  // Calculate sum of remaining projects (5th and beyond)
  const remainingProjects = projectDataFromHistory.slice(4);
  const othersTotalSeconds = remainingProjects.reduce((sum, p) => sum + p.seconds, 0);
  
  // Create chart data: top 4 + "Others"
  const chartProjects = [...top4Projects];
  if (othersTotalSeconds > 0) {
    chartProjects.push({
      name: 'Outros',
      seconds: othersTotalSeconds
    });
  }
  
  // Calculate total hours for chart (top 4 + others)
  const chartTotalHours = chartProjects.reduce((sum, p) => sum + p.seconds, 0);
  
  // Calculate percentages for pie chart
  const maxProjectTime = chartProjects.length > 0 
    ? Math.max(...chartProjects.map(p => p.seconds), 1)
    : 1;
    
  // Data for charts (top 4 + Others)
  const chartData = chartProjects.map(p => ({
    name: p.name,
    seconds: p.seconds,
    percentage: (p.seconds / maxProjectTime) * 100,
    percentageOfTotal: chartTotalHours > 0 ? (p.seconds / chartTotalHours) * 100 : 0
  }));

  // Data for table (all projects)
  const projectData = projectDataFromHistory.map(p => ({
    name: p.name,
    seconds: p.seconds,
    percentage: (p.seconds / maxProjectTime) * 100,
    percentageOfTotal: totalHours > 0 ? (p.seconds / totalHours) * 100 : 0
  }));

  // Colors for charts - using system cyan with opacity variations
  const baseColor = '#46f3ed';
  const colors = [
    baseColor,
    '#46f3edcc', // 80% opacity
    '#46f3ed99', // 60% opacity
    '#46f3ed66', // 40% opacity
    '#46f3ed33', // 20% opacity
  ];

  // Pie chart calculations (using top 5)
  let currentAngle = -90; // Start from top
  const pieSegments = chartData.map((project, index) => {
    const percentage = project.percentageOfTotal;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    // Calculate path for pie slice
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    const radius = 80;
    const centerX = 100;
    const centerY = 100;

    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    const largeArcFlag = angle > 180 ? 1 : 0;

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');

    return {
      ...project,
      path: pathData,
      color: colors[index % colors.length],
      startAngle,
      endAngle,
      midAngle: startAngle + angle / 2
    };
  });

  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'statistics' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('statistics')}
          >
            Statistics
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'history' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('history')}
          >
            Recent History
          </button>
        </div>
      </div>

      {activeTab === 'statistics' ? (
        <div className={styles.tabContent}>
          <div className={styles.statsContent}>
        {/* Summary Cards */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>
              <Clock size={24} />
            </div>
            <div className={styles.summaryInfo}>
              <div className={styles.summaryLabel}>Total Hours</div>
              <div className={styles.summaryValue}>{formatHours(totalHours)}</div>
            </div>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>
              <FolderOpen size={24} />
            </div>
            <div className={styles.summaryInfo}>
              <div className={styles.summaryLabel}>Total Projects</div>
              <div className={styles.summaryValue}>{totalProjects}</div>
            </div>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>
              <CheckSquare size={24} />
            </div>
            <div className={styles.summaryInfo}>
              <div className={styles.summaryLabel}>Total Tasks</div>
              <div className={styles.summaryValue}>{totalTasks}</div>
            </div>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>
              <CheckCircle2 size={24} />
            </div>
            <div className={styles.summaryInfo}>
              <div className={styles.summaryLabel}>Completed</div>
              <div className={styles.summaryValue}>{completedTasks}</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        {chartData.length > 0 ? (
          <>
            <div className={styles.chartsGrid}>
              {/* Pie Chart */}
              <div className={styles.chartCard}>
                <h4 className={styles.chartTitle}>Time by Project</h4>
                <div className={styles.pieChartContainer}>
                  <svg viewBox="0 0 200 200" className={styles.pieChart}>
                    {pieSegments.map((segment, index) => (
                      <g key={index}>
                        <path
                          d={segment.path}
                          fill={segment.color}
                          opacity={0.8}
                          stroke="rgba(15, 23, 42, 0.8)"
                          strokeWidth="2"
                        />
                        {segment.percentageOfTotal > 5 && (
                          <text
                            x={100 + 90 * Math.cos((segment.midAngle * Math.PI) / 180)}
                            y={100 + 90 * Math.sin((segment.midAngle * Math.PI) / 180)}
                            textAnchor="middle"
                            fill="white"
                            fontSize="10"
                            fontWeight="600"
                          >
                            {segment.percentageOfTotal.toFixed(0)}%
                          </text>
                        )}
                      </g>
                    ))}
                  </svg>
                  <div className={styles.pieLegend}>
                    {chartData.map((project, index) => (
                      <div key={index} className={styles.legendItem}>
                        <div
                          className={styles.legendColor}
                          style={{ backgroundColor: colors[index % colors.length] }}
                        />
                        <span className={styles.legendName}>{project.name}</span>
                        <span className={styles.legendValue}>
                          {formatProjectTime(project.seconds)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className={styles.chartCard}>
                <h4 className={styles.chartTitle}>Hours per Project</h4>
                <div className={styles.barChartContainer}>
                  {chartData.map((project, index) => {
                    const barHeight = (project.seconds / maxProjectTime) * 100;
                    return (
                      <div key={index} className={styles.barItem}>
                        <div className={styles.barWrapper}>
                          <div
                            className={styles.bar}
                            style={{
                              height: `${barHeight}%`,
                              backgroundColor: colors[index % colors.length]
                            }}
                          >
                            <span className={styles.barValue}>
                              {formatProjectTime(project.seconds)}
                            </span>
                          </div>
                        </div>
                        <div className={styles.barLabel}>{project.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Project Details Table */}
            <div className={styles.projectTableContainer}>
              <h4 className={styles.tableTitle}>Time by Project</h4>
              <table className={styles.projectTable}>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Total Time</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project, index) => (
                    <tr key={index}>
                      <td className={styles.projectName}>{project.name}</td>
                      <td className={styles.projectTime}>
                        {formatProjectTime(project.seconds)}
                      </td>
                      <td className={styles.projectPercentage}>
                        <div className={styles.percentageContainer}>
                          <span className={styles.percentageText}>
                            {project.percentageOfTotal.toFixed(1)}%
                          </span>
                          <div className={styles.percentageBar}>
                            <div
                              className={styles.percentageFill}
                              style={{
                                width: `${project.percentageOfTotal}%`,
                                backgroundColor: colors[index % colors.length]
                              }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <p>Nenhum dado de histórico disponível para exibir gráficos.</p>
          </div>
        )}
          </div>
        </div>
      ) : (
        <div className={styles.tabContent}>
          <HistoryCard history={history} />
        </div>
      )}
    </div>
  );
}
