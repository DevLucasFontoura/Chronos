import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Historico() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1 className={styles.title}>Histórico</h1>
          <p className={styles.subtitle}>
            Veja exatamente onde seu tempo foi gasto
          </p>

          <div className={styles.explanation}>
            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Registro completo</h2>
              <p className={styles.explanationText}>
                Cada vez que você finaliza um timer, o Chronos registra automaticamente no histórico.
                Você pode ver todos os seus registros organizados por data, projeto e tarefa.
                Nada se perde.
              </p>
            </div>

            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Contexto preservado</h2>
              <p className={styles.explanationText}>
                Cada entrada no histórico inclui o projeto, a tarefa, a duração e a data/hora exata.
                Você sempre sabe o que estava fazendo e quando. Isso torna o histórico confiável e útil.
              </p>
            </div>

            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Análise de produtividade</h2>
              <p className={styles.explanationText}>
                Use o histórico para entender seus padrões de trabalho.
                Veja em quais projetos você gasta mais tempo, quais tarefas levam mais tempo,
                e identifique oportunidades de melhoria.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

