import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { CaseStudies, ClientVoice } from './Testimonials';
import { PainPoints, Capabilities, Reasons, CTASection, FlowSection, AIInitiatives } from './ConsultingSections';
import LPContactSection from './LPContactSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Capabilities />
      {/* 背景画像付きのセクション：支援メニュー＋実績 */}
      <section className="relative overflow-hidden">
        {/* 背景画像レイヤー（固定） */}
        <div
          className="pointer-events-none absolute inset-0 bg-fixed bg-cover bg-center opacity-100"
          style={{ backgroundImage: 'url("/images/image%20back4.png")' }}
        />
        {/* コンテンツレイヤー */}
        <div className="relative z-10">
          <Services />
          {/* サービス紹介直下のCTA */}
          <CTASection />
          <CaseStudies />
        </div>
      </section>
      <AIInitiatives />
      <Reasons />
      <FlowSection />
      <ClientVoice />
      {/* ページ下部のCTA */}
      <CTASection />
      <LPContactSection />
    </>
  );
};

export default Home;