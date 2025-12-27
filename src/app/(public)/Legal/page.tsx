import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import styles from "./page.module.css";

export default function Legal() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1 className={styles.title}>Legal</h1>
          <p className={styles.subtitle}>
            Informações legais e documentos importantes
          </p>

          <div className={styles.links}>
            <Link href="/TermosDeUso" className={styles.linkCard}>
              <h2 className={styles.linkTitle}>Termos de Uso</h2>
              <p className={styles.linkDescription}>
                Leia os termos e condições de uso do Chronos
              </p>
            </Link>

            <Link href="/Privacidade" className={styles.linkCard}>
              <h2 className={styles.linkTitle}>Política de Privacidade</h2>
              <p className={styles.linkDescription}>
                Entenda como protegemos seus dados e informações
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

