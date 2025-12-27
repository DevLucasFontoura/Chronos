import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerName}>Chronos</div>
            <div className={styles.footerSlogan}>Disciple Your Time</div>
            <p className={styles.footerDescription}>
              Controle seu tempo com intenção, foco e clareza.
              Cada minuto precisa ter um propósito.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Produto</h4>
              <ul className={styles.footerList}>
                <li>
                  <Link href="/" className={styles.footerLink}>
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/login" className={styles.footerLink}>
                    Entrar
                  </Link>
                </li>
                <li>
                  <Link href="/login" className={styles.footerLink}>
                    Começar Agora
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Recursos</h4>
              <ul className={styles.footerList}>
                <li>
                  <span className={styles.footerLink}>Time Tracker</span>
                </li>
                <li>
                  <span className={styles.footerLink}>Relatórios PDF</span>
                </li>
                <li>
                  <span className={styles.footerLink}>Histórico</span>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Legal</h4>
              <ul className={styles.footerList}>
                <li>
                  <Link href="/terms" className={styles.footerLink}>
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={styles.footerLink}>
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            © {new Date().getFullYear()} Chronos. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

