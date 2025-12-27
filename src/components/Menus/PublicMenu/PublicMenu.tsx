import Link from "next/link";
import styles from "./PublicMenu.module.css";

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

export default function PublicMenu() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.content}>
          {/* Logo / Nome da Aplicação */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoContainer}>
              <ChronosIcon />
              <div className={styles.logoGlow}></div>
            </div>
            <span className={styles.logoText}>CHRONOS</span>
          </Link>

          {/* Links de Navegação */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
            <Link href="/Dashboard" className={styles.navLink}>
              Entrar
            </Link>
            <Link href="/Dashboard" className={styles.button}>
              Começar Agora
            </Link>
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

