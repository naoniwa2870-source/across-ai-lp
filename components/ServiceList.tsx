import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  index: number;
  link: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, subtitle, description, features, image, index, link }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="py-14 md:py-24 border-b border-gray-100 last:border-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 border border-gray-100 m-4 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase">{subtitle}</span>
            <h3 className="text-2xl md:text-3xl font-light mb-8 text-gray-900 leading-snug">
              {title}
            </h3>

            <div className="mb-8">
              <h4 className="text-sm font-bold border-b border-gray-900 inline-block pb-1 mb-4 tracking-widest">SERVICE OVERVIEW</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                {description}
              </p>
            </div>

            <div className="bg-gray-50 p-6 md:p-8">
              <h4 className="text-sm font-bold mb-4 tracking-widest flex items-center">
                <span className="w-2 h-2 bg-black mr-3"></span>
                特徴
              </h4>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 size={16} className="mt-1 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <Link
                to={link}
                className="group inline-flex items-center text-sm font-medium tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-all"
              >
                VIEW DETAIL PAGE
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const ServiceList: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "ai-business-reform",
      title: "AI業務改革プロジェクト",
      subtitle: "AI WORKFLOW & PROCESS REFORM",
      description:
        "現場の業務を可視化し、「どこからAI化するか」を整理するDXプロジェクトです。業務フローの棚卸しから課題整理、AI導入ロードマップ策定、業務フロー再設計まで、一連のプロセスを伴走しながら支援します。",
      features: [
        "現場ヒアリングと業務棚卸しによるプロセスの可視化",
        "ボトルネック・ムダの特定と課題整理",
        "AI導入ロードマップ・優先度の設計",
        "AI活用を前提とした業務フロー再設計"
      ],
      image: "/images/japanese_pc_talking.png",
      link: "/services/ai-business-reform"
    },
    {
      id: "ai-utilization-design",
      title: "AI活用設計",
      subtitle: "AI IMPLEMENTATION & ENABLEMENT",
      description:
        "ChatGPTやGeminiなどのAIツールを、現場で実際に使われる形に設計・導入するサービスです。ツール選定から社内ルール整備、業務別プロンプト設計、活用環境構築までを一括で支援します。",
      features: [
        "用途・業務に合わせたAIツール選定",
        "情報セキュリティを踏まえた社内AI活用ルール整備",
        "部署・業務ごとのプロンプト設計テンプレート作成",
        "ナレッジ共有・FAQ整備を含むAI活用環境構築"
      ],
      image: "/images/japanese_training.png",
      link: "/services/ai-utilization-design"
    },
    {
      id: "ai-training",
      title: "AI教育・研修",
      subtitle: "AI TRAINING & WORKSHOPS",
      description:
        "経営層から現場メンバーまで、実務で使えるAI活用スキルを育成する研修プログラムです。AIの基礎理解から、業務シーン別の活用ワークショップ、管理職向けのマネジメント研修、プロンプト実践演習までを提供します。",
      features: [
        "AIリテラシーを身につけるAI基礎研修",
        "自社の業務シーンを題材にした活用ワークショップ",
        "意思決定層向けの管理職・マネジメント研修",
        "現場で使えるプロンプトを作り込む実践演習"
      ],
      image: "/images/hands_keyboard.png",
      link: "/services/ai-training"
    },
    {
      id: "advisor-dx",
      title: "AI顧問 / DX伴走",
      subtitle: "AI ADVISORY & ONGOING SUPPORT",
      description:
        "月次の伴走を通じて、AI活用と業務改善を継続的に支援するサービスです。定例ミーティングでの相談対応に加え、業務改善のアイデア出し、新ツール情報の共有などを行い、社内のDX推進を外部パートナーとして支えます。",
      features: [
        "月次・隔週などの定例ミーティングによる継続支援",
        "AI活用・業務改善に関する相談窓口としての伴走",
        "業務課題に応じた改善提案・簡易設計",
        "新しいAIツールや機能のキャッチアップ情報共有"
      ],
      image: "/images/business_back.png",
      link: "/services/advisor-dx"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6 text-slate-900">
            Services
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Across AIは、AI業務改革プロジェクト、AI活用設計、AI教育・研修、AI顧問 / DX伴走の4つのサービスで、<br className="hidden md:inline" />
            企業のAI活用とDX推進を一気通貫でサポートします。
          </p>
        </motion.div>

        <div>
          {services.map((service, index) => (
            <ServiceSection
              key={service.id}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;