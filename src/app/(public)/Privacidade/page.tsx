import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Privacidade() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1 className={styles.title}>Política de Privacidade</h1>
          <p className={styles.subtitle}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className={styles.textContent}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Informações que Coletamos</h2>
              <p className={styles.sectionText}>
                Coletamos informações que você nos fornece diretamente, como quando cria uma conta,
                usa nossos serviços ou entra em contato conosco. Isso pode incluir nome, endereço de e-mail
                e informações sobre seus projetos e tarefas.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Como Usamos suas Informações</h2>
              <p className={styles.sectionText}>
                Usamos as informações coletadas para fornecer, manter e melhorar nossos serviços.
                Isso inclui processar suas solicitações, personalizar sua experiência e comunicar-nos com você
                sobre atualizações e melhorias.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Compartilhamento de Informações</h2>
              <p className={styles.sectionText}>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
                exceto conforme descrito nesta política ou com seu consentimento explícito.
                Podemos compartilhar informações agregadas e anonimizadas para fins de análise.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Segurança dos Dados</h2>
              <p className={styles.sectionText}>
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                No entanto, nenhum método de transmissão pela Internet é 100% seguro.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Seus Direitos</h2>
              <p className={styles.sectionText}>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento.
                Você também pode optar por não receber comunicações de marketing de nossa parte.
                Entre em contato conosco para exercer esses direitos.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Cookies e Tecnologias Similares</h2>
              <p className={styles.sectionText}>
                Usamos cookies e tecnologias similares para melhorar sua experiência, analisar como você usa
                nossos serviços e personalizar conteúdo. Você pode controlar o uso de cookies através das
                configurações do seu navegador.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Alterações nesta Política</h2>
              <p className={styles.sectionText}>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre
                quaisquer alterações significativas publicando a nova política nesta página e atualizando
                a data de "última atualização".
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Contato</h2>
              <p className={styles.sectionText}>
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como
                tratamos suas informações, entre em contato conosco através dos canais de suporte disponíveis.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

