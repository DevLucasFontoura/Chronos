import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function TimeTracker() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1 className={styles.title}>Time Tracker</h1>
          <p className={styles.subtitle}>
            Controle seu tempo com intenção, foco e clareza
          </p>

          <div className={styles.explanation}>
            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Como funciona?</h2>
              <p className={styles.explanationText}>
                O Time Tracker do Chronos é diferente. Você não pode simplesmente iniciar um timer sem contexto.
                Primeiro, você precisa escolher um projeto. Depois, uma tarefa específica dentro desse projeto.
                Só então o timer pode ser iniciado.
              </p>
            </div>

            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Um timer por vez!</h2>
              <p className={styles.explanationText}>
                Não há múltiplos timers rodando simultaneamente. Um timer. Um foco. Um propósito.
                Isso garante que você mantenha total atenção na tarefa atual, sem distrações.
              </p>
            </div>

            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Disciplina real!</h2>
              <p className={styles.explanationText}>
                Ao exigir projeto e tarefa antes de iniciar, o Chronos cria disciplina real.
                Você é forçado a pensar no que vai fazer antes de começar a medir o tempo.
                Isso transforma a forma como você trabalha.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

