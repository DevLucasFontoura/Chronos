import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function RelatoriosPDF() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1 className={styles.title}>Relatórios PDF</h1>
          <p className={styles.subtitle}>
            Gere relatórios profissionais para comprovar seu trabalho
          </p>

          <div className={styles.explanation}>
            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Relatórios detalhados</h2>
              <p className={styles.explanationText}>
                O Chronos gera relatórios em PDF com todas as informações do seu trabalho.
                Veja quanto tempo foi gasto em cada projeto, cada tarefa, e em quais datas.
                Tudo organizado de forma clara e profissional.
              </p>
            </div>

            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Exportação simples</h2>
              <p className={styles.explanationText}>
                Com um clique, você pode exportar todo o seu histórico em um PDF profissional.
                Perfeito para apresentar aos clientes, comprovar horas trabalhadas ou fazer análises de produtividade.
              </p>
            </div>

            <div className={styles.explanationCard}>
              <h2 className={styles.explanationTitle}>Formato profissional</h2>
              <p className={styles.explanationText}>
                Os relatórios são gerados em formato PDF, prontos para impressão ou envio.
                Incluem todas as informações necessárias: projetos, tarefas, tempos, datas e totais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

