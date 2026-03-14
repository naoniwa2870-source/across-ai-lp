import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="top">
      {/* 右側スクロールインジケーター */}
      <motion.div
        className="hidden md:flex flex-col items-center gap-6 absolute right-8 top-[35%] z-20"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <motion.span
          className="mb-1 text-[10px] tracking-[0.3em] text-gray-400 uppercase rotate-90"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-px h-96 bg-gradient-to-b from-gray-300/70 via-gray-300/30 to-transparent scale-x-75 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: 'easeOut' }}
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12">

        {/* =========================
           Hero: メインコピー（1セクション構成）
        ========================== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: reduceMotion
                  ? { staggerChildren: 0, delayChildren: 0 }
                  : { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
            className="md:w-1/3 mb-6 md:mb-0 z-10"
          >
            {/* ▼ テキスト差し替えポイント：メインキャッチコピー */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-3xl md:text-5xl font-serif font-light leading-relaxed md:leading-snug mb-4 text-gray-900"
            >
              <span className="block whitespace-nowrap">AIで業務を変える。</span>
              <span className="block whitespace-nowrap">現場から始めるDX。</span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-gray-700 leading-relaxed text-sm md:text-base mb-4"
            >
              業務整理からAI導入まで、<br />
              企業のDX推進を実務レベルで支援します。
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-gray-400 mb-7"
            >
              業務改善 / DX推進 / AI研修
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24, scaleX: 0.4 },
                visible: { opacity: 1, y: 0, scaleX: 1 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-16 h-px bg-black mb-7 origin-left"
            ></motion.div>

            {/* CTAボタン群（ナビゲーションは <a> でキーボード・中クリック対応） */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 text-xs md:text-sm tracking-[0.2em] hover:bg-gray-900 hover:tracking-[0.24em] transition-colors transition-[letter-spacing] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
              >
                無料相談する
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex items-center justify-center border border-black px-8 py-3 text-xs md:text-sm tracking-[0.2em] hover:bg-black hover:text-white hover:tracking-[0.24em] transition-colors transition-[letter-spacing] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
              >
                サービスを見る
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="md:w-2/3 relative"
            whileHover={{ y: -4 }}
          >
            <div className="w-full h-72 md:h-96 lg:h-[460px] bg-gray-100 overflow-hidden relative rounded-2xl md:rounded-3xl">
              <motion.img
                src="/images/9.png"
                alt="Across AI Consulting"
                width={800}
                height={460}
                className="object-cover w-full h-full"
                style={{ filter: 'saturate(0.7) brightness(0.96) contrast(1.02)' }}
                initial={{ scale: 1 }}
                animate={reduceMotion ? { scale: 1 } : { scale: 1.02 }}
                whileHover={reduceMotion ? undefined : { scale: 1.04, y: -4 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 18, repeat: Infinity, repeatType: 'reverse' as const, ease: 'easeInOut' }}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 border border-gray-200 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;