import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────
   型定義
───────────────────────────────────────── */
interface CaseStudyItem {
  tag: string;
  title: string;
  description: string;
  outcome: string;
  image: string;
  logoMode?: boolean;
}

/* ─────────────────────────────────────────
   カルーセル用カードコンポーネント
───────────────────────────────────────── */
const CaseSlideCard: React.FC<CaseStudyItem> = ({ tag, title, description, outcome, image, logoMode }) => (
  <div className="flex-shrink-0 w-[340px] md:w-[380px] bg-white border border-gray-200 overflow-hidden shadow-none hover:shadow-lg transform transition-transform transition-shadow duration-300 group hover:-translate-y-1">
    {/* Image */}
    <div className={`relative overflow-hidden aspect-[16/10] ${logoMode ? 'bg-white border border-gray-100' : 'bg-gray-100'}`}>
      <img
        src={image}
        alt={title}
        className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.03] ${
          logoMode ? 'object-contain p-8' : 'object-cover'
        }`}
        style={{ filter: 'saturate(0.8) brightness(0.98) contrast(1.02)' }}
      />
      {/* Tag overlay */}
      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-600 text-[11px] font-medium tracking-wider px-3 py-1 rounded-full border border-gray-200">
        {tag}
      </span>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-sm md:text-base font-medium text-gray-900 leading-snug mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed mb-5 line-clamp-2">
        {description}
      </p>

      {/* Outcome */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-1">OUTCOME</p>
        <p className="text-base font-light text-gray-900">
          {outcome.split(/(\d+%?)/).map((part, i) =>
            /\d+%?/.test(part)
              ? <span key={i} className="text-blue-500 font-semibold text-lg">{part}</span>
              : part
          )}
        </p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   クチコミカード
───────────────────────────────────────── */
const ReviewCard: React.FC<{
  name: string;
  role: string;
  text: string;
  image: string;
  delay: number;
}> = ({ name, role, text, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group overflow-hidden bg-white border border-gray-100 shadow-none hover:shadow-md transform transition-transform transition-shadow duration-300 hover:-translate-y-1"
  >
    <div className="absolute inset-0 z-0">
      <img src={image} alt={name} className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-15 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
    <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
      <div className="mb-4">
        <h4 className="text-lg font-medium tracking-wide text-gray-900">{name}</h4>
        <p className="text-xs text-red-800 uppercase tracking-widest mt-1">{role}</p>
      </div>
      <div className="flex-grow flex items-center justify-center mb-6">
        <p className="text-sm leading-7 text-gray-700 font-medium italic">
          「{text}」
        </p>
      </div>
      <Quote size={32} className="text-gray-200 fill-current mt-auto" />
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────
   実績セクション（横スクロールカルーセル）
───────────────────────────────────────── */
export const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudyItem[] = [
    {
      tag: "AI教育・人材育成",
      title: "【研修実績】就労継続支援（A型・B型）・社員向け 生成AI活用研修",
      description: "多様な就労形態に合わせた実務プログラムでAI活用を促進。現場が自発的にAIを使える状態を構築します。",
      outcome: "活用率85%達成",
      image: "/images/case-01-training.jpg",
    },
    {
      tag: "セミナー・教育",
      title: "【札幌開催！】サマーワークショップセミナー（GAS x AI、SNS x AI）",
      description: "GASと生成AIを連携させた業務自動化ツールの構築手法や、SNS運用の工数を大幅に削減する最新のAI活用術を実践形式で伝授します。",
      outcome: "満足度98%",
      image: "/images/image1.JPG",
    },
    {
      tag: "研修実績",
      title: "【研修実績】福祉事業所 広報担当者向け SNS × AI 実務研修",
      description: "Human inc.の広報担当者を対象に、SNSと生成AIを組み合わせた実務に直結するコンテンツ制作・運用手法を研修。現場ですぐに活かせるスキルを習得しました。",
      outcome: "即日実務活用",
      image: "/images/human_inc_logo.png",
      logoMode: true,
    },
  ];

  // カルーセルの無限ループ用に複製
  const doubled = [...caseStudies, ...caseStudies, ...caseStudies];

  return (
    <section id="case-studies" className="py-24 bg-transparent border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">Research &amp; Training Cases</p>
          <h2 className="text-3xl font-light text-gray-900 mb-2">実績</h2>
          <div className="w-12 h-px bg-gray-300 mt-4" />
        </motion.div>
      </div>

      {/* ── Carousel ── */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="carousel-track gap-5 px-6">
          {doubled.map((item, i) => (
            <CaseSlideCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   CLIENT VOICEセクション（クチコミ）
───────────────────────────────────────── */
export const ClientVoice: React.FC = () => {
  const reviews = [
    {
      name: "中村 様",
      role: "リユース事業・経営者",
      text: "今回のワークショップで学んだプロンプトは非常に参考になりました。Copilotを通じて社内の業務改善に応用し、実務にすぐ活かしていきたいと考えています。",
      image: "/images/hands_keyboard.png"
    },
    {
      name: "長尾 様",
      role: "フリーランス",
      text: "普段は動画学習が中心でしたが、対面での研修は疑問点をすぐに解決でき、現場に直結する内容が多く非常に有益でした。自社内でも実践しやすいと感じました。",
      image: "/images/business_back.png"
    },
    {
      name: "大野 様",
      role: "E社・経営者",
      text: "学んだことを翌日から業務に落とし込み、すぐに効果を実感できました。また、AI活用方法だけでなく、SNS戦略や目標設定など幅広い業務改善につながることを学べ、大変有意義でした。",
      image: "/images/business_silhouette.png"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">Client Feedback</p>
          <h2 className="text-3xl font-light text-gray-900 mb-6">CLIENT VOICE</h2>

          <div className="flex justify-center items-center space-x-1 mb-2 text-gray-900">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" className="text-black" />
            ))}
          </div>
          <p className="text-gray-600 font-light text-lg">
            受講者満足度 <span className="text-2xl font-semibold text-black">4.7</span> / 5.0
          </p>
          <p className="text-gray-400 text-xs mt-2">(2025年 受講者アンケート平均)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   後方互換 default export
───────────────────────────────────────── */
const Testimonials: React.FC = () => (
  <>
    <CaseStudies />
    <ClientVoice />
  </>
);

export default Testimonials;