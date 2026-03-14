import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-800">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-slate-900 text-white py-4 px-6 mb-12">
            <h1 className="text-2xl md:text-3xl font-serif text-center tracking-wider">
              利用規約
            </h1>
          </div>

          <div className="space-y-12 text-sm leading-7 text-slate-600">

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第1条（適用）</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>本規約は、株式会社アクロス（以下「当社」といいます）が提供する各種講座・研修・サービス（以下「本サービス」といいます）の利用条件を定めるものです。</li>
                <li>受講者（以下「利用者」といいます）は、本規約に同意の上で本サービスを利用するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第2条（利用申込・決済方法）</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>本サービスの申込および受講料の支払いは、当社が指定する方法（オンライン決済サービス、銀行振込、または当社が別途指定する方法）により行うものとします。</li>
                <li>銀行振込を利用する場合、振込手数料は利用者の負担とします。</li>
                <li>利用者が支払期日までに受講料を支払わない場合、申込は無効となることがあります。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第3条（キャンセル・返金）</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>キャンセルおよび返金の条件は、各募集要項または決済時の案内に従うものとします。</li>
                <li>当社が特に認める場合を除き、入金後の返金には応じません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第4条（禁止事項）</h2>
              <p className="mb-2">利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>法令または公序良俗に反する行為</li>
                <li>他の利用者または第三者の権利を侵害する行為</li>
                <li>申込や利用にあたり虚偽の情報を提供する行為</li>
                <li>当社の運営を妨害する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第5条（サービス内容の変更・中止）</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>当社は、必要に応じて本サービスの内容を変更・中止できるものとします。</li>
                <li>天災地変、システム障害、講師の都合、その他やむを得ない事由により、本サービスの提供が困難となる場合があります。その際、当社は利用者に対して速やかに通知するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第6条（著作権）</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>本サービスに関連して提供される教材、資料、コンテンツ等の著作権は当社または正当な権利者に帰属します。</li>
                <li>利用者は、当社の承諾なく、教材・資料等を複製、転載、販売、配布、公衆送信等してはなりません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第7条（免責事項）</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>当社は、本サービスの提供にあたり、利用者の目的達成を保証するものではありません。</li>
                <li>当社は、サービス利用に関連して発生した利用者の損害について、一切の責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第8条（個人情報の取扱い）</h2>
              <p>
                当社は、利用者から取得した個人情報を「プライバシーポリシー」に基づき、適切に取り扱います。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第9条（規約の変更）</h2>
              <p>
                当社は、必要と判断した場合、本規約を変更できるものとします。変更後の規約は、当社が別途定める方法により利用者に通知または公表した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第10条（準拠法・管轄裁判所）</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>本規約は日本法に準拠します。</li>
                <li>本サービスに関して紛争が生じた場合、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">第11条（お問い合わせ）</h2>
              <p className="mb-4">本サービスに関するお問い合わせは、以下にて受け付けます。</p>
              <div className="bg-slate-50 p-6 border border-slate-200">
                <p>株式会社アクロス</p>
                <p>〒107-0061 東京都港区北青山1-3-1 アールキューブ青山 3F</p>
                <p>運営拠点：東京・札幌</p>
                <p>Email: info@across-ai.com</p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;