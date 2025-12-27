import styles from "./HowItWorks.module.css";

function FolderIcon() {
  return (
    <svg
      className={styles.stepIconSvg}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z" />
      <path d="M3 7h18" />
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg
      className={styles.stepIconSvg}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      className={styles.stepIconSvg}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 3v18h18" />
      <path d="M18 7l-5 5-4-4-3 3" />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.howItWorksContent}>
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>Como funciona</h2>
          <p className={styles.sectionSubtitle}>
            Três passos simples para dominar seu tempo com disciplina
          </p>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepIconContainer}>
              <FolderIcon />
              <div className={styles.stepIconGlow}></div>
            </div>
            <h3 className={styles.stepTitle}>Crie projetos e tarefas</h3>
            <p className={styles.stepDescription}>
              Organize seu trabalho antes de começar. Defina projetos claros e tarefas específicas.
              Sem organização, não há disciplina possível.
            </p>
            <div className={styles.stepFeatures}>
              <span className={styles.stepFeature}>Projetos ilimitados</span>
              <span className={styles.stepFeature}>Tarefas organizadas</span>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepIconContainer}>
              <TimerIcon />
              <div className={styles.stepIconGlow}></div>
            </div>
            <h3 className={styles.stepTitle}>Inicie o timer com intenção</h3>
            <p className={styles.stepDescription}>
              Um timer. Um foco. Um propósito. Você só pode iniciar o tempo se escolher um projeto e uma tarefa.
              Sem contexto, sem timer.
            </p>
            <div className={styles.stepFeatures}>
              <span className={styles.stepFeature}>Um timer por vez</span>
              <span className={styles.stepFeature}>Foco garantido</span>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepIconContainer}>
              <ChartIcon />
              <div className={styles.stepIconGlow}></div>
            </div>
            <h3 className={styles.stepTitle}>Analise e gere relatórios</h3>
            <p className={styles.stepDescription}>
              Histórico claro e PDF profissional. Veja exatamente onde seu tempo foi gasto.
              Comprove seu trabalho com relatórios detalhados.
            </p>
            <div className={styles.stepFeatures}>
              <span className={styles.stepFeature}>Histórico completo</span>
              <span className={styles.stepFeature}>PDF profissional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

