import Link from "next/link";
import styles from "./FinalCTA.module.css";

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section className={styles.finalCTA}>
      <div className={styles.finalCTAContent}>
        <div className={styles.finalCTALeft}>
          <h2 className={styles.finalCTATitle}>
            Seu tempo merece
            <br />
            <span className={styles.finalCTATitleAccent}>disciplina.</span>
          </h2>
          <p className={styles.finalCTASubtitle}>
            Comece agora e transforme a forma como você controla seu tempo.
            Cada minuto registrado é um passo em direção à produtividade real.
          </p>
          <div className={styles.finalCTAFeatures}>
            <div className={styles.finalCTAFeature}>
              <CheckIcon />
              <span>Sem cadastro complexo</span>
            </div>
            <div className={styles.finalCTAFeature}>
              <CheckIcon />
              <span>Comece em segundos</span>
            </div>
            <div className={styles.finalCTAFeature}>
              <CheckIcon />
              <span>100% gratuito</span>
            </div>
          </div>
          <div className={styles.finalCTAButtons}>
            <Link href="/Dashboard" className={`${styles.finalCTAButton} ${styles.finalCTAButtonPrimary}`}>
              Começar agora
            </Link>
            <Link href="/Dashboard" className={`${styles.finalCTAButton} ${styles.finalCTAButtonSecondary}`}>
              Entrar
            </Link>
          </div>
        </div>
        <div className={styles.finalCTARight}>
          <div className={styles.finalCTAPricing}>
            <div className={styles.finalCTAPricingCard}>
              <div className={styles.finalCTAPricingHeader}>
                <div className={styles.finalCTAPricingName}>Chronos</div>
                <div className={styles.finalCTAPricingPrice}>Gratuito</div>
              </div>
              <ul className={styles.finalCTAPricingFeatures}>
                <li className={styles.finalCTAPricingFeature}>
                  <CheckIcon />
                  <span>Projetos ilimitados</span>
                </li>
                <li className={styles.finalCTAPricingFeature}>
                  <CheckIcon />
                  <span>Tarefas ilimitadas</span>
                </li>
                <li className={styles.finalCTAPricingFeature}>
                  <CheckIcon />
                  <span>Histórico completo</span>
                </li>
                <li className={styles.finalCTAPricingFeature}>
                  <CheckIcon />
                  <span>Relatórios em PDF</span>
                </li>
                <li className={styles.finalCTAPricingFeature}>
                  <CheckIcon />
                  <span>Sem limites de uso</span>
                </li>
                <li className={styles.finalCTAPricingFeature}>
                  <CheckIcon />
                  <span>Suporte contínuo</span>
                </li>
              </ul>
            </div>
            <p className={styles.finalCTAPricingNote}>
              Sempre gratuito. Sem taxas ocultas. Sem surpresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

