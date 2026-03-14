import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-800">
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="/images/about-bg-birch.jpg"
          alt="White Birch Landscape"
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-[0.3em] uppercase mb-4 drop-shadow-md">
              ABOUT ACROSS AI
            </h1>
            <p className="text-white text-sm md:text-base font-light tracking-[0.08em]">
              AIで業務を変える、現場から始めるDX
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl -mt-20 relative z-10 space-y-16">
        {/* 1. HERO LEAD */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-lg border-t-4 border-slate-900 text-left"
        >
          <p className="text-slate-700 leading-relaxed mb-4">
            Across AIは、AIツールの導入だけを目的とした会社ではありません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            業務の流れを整理し、現場に合ったAIの仕組みを設計することで、
            企業の業務改善とDXを実現する伴走型のパートナーです。
          </p>
        </motion.section>

        {/* 2. ACROSS AIが提供するDX支援 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">
            Across AIが提供するDX支援
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            AIはツールを導入するだけでは、業務改善にはつながりません。
            Across AIでは「業務整理 → AI設計 → 現場定着」までを一体で支援します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">① 業務整理から始めるDX</h3>
              <p className="leading-relaxed">
                業務フローを整理し、「どこをAI化するか」から設計します。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">② 現場に合ったAI導入</h3>
              <p className="leading-relaxed">
                ツールありきではなく、業務に合う方法でスモールスタートします。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">③ 現場定着まで伴走</h3>
              <p className="leading-relaxed">
                AI導入後も、業務改善として定着するまで伴走します。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. ACROSS AI METHOD */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
            Across AIのDXアプローチ
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Across AIでは、AIツールの導入ではなく「業務の仕組み」を変えるDXを支援します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-5 border border-slate-100">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-2 uppercase">
                STEP1
              </p>
              <h3 className="font-semibold text-slate-900 mb-2">業務の可視化</h3>
              <p className="leading-relaxed">
                現在の業務フローを整理し、課題を明確化します。
              </p>
            </div>
            <div className="bg-slate-50 p-5 border border-slate-100">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-2 uppercase">
                STEP2
              </p>
              <h3 className="font-semibold text-slate-900 mb-2">AI活用設計</h3>
              <p className="leading-relaxed">
                AIツールや自動化を活用し、業務改善の仕組みを設計します。
              </p>
            </div>
            <div className="bg-slate-50 p-5 border border-slate-100">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-2 uppercase">
                STEP3
              </p>
              <h3 className="font-semibold text-slate-900 mb-2">スモールスタート</h3>
              <p className="leading-relaxed">
                小さく導入し、現場で使える形に調整します。
              </p>
            </div>
            <div className="bg-slate-50 p-5 border border-slate-100">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-2 uppercase">
                STEP4
              </p>
              <h3 className="font-semibold text-slate-900 mb-2">現場定着</h3>
              <p className="leading-relaxed">
                運用改善を行い、AI活用が定着するまで伴走します。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 4. ACROSS AIの特徴 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">
            Across AIの特徴
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">① 業務改善から始めるAI</h3>
              <p className="leading-relaxed">
                AI導入ではなく、業務そのものの改善からDXを設計します。
              </p>
            </div>
            <div className="border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">② 現場伴走型支援</h3>
              <p className="leading-relaxed">
                AIツール導入だけで終わらず、現場で使える状態まで伴走します。
              </p>
            </div>
            <div className="border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">③ 中小企業・現場DXに強い</h3>
              <p className="leading-relaxed">
                中小企業や医療・介護など、現場業務のDX支援を得意としています。
              </p>
            </div>
            <div className="border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">④ AI × 業務設計</h3>
              <p className="leading-relaxed">
                AIツールの活用と業務改善を一体で設計します。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 5. MISSION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-md text-center"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">
            Mission
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-6 leading-relaxed">
            <span className="block">AIと人の力をつなぎ、</span>
            <span className="block">企業と社会の持続的な成長に寄り添う</span>
          </h3>
          <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Across AIは、AIを単なるテクノロジーではなく
            <br className="hidden md:inline" />
            業務改善を実現する仕組みとして活用します。
            <br className="hidden md:inline" />
            現場に寄り添いながら、企業の持続的な成長を支えるDXを実現します。
          </p>
        </motion.section>

        {/* 6. FOUNDER / 代表プロフィール */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-8">
            Founder / 業務改革コンサルタント
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="/images/member_nao_photo.png"
                    alt="丹羽 ナオ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <img
                    src="/images/ai%20passport.png"
                    alt="AIパスポート"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-slate-900 mb-1">丹羽 ナオ</p>
            </div>

            <div className="w-full md:w-2/3 text-sm text-slate-700 space-y-4 leading-relaxed">
              <p>
                外資系企業（LVMHグループ・ヴーヴクリコ）にて
                貿易・物流・マーケティング業務を経験。
              </p>
              <p>
                その後、国際プリスクールを創業し、
                13年以上にわたり経営と業務改善を実践。
              </p>
              <p>
                現在はAcross AIを立ち上げ、
                企業のAI活用・業務改善・DX推進を支援している。
              </p>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">主な専門領域：</h3>
                <ul className="space-y-2">
                  {[
                    '業務プロセスの可視化・最適化',
                    '生成AI / AIツール導入設計',
                    '社内AIリテラシー研修',
                    '業務自動化',
                    'DX推進・AI活用戦略',
                  ].map((item) => (
                    <li key={item} className="flex items-start text-xs md:text-sm text-slate-700">
                      <CheckCircle size={14} className="mt-1 mr-2 text-slate-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 7. ACROSS AIが目指す未来 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">
            Across AIが目指す未来
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            AIは特別な技術ではなく、誰もが使える業務の仕組みになっていきます。<br />
            Across AIは、現場に根付いたAI活用を通じて、企業が「もう一歩前に進む力」を得られる社会を目指します。
          </p>

          <div className="bg-slate-50 p-6 border border-slate-100">
            <ul className="space-y-3 text-sm text-slate-700">
              <li>・現場から始まるDX</li>
              <li>・継続的な業務改善</li>
              <li>・AIを使える組織づくり</li>
            </ul>
          </div>
        </motion.section>

        {/* 8. CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-md text-center"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            AI導入やDX推進は、企業ごとに最適な進め方があります。
            現状の課題整理から、
            <br className="hidden md:inline" />
            Across AIがお手伝いします。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-black text-white px-10 py-3 text-xs md:text-sm tracking-[0.3em] hover:bg-slate-900 transition-all duration-300"
          >
            無料相談する
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default About;