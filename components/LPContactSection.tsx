import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

/* ================================
   LP用 お問い合わせセクション
   ※ 既存 Contact.tsx のフォーム構造をベースにした簡易版
================================ */

const LPContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // API連携時に差し替え
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* ▼ テキスト差し替えポイント：セクションタイトル */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 leading-relaxed">
            <span className="block">AI業務改善・DX伴走に関する</span>
            <span className="block">ご相談</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            AI業務改善支援・DX伴走支援・AI導入支援・AI研修に関するご相談は、こちらのフォームから承っています。
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 shadow-xl border border-gray-100">
          {formStatus === 'success' ? (
            <div className="text-center py-12" role="status" aria-live="polite">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">お問い合わせありがとうございます</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                内容を確認のうえ、担当者より2営業日以内にご連絡させていただきます。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* ▼ テキスト差し替えポイント：フォーム項目のプレースホルダー等 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    貴社名 / 屋号 <span className="text-slate-300 font-normal ml-1">(任意)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 focus:border-slate-900 transition-colors bg-transparent rounded-none"
                    placeholder="例）株式会社〇〇…"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    お名前 <span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 focus:border-slate-900 transition-colors bg-transparent rounded-none"
                    placeholder="例）山田 太郎…"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  メールアドレス <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 focus:border-slate-900 transition-colors bg-transparent rounded-none"
                  placeholder="example@across-ai.com…"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  お問い合わせ種別 <span className="text-red-400 ml-1">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue=""
                  aria-label="お問い合わせ種別"
                  className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 focus:border-slate-900 transition-colors bg-transparent rounded-none"
                >
                  <option value="" disabled>選択してください</option>
                  <option value="reform">AI業務改善支援について</option>
                  <option value="dx">DX伴走支援について</option>
                  <option value="implementation">AI導入支援について</option>
                  <option value="training">AI教育・研修について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  お問い合わせ内容 <span className="text-red-400 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-slate-200 p-4 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 focus:border-slate-900 transition-colors bg-slate-50 rounded-sm mt-2"
                  placeholder="現状のお悩みや、相談したい業務・部署などを可能な範囲でご記入ください…"
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <p className="text-xs text-slate-500 mb-4">
                  <Link to="/privacy" className="underline hover:text-slate-900">プライバシーポリシー</Link>
                  に同意のうえ、送信してください。
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="inline-flex items-center justify-center bg-slate-900 text-white px-12 py-4 text-xs md:text-sm tracking-widest hover:bg-slate-700 transition-colors transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 group w-full md:w-auto"
                >
                  {formStatus === 'submitting' ? '送信中…' : '送信する'}
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          )}

          <div className="text-center space-y-1 mt-8 text-xs text-slate-500">
            <p>運営：株式会社アクロス Across AI</p>
            <p>Email: info@across-ai.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPContactSection;

