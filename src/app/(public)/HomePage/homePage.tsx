import PublicMenu from "@/components/Menus/PublicMenu/PublicMenu";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HomePage/Hero/Hero";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
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

        {/* 2️⃣ Como Funciona */}
        <HowItWorks />

        {/* 3️⃣ Preview Visual */}
        <Preview />

        {/* 4️⃣ Chamada Final */}
        <FinalCTA />

        {/* 5️⃣ Footer */}
        <Footer />
      </main>
    </div>
  );
}
