import styles from "./Problem.module.css";

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
      <path d="M12 2v4M12 18v4" />
      <path d="M8 6h8M8 18h8" />
      <path d="M6 6l6 6 6-6M6 18l6-6 6 6" />
      <path d="M4 6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6z" />
      <path d="M4 16c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2z" />
      <path d="M12 8v4" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export default function Problem() {
  return (
    <section className={styles.problemSolution}>
      <div className={styles.problemSolutionContent}>
        <div className={styles.problemBlock}>
          <div className={styles.blockHeader}>
            <div className={styles.blockIcon}>⚠️</div>
            <h3 className={styles.blockTitle}>O tempo passa. O controle não.</h3>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.blockText}>
              Trabalhamos o dia inteiro, mas no fim não sabemos exatamente onde o tempo foi gasto.
            </p>
            <ul className={styles.problemList}>
              <li className={styles.problemItem}>
                <span className={styles.problemItemIcon}>✗</span>
                <span>Sem rastreamento real</span>
              </li>
              <li className={styles.problemItem}>
                <span className={styles.problemItemIcon}>✗</span>
                <span>Ferramentas complexas</span>
              </li>
              <li className={styles.problemItem}>
                <span className={styles.problemItemIcon}>✗</span>
                <span>Sem disciplina no uso</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <ChronosIcon />
            <div className={styles.logoGlow}></div>
          </div>
          <div className={styles.arrowIcon}>→</div>
        </div>

        <div className={styles.solutionBlock}>
          <div className={styles.blockHeader}>
            <div className={styles.blockIcon}>✨</div>
            <h3 className={styles.blockTitle}>Chronos cria disciplina.</h3>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.blockText}>
              Você só inicia o tempo se escolher um projeto e uma tarefa.
              Sem contexto, sem timer.
            </p>
            <ul className={styles.solutionList}>
              <li className={styles.solutionItem}>
                <span className={styles.solutionItemIcon}>✓</span>
                <span>Intenção antes de iniciar</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.solutionItemIcon}>✓</span>
                <span>Histórico confiável</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.solutionItemIcon}>✓</span>
                <span>Disciplina real</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

