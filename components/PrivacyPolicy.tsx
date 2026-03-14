import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-serif text-center mb-16 tracking-wider text-slate-900">
            プライバシーポリシー
          </h1>

          <div className="space-y-12 text-sm leading-7 text-slate-600">

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">1. 基本方針</h2>
              <p>
                株式会社アクロス（以下「当社」といいます）は、個人情報の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）を遵守し、個人情報を適切に取り扱うことをお約束いたします。<br />
                本プライバシーポリシーは、当社が提供するサービス（以下「本サービス」といいます）における個人情報の取り扱いについて定めるものです。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">2. 収集する個人情報</h2>
              <p className="mb-2">当社は、本サービスの提供にあたり、以下の個人情報を収集いたします。</p>

              <h3 className="font-bold mt-4 mb-2 text-slate-800">収集する情報</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>会社名・屋号（任意）</li>
                <li>AI・ITツールの使用経験</li>
                <li>受講の動機・期待すること</li>
                <li>その他、お問い合わせ内容に含まれる情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">3. 個人情報の利用目的</h2>
              <p className="mb-2">当社は、収集した個人情報を以下の目的で利用いたします。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>講座の申し込み受付および受講者管理</li>
                <li>講座に関する連絡・案内の送付</li>
                <li>受講者への事前ヒアリングおよび個別対応</li>
                <li>講座内容の改善および新サービスの開発</li>
                <li>お問い合わせへの対応</li>
                <li>料金の請求および決済処理</li>
                <li>アフターフォローおよびサポート</li>
                <li>統計データの作成（個人を特定できない形式）</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">4. 個人情報の第三者提供</h2>
              <p className="mb-2">当社は、以下の場合を除き、個人情報を第三者に提供することはありません。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ご本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">5. 個人情報の委託</h2>
              <p>
                当社は、個人情報の取り扱いの全部または一部を第三者に委託する場合があります。その際は、委託先において個人情報が安全に管理されるよう、適切な監督を行います。
              </p>
              <h3 className="font-bold mt-4 mb-2 text-slate-800">委託先の例</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>メール配信サービス</li>
                <li>決済代行サービス</li>
                <li>クラウドストレージサービス</li>
                <li>顧客管理システム</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">6. 個人情報の保存期間</h2>
              <p className="mb-2">当社は、個人情報を利用目的の達成に必要な期間のみ保存し、その後は適切に廃棄いたします。</p>
              <h3 className="font-bold mt-4 mb-2 text-slate-800">保存期間の目安</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>受講者情報：講座終了後3年間</li>
                <li>お問い合わせ情報：対応完了後1年間</li>
                <li>決済情報：法令で定められた期間</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">7. 個人情報の安全管理</h2>
              <p className="mb-2">当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
              <h3 className="font-bold mt-4 mb-2 text-slate-800">安全管理措置</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>アクセス権限の管理</li>
                <li>データの暗号化</li>
                <li>定期的なセキュリティ監査</li>
                <li>従業員への教育・研修</li>
                <li>システムの定期的な更新</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">8. ご本人の権利</h2>
              <p className="mb-2">ご本人は、当社に対して以下の権利を行使することができます。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>個人情報の開示請求</li>
                <li>個人情報の訂正・追加・削除請求</li>
                <li>個人情報の利用停止・消去請求</li>
                <li>個人情報の第三者提供の停止請求</li>
              </ul>
              <p className="mt-2">これらの権利を行使される場合は、下記のお問い合わせ先までご連絡ください。</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">9. Cookie等の利用</h2>
              <p>
                当社のウェブサイトでは、サービスの向上のためにCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定により無効にすることができます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">10. プライバシーポリシーの変更</h2>
              <p>
                当社は、法令の変更や事業内容の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">11. お問い合わせ窓口</h2>
              <p className="mb-4">個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
              <div className="bg-slate-50 p-6 border border-slate-200">
                <p>運営会社：株式会社アクロス</p>
                <p>所在地：〒107-0061 東京都港区北青山1-3-1 アールキューブ青山 3F</p>
                <p>運営拠点：東京・札幌</p>
                <p>個人情報保護責任者：代表 丹羽奈央</p>
                <p className="mt-2 font-bold">連絡方法</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Email : info@across-ai.com</li>
                </ul>
                <p className="text-xs mt-2 text-slate-500">※ お問い合わせへの回答には、お時間をいただく場合があります。</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">個人情報保護への取り組み</h2>
              <p>
                当社は、受講者の皆様に安心してサービスをご利用いただけるよう、個人情報保護に関する法律を遵守し、個人情報の適切な取り扱いに努めてまいります。<br />
                ご不明な点やご質問がございましたら、お気軽にお問い合わせください。
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;