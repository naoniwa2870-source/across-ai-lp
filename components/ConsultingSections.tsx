import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  Search,
  Sparkles,
  Users,
  AlertTriangle,
  UserSearch,
  Network,
  Wand2,
  Eye,
  Cpu,
  Workflow,
} from 'lucide-react';

/* ================================
   よくある課題セクション
   ※ テキスト差し替えしやすい構造
================================ */

const sectionHeaderMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const PainPoints: React.FC = () => {
  const cards = [
    {
      title: 'AIを導入したい',
      body: '何から始めればよいかわからない',
      Icon: AlertTriangle,
    },
    {
      title: 'AIツールを試したが',
      body: '業務に定着しない',
      Icon: UserSearch,
    },
    {
      title: '業務改善を進めたいが',
      body: '社内に推進できる人材がいない',
      Icon: Wand2,
    },
    {
      title: 'AIツールが多すぎて',
      body: 'どれを導入すればよいかわからない',
      Icon: Cpu,
    },
  ];

  return (
    <section id="problems" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={sectionHeaderMotion.initial}
            whileInView={sectionHeaderMotion.whileInView}
            viewport={sectionHeaderMotion.viewport}
            transition={sectionHeaderMotion.transition}
          >
            {/* ▼ テキスト差し替えポイント：セクションタイトル */}
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              このような課題はありませんか？
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed">
              AIやDXに前向きでも、「どこから手を付けるべきか」「社内に詳しい人がいない」といった声を多く伺います。
              Across AIにご相談くださる企業さまも、まずは次のようなお悩みからスタートすることがほとんどです。
            </p>
            <div className="w-12 h-px bg-gray-900 mb-7" />
          </motion.div>

          {/* ▼ テキスト差し替えポイント：課題カード（2×2カード） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {cards.map(({ title, body, Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="bg-white/70 rounded-lg border border-gray-100 border-l-4 border-l-gray-400 px-6 py-6 md:px-7 md:py-7 shadow-none hover:bg-gray-50 transform transition-transform transition-colors transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                      CASE {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-sm md:text-base font-medium text-gray-900">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================
   代表プロフィールセクション
================================ */

export const RepresentativeProfile: React.FC = () => {
  const tags = ['AI導入支援', '業務改善DX', 'AI研修', 'DX伴走支援'];

  return (
    <section id="profile" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            代表プロフィール
          </h2>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-7 md:px-10 md:py-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src="/images/member_nao_photo.png"
                alt="丹羽 奈央"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-gray-900 mb-1">丹羽 奈央</p>
              <p className="text-xs md:text-sm text-gray-500 mb-4">
                Founder / AI業務変革コンサルタント
              </p>

              <div className="mb-4">
                <img
                  src="/images/ai passport.png"
                  alt="AIパスポート認証"
                  className="h-10 md:h-12 object-contain"
                />
              </div>

              <div className="space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed mb-5">
                <p>
                  国際企業でのビジネス経験と教育事業の経営経験をもとに、AIを活用した業務改善・DX支援を行っています。
                </p>
                <p>
                  13年以上の事業運営経験をもとに、AIを現場で活用できる形に落とし込む支援を行っています。
                </p>
                <p>
                  AIツール導入支援、業務整理、DX推進など、実務に根ざしたAI活用を企業・組織に提供しています。
                </p>
                <p>慶應義塾大学卒業。</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-[11px] md:text-xs text-gray-600 tracking-[0.08em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ================================
   Across AIができること
================================ */

export const Capabilities: React.FC = () => {
  const cards = [
    {
      title: 'AI導入支援',
      body: '自社に合ったAIツールの選定から導入設計・活用ルールづくりまでを支援します。',
      tag: 'AI導入・活用設計',
      Icon: Cpu,
    },
    {
      title: '業務改善・DX支援',
      body: '業務プロセスを棚卸しし、ムダや属人化を整理したうえでDXの進め方を設計します。',
      tag: '業務改善・DX',
      Icon: Eye,
    },
    {
      title: 'AI研修',
      body: '経営層から現場まで、実務に直結するAI活用スキルを育成する研修・ワークショップを提供します。',
      tag: 'AI教育・研修',
      Icon: Workflow,
    },
    {
      title: '業務プロセス設計',
      body: 'AI活用を前提とした新しい業務プロセスを設計し、現場で回る形に落とし込みます。',
      tag: '業務設計・標準化',
      Icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* ▼ テキスト差し替えポイント：セクションタイトル */}
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Across AIができること
          </h2>
          <motion.div
            initial={sectionHeaderMotion.initial}
            whileInView={sectionHeaderMotion.whileInView}
            viewport={sectionHeaderMotion.viewport}
            transition={sectionHeaderMotion.transition}
          >
            <div className="w-12 h-px bg-gray-900 mb-8" />

            {/* ▼ テキスト差し替えポイント：リード文 */}
            <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
              上のような課題に対して、Across AIは「業務整理」「AI導入」「自動化」「継続伴走」の4つの領域でご支援します。<br className="hidden md:inline" />
              現場の状況に合わせて、必要なところから一緒に進めていきます。
            </p>
          </motion.div>

          {/* ▼ テキスト差し替えポイント：できること（4枚カード） */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {cards.map(({ title, body, tag, Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                className="rounded-xl px-6 py-6 md:px-7 md:py-7 border border-gray-100 bg-white hover:bg-gray-50 transform transition-transform transition-colors transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                      SERVICE {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-sm md:text-base font-medium text-gray-900">
                      {title}
                    </h3>
                    <p className="inline-flex items-center rounded-full border border-gray-200 px-2 py-0.5 mt-2 text-[10px] font-normal text-gray-500 tracking-[0.12em] uppercase">
                      {tag}
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ================================
   選ばれる理由セクション
================================ */

export const Reasons: React.FC = () => {
  const items = [
    {
      title: '研修だけで終わらない「実務設計」までの支援',
      body:
        '業務フローを一緒に整理し、「どこをAI化するか」まで具体的に設計します。'
    },
    {
      title: '現場に寄り添う、伴走型スタイル',
      body:
        '現場の負担や不安に配慮しつつ、無理のないステップで定着を支援します。'
    },
    {
      title: 'AI×業務改善の両輪で考える',
      body:
        'AIツールだけでなく、業務そのものの見直しとセットで改善を進めます。'
    },
    {
      title: '中小企業・少人数組織に強い',
      body:
        '専任DX人材がいない中小企業・福祉事業所・少人数組織での支援実績があります。'
    }
  ];

  return (
    <section
      id="reasons"
      className="py-24 bg-white border-t border-gray-100 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/image%20back4.png")',
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* ▼ テキスト差し替えポイント：セクションタイトル */}
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Across AIが選ばれる理由
          </h2>
          <div className="w-12 h-px bg-gray-900 mx-auto mb-6" />
          {/* ▼ テキスト差し替えポイント：リード文 */}
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            「AIツール導入だけ」で終わらせず、業務改善と
            <br className="inline md:hidden" />
            現場定着まで
            <br className="hidden md:inline" />
            伴走するコンサルティングです。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
              className="border border-gray-100 bg-gray-50 p-6 md:p-8 text-left transform transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   AI活用の取り組みセクション
================================ */

export const AIInitiatives: React.FC = () => {
  const projects = [
    {
      title: '福祉事業所DX検証',
      body: '福祉事業所の業務プロセスを整理し、AIやデジタルツールを活用したDXの可能性を検証するプロジェクトです。',
    },
    {
      title: 'AI活用研修の実証',
      body: '業務棚卸しと生成AI活用ワークを組み合わせた研修プログラムの効果を、複数拠点で検証しています。',
    },
    {
      title: 'AIツール導入・実装支援',
      body:
        'ChatGPTなどの生成AIを活用し、企業や組織の業務改善・DX推進を支援しています。AIツール導入設計から実装・運用まで伴走し、LP制作やAIエージェント構築をサポートしています。',
    },
  ];

  return (
    <section id="initiatives" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            AI活用の取り組み
          </h2>
          <div className="w-12 h-px bg-gray-900 mx-auto mb-6" />
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Across AIでは、企業の現場におけるAI活用の可能性を検証する
            <br className="hidden md:inline" />
            実証プロジェクトにも取り組んでいます。
            <br className="hidden md:inline" />
            現場で実際に使えるAI活用を重視し、業務改善につながる形でのAI導入を支援しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg px-6 py-7 md:px-7 md:py-8 text-left transform transition-transform transition-shadow duration-300 hover:-translate-y-1"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                PROJECT {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {project.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   CTAセクション
================================ */

export const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="py-24 bg-gray-50 border-t border-gray-100 flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* ▼ テキスト差し替えポイント：CTA文言（共通で利用） */}
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-relaxed">
            <span className="block">まずは現場のお困りごとから、</span>
            <span className="block">お聞かせください。</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
            「まずは話だけ聞きたい」という段階でも構いません。<br className="hidden md:inline" />
            貴社の状況に合わせた現実的な一歩をご提案します。
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-black text-white px-10 py-4 text-xs md:text-sm tracking-[0.3em] hover:bg-gray-900 transition-colors duration-300 uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
          >
            無料相談する
          </a>

          <p className="text-xs text-gray-500 mt-2">
            ※ 初回のオンライン相談（30〜45分）は無料です。お気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
};

/* ================================
   導入の流れセクション
================================ */

export const FlowSection: React.FC = () => {
  const steps = [
    {
      label: 'Step1',
      title: '無料相談',
      text: 'オンラインで現状とお悩みをお伺いします。',
      Icon: PhoneCall,
    },
    {
      label: 'Step2',
      title: '課題ヒアリング',
      text: '業務フローや組織体制を整理し、課題を可視化します。',
      Icon: Search,
    },
    {
      label: 'Step3',
      title: 'AI活用・DX提案',
      text: '優先度の高い領域から、具体的なAI活用・DX案をご提案します。',
      Icon: Sparkles,
    },
    {
      label: 'Step4',
      title: '導入支援・伴走',
      text: 'ツール導入〜業務定着まで伴走し、継続的に改善します。',
      Icon: Users,
    },
  ];

  return (
    <section id="flow" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            導入の流れ
          </h2>
          <div className="w-12 h-px bg-gray-900 mx-auto" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-8 md:gap-6">
          {steps.map(({ label, title, text, Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
              className="flex-1 bg-gray-50 border border-gray-100 px-6 py-8 md:px-6 md:py-8 text-center transform transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="mb-3 text-gray-500 text-xs tracking-[0.25em] uppercase">
                  {label}
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mb-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm md:text-base font-medium text-gray-900">
                  {title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

