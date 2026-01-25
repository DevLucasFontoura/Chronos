'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./PrivateMenu.module.css";

function ChronosIcon() {
  return (
    <svg
      className={styles.logoIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {/* Ampulheta mitológica */}
      <path d="M12 2v4M12 18v4" />
      <path d="M8 6h8M8 18h8" />
      <path d="M6 6l6 6 6-6M6 18l6-6 6 6" />
      <path d="M4 6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6z" />
      <path d="M4 16c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2z" />
      {/* Areia caindo */}
      <path d="M12 8v4" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

function PDFIcon() {
  return (
    <svg
      className={styles.pdfIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className={styles.calendarIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg
      className={styles.logoutIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  );
}

function StatsIcon() {
  return (
    <svg
      className={styles.statsIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

interface PrivateMenuProps {
  onStatsClick?: () => void;
  showStats?: boolean;
  onLogoClick?: () => void;
}

export default function PrivateMenu({ onStatsClick, showStats = false, onLogoClick }: PrivateMenuProps) {
  const router = useRouter();
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleLogout = () => {
    router.push('/');
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onLogoClick) {
      onLogoClick();
    }
    router.push('/Dashboard');
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.content}>
          {/* Logo / Nome da Aplicação */}
          <Link href="/Dashboard" className={styles.logo} onClick={handleLogoClick}>
            <div className={styles.logoContainer}>
              <ChronosIcon />
              <div className={styles.logoGlow}></div>
            </div>
            <span className={styles.logoText}>CHRONOS</span>
          </Link>

          {/* Links de Navegação */}
          <div className={styles.navLinks}>
            <button 
              className={`${styles.historyButton} ${showStats ? styles.historyButtonActive : ''}`}
              onClick={onStatsClick}
            >
              <StatsIcon />
              Stats
            </button>
            <button className={styles.exportButton}>
              <PDFIcon />
              Exportar PDF
            </button>
            <div className={styles.dateContainer}>
              <CalendarIcon />
              <span className={styles.currentDate}>{currentDate}</span>
            </div>
            <button className={styles.logoutButton} onClick={handleLogout}>
              <LogoutIcon />
              Sair
            </button>
          </div>

          {/* Menu Mobile */}
          <div className={styles.mobileMenu}>
            <button className={styles.mobileButton} aria-label="Menu">
              <svg
                className={styles.mobileIcon}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

