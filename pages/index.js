import Head from "next/head";
import AboutMeSection from "../components/aboutme-section/AboutMeSection";

import Header from "../components/header/Header";
import HomeSection from "../components/home-section/HomeSection";
import QualificationSection from "../components/qualification-section/QualificationSection";
import ServicesSection from "../components/services-section/ServicesSection";
import SkillsSection from "../components/skills-section/SkillsSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abdelghafour Barane Portfolio</title>
        <meta
          name="description"
          content="My name is Barane Abdelghafour, 24 years old , Moroccan , Fullstack Developer and Big Data Developer. This is my portfolio where I publish my skills, education and projects "
        />
        <link rel="icon" href="/favicon.svg" />

        {/* ==================== UNICONS ==================== */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/thinline.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </Head>

      <Header />

      <main className="main">
        <HomeSection />
        <AboutMeSection />
        <SkillsSection />
        <QualificationSection />
        <ServicesSection />
      </main>

      <footer></footer>
    </>
  );
}
