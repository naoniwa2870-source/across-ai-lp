import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pb-24 text-slate-800">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="/images/3.png"
          alt="Contact Us"
          className="w-full h-full object-cover grayscale brightness-90"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-widest uppercase mb-4 drop-shadow-md">
              Contact
            </h1>
            <p className="text-white/90 text-sm md:text-base tracking-[0.2em] font-light">
              お問い合わせ
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10 space-y-16 -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-10 md:p-16 shadow-xl border-t-4 border-slate-900"
        >
          {formStatus === 'success' ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
                <CheckCircle2 size={40} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-serif text-slate-900 mb-4">お問い合わせありがとうございます</h2>
              <p className="text-slate-600">
                内容を確認の上、担当者より2営業日以内にご連絡させていただきます。<br />
                今しばらくお待ちくださいませ。
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-10 text-sm border-b border-slate-400 pb-1 hover:border-black transition-colors"
              >
                フォームに戻る
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
                  AI導入、研修、コンサルティングに関するご相談やご質問は、<br className="hidden md:inline" />
                  下記フォームよりお気軽にお問い合わせください。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
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
                      placeholder="株式会社アクロス…"
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
                      placeholder="山田 太郎…"
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
                    <option value="training">AI研修・人材育成について</option>
                    <option value="consulting">導入コンサルティング・伴走支援について</option>
                    <option value="automation">業務自動化・開発について</option>
                    <option value="media">取材・登壇依頼について</option>
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
                    placeholder="ご相談内容を具体的にご記入ください…"
                  ></textarea>
                </div>

                <div className="pt-6 text-center">
                  <p className="text-xs text-slate-500 mb-6">
                    <Link to="/privacy" className="underline hover:text-slate-900">プライバシーポリシー</Link>に同意の上、送信してください。
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center justify-center bg-slate-900 text-white px-12 py-4 text-sm tracking-widest hover:bg-slate-700 transition-colors transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 group w-full md:w-auto"
                  >
                    {formStatus === 'submitting' ? '送信中…' : 'SEND MESSAGE'}
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </form>
            </>
          )}
        </motion.div>

        {/* Contact Info Footer */}
        <div className="text-center space-y-2">
          <h3 className="text-sm font-bold tracking-widest text-slate-900">株式会社アクロス</h3>
          <p className="text-sm text-slate-500">Email: info@across-ai.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;