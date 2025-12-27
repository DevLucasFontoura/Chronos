import Link from "next/link";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.finalCTA}>
      <div className={styles.finalCTAContent}>
        <h2 className={styles.finalCTATitle}>Seu tempo merece disciplina.</h2>
        <p className={styles.finalCTASubtitle}>
          Comece agora e transforme a forma como você controla seu tempo
        </p>
        <div className={styles.finalCTAButtons}>
          <Link href="/Dashboard" className={`${styles.finalCTAButton} ${styles.finalCTAButtonPrimary}`}>
            Começar agora
          </Link>
          <Link href="/Dashboard" className={`${styles.finalCTAButton} ${styles.finalCTAButtonSecondary}`}>
            Entrar
          </Link>
        </div>
      </div>
    </section>
  );
}

