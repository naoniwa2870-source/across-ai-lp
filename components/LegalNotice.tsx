import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LegalNotice: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const details = [
    { label: "事業者名", value: "株式会社アクロス (Across Inc.)" },
    { label: "運営責任者", value: "丹羽 ナオ" },
    { label: "所在地", value: "〒107-0061 東京都港区北青山1-3-1 アールキューブ青山 3F" },
    { label: "運営拠点", value: "東京・札幌" },
    { label: "連絡先", value: "info@across-ai.com (メールのみ対応)" },
    { label: "販売価格", value: "各サービスごとに表示(消費税・手数料等込み)" },
    { label: "商品代金以外の必要料金", value: "銀行振込手数料・通信料等はお客様負担" },
    { label: "支払い方法", value: "銀行振込・クレジットカード・その他指定方法" },
    { label: "引き渡し時期", value: "ご入金確認後、サービスごとにご案内" },
    { label: "返品・キャンセル", value: "サービスの性質上、原則不可\n(詳細は各サービス案内をご確認ください)" },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-800">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-serif text-center mb-16 tracking-wider text-slate-900">
            特定商取引法に基づく表記
          </h1>

          <div className="border-t border-slate-200">
            {details.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row py-6 border-b border-slate-200"
              >
                <div className="w-full md:w-1/3 mb-2 md:mb-0">
                  <span className="font-bold text-sm tracking-widest text-slate-900 block md:pt-1">
                    {item.label}
                  </span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-sm leading-7 text-slate-600 whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-xs text-slate-500 leading-relaxed space-y-2">
            <p>その他ご不明点はお問い合わせフォームよりご連絡ください。</p>
            <p>本表記は、法令等の変更やサービス内容の改善等により、予告なく改定される場合があります。</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalNotice;