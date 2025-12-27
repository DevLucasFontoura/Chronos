import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Recursos() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1 className={styles.title}>Recursos</h1>
          <p className={styles.subtitle}>
            Tudo que você precisa para dominar seu tempo com disciplina
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⏱️</div>
              <h2 className={styles.featureTitle}>Timer Inteligente</h2>
              <p className={styles.featureDescription}>
                Um timer por vez, com foco total. Você só pode iniciar o tempo se escolher um projeto e uma tarefa. Sem contexto, sem timer.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>📁</div>
              <h2 className={styles.featureTitle}>Projetos e Tarefas</h2>
              <p className={styles.featureDescription}>
                Organize seu trabalho em projetos claros e tarefas específicas. Crie quantos precisar, sem limites.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>📊</div>
              <h2 className={styles.featureTitle}>Histórico Completo</h2>
              <p className={styles.featureDescription}>
                Veja exatamente onde seu tempo foi gasto. Cada minuto registrado com contexto completo e preciso.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>📄</div>
              <h2 className={styles.featureTitle}>Relatórios em PDF</h2>
              <p className={styles.featureDescription}>
                Gere relatórios profissionais em PDF para comprovar seu trabalho e análise de produtividade.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

