'use client';

import { useState, useEffect } from 'react';
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
  selectedProject: string | null;
  selectedTask: string | null;
  onFinish?: (seconds: number) => void;
  onRunningChange?: (isRunning: boolean) => void;
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export default function TimerCard({ selectedProject, selectedTask, onFinish, onRunningChange }: TimerCardProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const canStart = selectedProject !== null && selectedTask !== null && !isRunning;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    if (onRunningChange) {
      onRunningChange(isRunning && !isPaused);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isPaused, onRunningChange]);

  const handleStart = () => {
    if (canStart) {
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsPaused(!isPaused);
    }
  };

  const handleFinish = () => {
    if (isRunning && seconds > 0 && onFinish) {
      onFinish(seconds);
    }
    setIsRunning(false);
    setIsPaused(false);
    setSeconds(0);
  };

  return (
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <TimerIcon />
        <h3 className={styles.cardTitle}>Active Timer</h3>
      </div>
      <div className={styles.timerDisplay}>
        <div className={styles.timerTime}>{formatTime(seconds)}</div>
        <div className={styles.timerInfo}>
          <span className={styles.timerProject}>
            Project: {selectedProject || 'No project selected'}
          </span>
          <span className={styles.timerTask}>
            Task: {selectedTask || 'No task selected'}
          </span>
        </div>
      </div>
      <div className={styles.timerControls}>
        {!isRunning ? (
          <button 
            className={styles.controlButton}
            disabled={!canStart}
            onClick={handleStart}
          >
            <PlayIcon />
            Start
          </button>
        ) : (
          <button 
            className={styles.controlButton}
            onClick={handlePause}
          >
            <PauseIcon />
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        )}
        <button 
          className={`${styles.controlButton} ${styles.controlButtonStop}`}
          disabled={!isRunning && !canStart}
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>
    </div>
  );
}
