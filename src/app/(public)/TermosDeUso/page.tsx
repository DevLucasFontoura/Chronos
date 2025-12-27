import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function TermosDeUso() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1 className={styles.title}>Termos de Uso</h1>
          <p className={styles.subtitle}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className={styles.textContent}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Aceitação dos Termos</h2>
              <p className={styles.sectionText}>
                Ao acessar e usar o Chronos, você concorda em cumprir e estar vinculado a estes Termos de Uso.
                Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Uso do Serviço</h2>
              <p className={styles.sectionText}>
                O Chronos é fornecido para uso pessoal e profissional. Você concorda em usar o serviço apenas
                para fins legais e de acordo com estes termos. Você não deve usar o serviço de forma que possa
                danificar, desabilitar ou sobrecarregar nossos servidores.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Conta do Usuário</h2>
              <p className={styles.sectionText}>
                Você é responsável por manter a confidencialidade de suas credenciais de conta.
                Você é responsável por todas as atividades que ocorrem sob sua conta.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Propriedade Intelectual</h2>
              <p className={styles.sectionText}>
                Todo o conteúdo do Chronos, incluindo mas não limitado a textos, gráficos, logos, ícones,
                imagens e software, é propriedade do Chronos ou de seus fornecedores de conteúdo e está
                protegido por leis de direitos autorais.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Limitação de Responsabilidade</h2>
              <p className={styles.sectionText}>
                O Chronos é fornecido "como está" sem garantias de qualquer tipo. Não garantimos que o serviço
                será ininterrupto, seguro ou livre de erros. Você usa o serviço por sua conta e risco.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Modificações dos Termos</h2>
              <p className={styles.sectionText}>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão
                em vigor imediatamente após a publicação. É sua responsabilidade revisar periodicamente estes termos.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Contato</h2>
              <p className={styles.sectionText}>
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através dos
                canais de suporte disponíveis na plataforma.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

