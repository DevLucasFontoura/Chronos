'use client';

import Link from "next/link";
import Dither from "@/components/Dither/Dither";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollToPreview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const previewSection = document.getElementById('preview');
    if (previewSection) {
      previewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Dither
          waveSpeed={0.08}
          waveFrequency={2.8}
          waveAmplitude={0.33}
          waveColor={[0.9, 0.8, 1]}
          colorNum={40}
          pixelSize={2}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
        />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Domine o Tempo.
            <br />
            <span className={styles.heroTitleAccent}>Domine Sua Vida.</span>
          </h1>
          <h2 className={styles.heroSubtitle}>Chronos não mede tempo. Ele ensina disciplina.</h2>
          <p className={styles.heroDescription}>
            Controle seu tempo com intenção, foco e clareza. Cada minuto precisa ter um propósito.
            Sem contexto, sem timer. Apenas disciplina real.
          </p>
          <div className={styles.heroCTAs}>
            <Link href="/Dashboard" className={styles.heroCTAPrimary}>
              Começar agora
            </Link>
            <Link href="#preview" className={styles.heroCTASecondary} onClick={handleScrollToPreview}>
              Ver como funciona
            </Link>
          </div>
          <div className={styles.heroFeatures}>
            <div className={styles.heroFeature}>
              <span className={styles.heroFeatureIcon}>✓</span>
              <span>Foco total em uma tarefa</span>
            </div>
            <div className={styles.heroFeature}>
              <span className={styles.heroFeatureIcon}>✓</span>
              <span>Histórico preciso</span>
            </div>
            <div className={styles.heroFeature}>
              <span className={styles.heroFeatureIcon}>✓</span>
              <span>Relatórios profissionais</span>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>100%</div>
              <div className={styles.heroStatLabel}>Foco</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>0</div>
              <div className={styles.heroStatLabel}>Distrações</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>∞</div>
              <div className={styles.heroStatLabel}>Disciplina</div>
            </div>
          </div>
          <div className={styles.heroQuote}>
            <div className={styles.heroQuoteIcon}>"</div>
            <p className={styles.heroQuoteText}>
              O tempo é o recurso mais valioso que você tem.
              <br />
              Chronos te ensina a usá-lo com sabedoria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

