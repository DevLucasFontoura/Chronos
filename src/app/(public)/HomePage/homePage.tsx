import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HomePage/Hero/Hero";
import Problem from "@/components/HomePage/Problem/Problem";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import Principles from "@/components/HomePage/Principles/Principles";
import Preview from "@/components/HomePage/Preview/Preview";
import FinalCTA from "@/components/HomePage/FinalCTA/FinalCTA";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PublicMenu />
      <main className={styles.main}>
        {/* 1️⃣ Hero Section */}
        <Hero />

        {/* 2️⃣ Problema → Solução */}
        <Problem />

        {/* 3️⃣ Como Funciona */}
        <HowItWorks />

        {/* 4️⃣ Princípios do Chronos */}
        <Principles />

        {/* 5️⃣ Preview Visual */}
        <Preview />

        {/* 6️⃣ Chamada Final */}
        <FinalCTA />

        {/* 7️⃣ Footer */}
        <Footer />
      </main>
    </div>
  );
}
