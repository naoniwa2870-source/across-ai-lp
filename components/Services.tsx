import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: "ai-business-reform",
      title: "AI業務改革プロジェクト",
      subtitle: "AI WORKFLOW & PROCESS REFORM",
      description:
        // ▼ テキスト差し替えポイント：AI業務改革プロジェクト概要（カード用リード）
        "現場の業務を可視化し、「どこからAI化するか」を整理するDXプロジェクトです。",
      features: [
        "業務可視化",
        "課題整理",
        "AI導入ロードマップ策定",
        "業務フロー再設計"
      ],
      image: "/images/japanese_pc_talking.png",
      link: "/services/ai-business-reform"
    },
    {
      id: "ai-utilization-design",
      title: "AI活用設計",
      subtitle: "AI IMPLEMENTATION & ENABLEMENT",
      description:
        // ▼ テキスト差し替えポイント：AI活用設計概要（カード用リード）
        "ChatGPTやGeminiなどのAIツールを現場で使える形に設計・導入します。",
      features: [
        "AIツール選定",
        "社内AI活用ルール整備",
        "業務別プロンプト設計",
        "AI活用環境構築"
      ],
      image: "/images/japanese_training.png",
      link: "/services/ai-utilization-design"
    },
    {
      id: "ai-training",
      title: "AI教育・研修",
      subtitle: "AI TRAINING & WORKSHOPS",
      description:
        // ▼ テキスト差し替えポイント：AI教育・研修概要（カード用リード）
        "経営層から現場まで、実務で使えるAI活用スキルを育成します。",
      features: [
        "AI基礎研修",
        "業務活用ワークショップ",
        "管理職向けAI研修",
        "プロンプト実践演習"
      ],
      image: "/images/hands_keyboard.png",
      link: "/services/ai-training"
    },
    {
      id: "advisor-dx",
      title: "AI顧問 / DX伴走",
      subtitle: "AI ADVISORY & ONGOING SUPPORT",
      description:
        // ▼ テキスト差し替えポイント：AI顧問 / DX伴走概要（カード用リード）
        "月次伴走を通じて、AI活用と業務改善を継続的に支援します。",
      features: [
        "定例ミーティング",
        "AI活用相談",
        "業務改善支援",
        "新ツール情報共有"
      ],
      image: "/images/business_back.png",
      link: "/services/advisor-dx"
    }
  ];

  const capabilityAreas = [
    {
      id: "ai-ec",
      title: "AI活用EC設計・売上改善",
      items: [
        "AI活用EC設計",
        "業務フロー設計",
        "データ活用基盤構築",
        "売上改善支援",
      ],
    },
    {
      id: "business-foundation",
      title: "事業設計・デジタル基盤構築",
      items: [
        "事業構造設計",
        "LP / Webサイト構築",
        "ブランド設計",
        "事業立ち上げ支援",
      ],
    },
  ];

  return (
    <section id="services" className="bg-transparent">
      <div className="pt-24 pb-12 bg-transparent">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-2 md:mb-3"
          >
            {/* ▼ テキスト差し替えポイント：サービスセクションタイトル */}
            <h2 className="text-3xl md:text-5xl font-light mb-2 md:mb-3 text-gray-900 tracking-tight">
              支援メニュー
            </h2>
            <div className="w-16 h-px bg-black mx-auto mb-3 md:mb-4"></div>
            {/* ▼ テキスト差し替えポイント：サービスリード文 */}
            <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              AI業務改革プロジェクト、AI導入支援、AI教育・研修、AI顧問 / DX伴走の4つの軸で、<br className="hidden md:inline" />
              中小企業の「現場から始めるDX」を一気通貫でサポートします。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pt-1 md:pt-2 pb-16 md:pb-20 bg-transparent">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                className="bg-white rounded-xl border border-gray-100 shadow-none hover:shadow-lg transition-transform transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="px-6 py-7 md:px-7 md:py-8 flex-1 flex flex-col">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-gray-400 mb-3">
                    {`SERVICE 0${index + 1}`}
                  </span>
                  <span className="block text-[11px] font-semibold tracking-[0.2em] text-gray-300 mb-2">
                    {service.subtitle}
                  </span>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  )}
                  <p className="text-[10px] md:text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-3">
                    SERVICE OVERVIEW
                  </p>
                  <ul className="space-y-1.5 mt-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs md:text-sm text-gray-700">
                        <CheckCircle2
                          size={14}
                          className="mt-1 mr-2 text-gray-300 flex-shrink-0"
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {service.link && (
                  <div className="px-6 pb-5 pt-2">
                    <Link
                      to={service.link}
                      className="group inline-flex items-center text-[11px] md:text-xs font-semibold tracking-[0.18em] text-gray-700 border-b border-gray-300 pb-1 hover:text-black hover:border-black transition-colors duration-200"
                    >
                      VIEW DETAIL PAGE
                      <ArrowRight
                        size={14}
                        className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* AI活用を軸に〜 のセクションだけ、ごく薄いグレー背景で画像帯から切り替える */}
      <div className="pt-10 md:pt-14 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 leading-relaxed">
              <span className="block">AIを活用し、</span>
              <span className="block">事業と業務の仕組みを設計する</span>
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              AI導入だけではなく、
              <br className="hidden md:inline" />
              業務設計・デジタル基盤・AIエージェント実装まで
              <br className="hidden md:inline" />
              実務レベルで伴走支援します。
            </p>
          </motion.div>

          <div className="mt-5 md:mt-7 pt-2 md:pt-3 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {capabilityAreas.map((area, index) => (
                <motion.article
                  key={area.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                  className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-transform transition-shadow duration-300 h-full flex flex-col pl-8 pr-4 py-4 md:pl-9 md:pr-5 md:py-5 text-left transform hover:-translate-y-1"
                >
                  <h4 className="text-base md:text-lg font-medium text-gray-900 mb-2.5 leading-snug">
                    {area.title}
                  </h4>
                  <ul className="space-y-1.5 text-xs md:text-sm text-gray-700">
                    {area.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        ・{item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;