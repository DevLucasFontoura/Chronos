import styles from "./Principles.module.css";

function CheckIcon() {
  return (
    <svg
      className={styles.iconSvg}
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

function XIcon() {
  return (
    <svg
      className={styles.iconSvg}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function Principles() {
  return (
    <section className={styles.principles}>
      <div className={styles.principlesContent}>
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>Princípios do Chronos</h2>
          <p className={styles.sectionSubtitle}>
            Nossa filosofia: disciplina através da simplicidade e intenção
          </p>
        </div>

        <div className={styles.principlesGrid}>
          <div className={styles.principleColumn}>
            <h3 className={styles.columnTitle}>O que não fazemos</h3>
            <ul className={styles.principlesList}>
              <li className={`${styles.principleItem} ${styles.principleItemNegative}`}>
                <div className={styles.principleIconContainer}>
                  <XIcon />
                </div>
                <div className={styles.principleContent}>
                  <span className={styles.principleText}>Sem múltiplos timers</span>
                  <p className={styles.principleDescription}>
                    Um timer por vez. Foco total em uma única tarefa.
                  </p>
                </div>
              </li>
              <li className={`${styles.principleItem} ${styles.principleItemNegative}`}>
                <div className={styles.principleIconContainer}>
                  <XIcon />
                </div>
                <div className={styles.principleContent}>
                  <span className={styles.principleText}>Sem iniciar tempo sem contexto</span>
                  <p className={styles.principleDescription}>
                    Você precisa escolher um projeto e uma tarefa antes de iniciar.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.principleColumn}>
            <h3 className={styles.columnTitle}>O que fazemos</h3>
            <ul className={styles.principlesList}>
              <li className={`${styles.principleItem} ${styles.principleItemPositive}`}>
                <div className={styles.principleIconContainer}>
                  <CheckIcon />
                </div>
                <div className={styles.principleContent}>
                  <span className={styles.principleText}>Histórico confiável</span>
                  <p className={styles.principleDescription}>
                    Cada minuto registrado com contexto completo e preciso.
                  </p>
                </div>
              </li>
              <li className={`${styles.principleItem} ${styles.principleItemPositive}`}>
                <div className={styles.principleIconContainer}>
                  <CheckIcon />
                </div>
                <div className={styles.principleContent}>
                  <span className={styles.principleText}>Simples e direto</span>
                  <p className={styles.principleDescription}>
                    Interface limpa, sem distrações. Foco no que importa.
                  </p>
                </div>
              </li>
              <li className={`${styles.principleItem} ${styles.principleItemPositive}`}>
                <div className={styles.principleIconContainer}>
                  <CheckIcon />
                </div>
                <div className={styles.principleContent}>
                  <span className={styles.principleText}>Feito para foco, não distração</span>
                  <p className={styles.principleDescription}>
                    Cada recurso foi pensado para aumentar sua produtividade.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

