import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  benefits: string[];
  flow: { step: string; title: string; desc: string }[];
  price?: string;
}> = {
  "ai-business-reform": {
    title: "AI業務改革プロジェクト",
    subtitle: "AI WORKFLOW & PROCESS REFORM",
    heroImage: "/images/business_silhouette.png",
    description:
      "現場の業務を可視化し、「どこからAI化するか」を整理するDXプロジェクトです。業務フローの棚卸しやヒアリングを通じて課題を洗い出し、AI導入の優先順位とロードマップを設計。AI活用を前提とした新しい業務フローに落とし込むことで、現場に根ざした業務改革を実現します。",
    benefits: [
      "現場のリアルな業務フローを可視化し、課題を明確化できる",
      "AI導入の優先順位とロードマップが整理され、次の一手が明確になる",
      "業務フローの再設計により、ムダや属人化の解消につながる"
    ],
    flow: [
      { step: "01", title: "現状ヒアリング・業務棚卸し", desc: "担当者へのヒアリングと業務フローの棚卸しを行い、現状を可視化します。" },
      { step: "02", title: "課題整理・AI化候補の選定", desc: "ムダ・ボトルネックを整理し、AI化・自動化の優先度を決めます。" },
      { step: "03", title: "AI導入ロードマップ策定", desc: "短期〜中長期の導入ステップと進め方をロードマップとしてまとめます。" },
      { step: "04", title: "業務フロー再設計", desc: "AI活用を前提とした新しい業務フロー案を作成し、導入フェーズへつなげます。" }
    ]
  },
  "ai-utilization-design": {
    title: "AI活用設計",
    subtitle: "AI IMPLEMENTATION & ENABLEMENT",
    heroImage: "/images/8.png",
    description:
      "ChatGPTやGeminiなどのAIツールを、現場で実際に使われる形に設計・導入するサービスです。ツール選定から社内ルール整備、業務別プロンプト設計、ナレッジ共有の仕組みまでを一体で整えることで、「入れただけで使われない」状態を防ぎます。",
    benefits: [
      "自社の用途に合ったAIツール・プランを選定できる",
      "情報セキュリティに配慮した社内ルールを整備できる",
      "業務シーンに沿ったプロンプトテンプレートで、現場がすぐに使い始められる"
    ],
    flow: [
      { step: "01", title: "目的整理・要件ヒアリング", desc: "AI導入の目的や対象業務、セキュリティ要件を整理します。" },
      { step: "02", title: "ツール選定・方針策定", desc: "ChatGPTやGeminiなどから、用途に合ったツールと運用方針を決定します。" },
      { step: "03", title: "プロンプト・利用ルール設計", desc: "業務別のプロンプトテンプレートと社内利用ルールを設計します。" },
      { step: "04", title: "導入設定・ナレッジ共有", desc: "環境設定や共有ノートの整備を行い、現場が使い始められる状態にします。" }
    ]
  },
  "ai-training": {
    title: "AI教育・研修",
    subtitle: "AI TRAINING & WORKSHOPS",
    heroImage: "/images/case-01-training.jpg",
    description:
      "経営層から現場メンバーまで、実務で使えるAI活用スキルを育成する研修プログラムです。AIの基礎理解に加え、自社の業務シーンを題材にしたワークショップや、管理職向けのマネジメント研修、プロンプト実践演習を通じて、「現場で使えるAI人材」を育てます。",
    benefits: [
      "AIの基礎知識から実務活用まで一気通貫で学べる",
      "自社の業務に合わせたハンズオン形式で定着しやすい",
      "経営層・管理職・現場メンバーなど、対象ごとにカスタマイズ可能"
    ],
    flow: [
      { step: "01", title: "ニーズ・対象者ヒアリング", desc: "研修の対象者・目的・現状レベルをヒアリングします。" },
      { step: "02", title: "研修プログラム設計", desc: "目的に応じて、講義・ワークショップ・演習の構成を設計します。" },
      { step: "03", title: "研修実施", desc: "オンラインまたは対面で研修を実施し、その場で質問や実践を行います。" },
      { step: "04", title: "フォローアップ・追加支援", desc: "アンケート・ヒアリングをもとに定着状況を確認し、必要に応じて追加支援を行います。" }
    ]
  },
  "advisor-dx": {
    title: "AI顧問 / DX伴走",
    subtitle: "AI ADVISORY & ONGOING SUPPORT",
    heroImage: "/images/10.png",
    description:
      "月次の伴走を通じて、AI活用と業務改善を継続的に支援するサービスです。定例ミーティングでの相談対応に加え、改善アイデアの提案や新ツールの情報提供を行い、社内のDX推進を外部パートナーとして支えます。",
    benefits: [
      "経営層・担当者がいつでも相談できる「AI顧問」を持てる",
      "継続的な改善提案により、小さなDXを積み重ねられる",
      "自社だけではキャッチアップしにくいAIトレンド情報を得られる"
    ],
    flow: [
      { step: "01", title: "キックオフ・現状共有", desc: "現在の体制や課題、今後の方針を整理し、伴走のゴールを共有します。" },
      { step: "02", title: "定例ミーティング開始", desc: "月次または隔週の定例ミーティングで、課題相談や改善アイデア出しを行います。" },
      { step: "03", title: "改善施策の実行・フォロー", desc: "決まった施策の実行状況を確認し、必要に応じて追加支援を行います。" },
      { step: "04", title: "継続的な見直し・アップデート", desc: "AIツールや組織状況の変化に応じて、支援内容や方針をアップデートしていきます。" }
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          width={1200}
          height={600}
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-80">{service.subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">{service.title}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl -mt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-black"
        >
          {/* Description */}
          <div className="mb-16">
            <h2 className="text-2xl font-light mb-8 flex items-center">
              <span className="w-12 h-px bg-black mr-4"></span>
              サービス概要
            </h2>
            <p className="text-gray-600 leading-8 text-lg font-light text-justify">
              {service.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h3 className="text-lg font-bold mb-8 tracking-widest uppercase text-gray-400">Main Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 border border-gray-100">
                  <CheckCircle2 size={24} className="mb-4 text-gray-800" />
                  <p className="text-gray-800 font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Flow */}
          <div className="mb-16">
            <h3 className="text-lg font-bold mb-8 tracking-widest uppercase text-gray-400">Process Flow</h3>
            <div className="space-y-6">
              {service.flow.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start md:items-center border-b border-gray-100 pb-6 last:border-0">
                  <div className="text-3xl font-serif font-light text-gray-300 w-16">{item.step}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 text-white p-10 text-center">
            <h3 className="text-2xl font-light mb-4">お問い合わせ</h3>
            <p className="text-gray-400 mb-8 text-sm">本サービスに関するご質問・お見積もりはこちらから</p>
            <Link to="/contact" className="inline-block bg-white text-black px-10 py-4 text-sm tracking-widest hover:bg-gray-200 transition-colors">
              CONTACT US
            </Link>
          </div>

        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-black transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;