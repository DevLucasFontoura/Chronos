import Link from "next/link";
import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        {/* 1️⃣ Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Chronos</h1>
            <h2 className={styles.heroSubtitle}>Disciple Your Time.</h2>
            <p className={styles.heroDescription}>
              Controle seu tempo com intenção, foco e clareza.
              <br />
              Cada minuto precisa ter um propósito.
            </p>
            <Link href="/login" className={styles.heroCTA}>
              Começar agora
            </Link>
          </div>
        </section>

        {/* 2️⃣ Problema → Solução */}
        <section className={styles.problemSolution}>
          <div className={styles.problemSolutionContent}>
            <div className={styles.problemBlock}>
              <h3 className={styles.blockTitle}>O tempo passa. O controle não.</h3>
              <p className={styles.blockText}>
                Trabalhamos o dia inteiro, mas no fim não sabemos exatamente onde o tempo foi gasto.
              </p>
            </div>
            <div className={styles.solutionBlock}>
              <h3 className={styles.blockTitle}>Chronos cria disciplina.</h3>
              <p className={styles.blockText}>
                Você só inicia o tempo se escolher um projeto e uma tarefa.
                Sem contexto, sem timer.
              </p>
            </div>
          </div>
        </section>

        {/* 3️⃣ Como Funciona */}
        <section className={styles.howItWorks}>
          <div className={styles.howItWorksContent}>
            <h2 className={styles.sectionTitle}>Como funciona</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>🗂️</div>
                <h3 className={styles.stepTitle}>Crie projetos e tarefas</h3>
                <p className={styles.stepDescription}>
                  Organize seu trabalho antes de começar.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}>⏱️</div>
                <h3 className={styles.stepTitle}>Inicie o timer com intenção</h3>
                <p className={styles.stepDescription}>
                  Um timer. Um foco. Um propósito.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}>📊</div>
                <h3 className={styles.stepTitle}>Analise e gere relatórios</h3>
                <p className={styles.stepDescription}>
                  Histórico claro e PDF profissional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ Princípios do Chronos */}
        <section className={styles.principles}>
          <div className={styles.principlesContent}>
            <h2 className={styles.sectionTitle}>Princípios do Chronos</h2>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <span className={styles.principleIcon}>❌</span>
                <span className={styles.principleText}>Sem múltiplos timers</span>
              </li>
              <li className={styles.principleItem}>
                <span className={styles.principleIcon}>❌</span>
                <span className={styles.principleText}>Sem iniciar tempo sem contexto</span>
              </li>
              <li className={styles.principleItem}>
                <span className={styles.principleIcon}>✔️</span>
                <span className={styles.principleText}>Histórico confiável</span>
              </li>
              <li className={styles.principleItem}>
                <span className={styles.principleIcon}>✔️</span>
                <span className={styles.principleText}>Simples e direto</span>
              </li>
              <li className={styles.principleItem}>
                <span className={styles.principleIcon}>✔️</span>
                <span className={styles.principleText}>Feito para foco, não distração</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 5️⃣ Preview Visual */}
        <section className={styles.preview}>
          <div className={styles.previewContent}>
            <h2 className={styles.sectionTitle}>Preview</h2>
            <div className={styles.previewBox}>
              <div className={styles.previewPlaceholder}>
                Mock do timer, projetos e histórico
              </div>
            </div>
          </div>
        </section>

        {/* 6️⃣ Chamada Final */}
        <section className={styles.finalCTA}>
          <div className={styles.finalCTAContent}>
            <h2 className={styles.finalCTATitle}>Seu tempo merece disciplina.</h2>
            <div className={styles.finalCTAButtons}>
              <Link href="/login" className={`${styles.finalCTAButton} ${styles.finalCTAButtonPrimary}`}>
                Começar agora
              </Link>
              <Link href="/login" className={`${styles.finalCTAButton} ${styles.finalCTAButtonSecondary}`}>
                Entrar
              </Link>
            </div>
          </div>
        </section>

        {/* 7️⃣ Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerName}>Chronos</div>
            <div className={styles.footerSlogan}>Disciple Your Time</div>
            <div className={styles.footerCopyright}>© Chronos</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
