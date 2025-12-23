import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | toito.inc",
  description:
    "toito.incが運営する本サイトにおける個人情報等の取扱いについて定めたプライバシーポリシーです。"
};

const lastUpdated = "2025年12月23日";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:py-24">
        <header className="mb-12 space-y-4 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Privacy Policy</p>
          <h1 className="text-[clamp(42px,6vw,72px)] font-semibold leading-tight tracking-tight">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-white/70">最終更新日：{lastUpdated}</p>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <Link href="/" className="underline underline-offset-4 hover:text-white">
              ホームへ戻る
            </Link>
            <span className="text-white/50">/</span>
            <Link href="/#contact" className="underline underline-offset-4 hover:text-white">
              お問い合わせフォーム
            </Link>
          </div>
        </header>

        <div className="space-y-8">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">1. 基本方針</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              toito.inc（以下「当社」）は、個人情報保護法その他関係法令を遵守し、取得した個人情報等を適正に管理します。本ポリシーは、当社が本サイトおよび関連サービスで取得する情報の取扱いについて定めるものです。
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">2. 適用範囲</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              本ポリシーは、当社が運営する本ウェブサイト（`toito.inc`ドメイン配下のページを含む）および問い合わせ対応等の関連業務に適用されます。
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">3. 取得する情報</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <p>当社は以下の情報を必要な範囲で取得します。</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>お問い合わせフォームにご入力いただく情報（氏名、会社名、メールアドレス、居住国、業種、問い合わせ内容等）</li>
                <li>サービス利用や閲覧時に自動的に生成・保存される情報（IPアドレス、ブラウザ情報、端末情報、クッキー等の識別子、閲覧履歴、操作ログ）</li>
                <li>アクセス解析ツールや広告配信に伴い取得される利用状況データ（クッキー、広告識別子、リファラー等）</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">4. 利用目的</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <p>当社は取得した情報を、以下の目的で利用します。</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>お問い合わせへの回答、資料送付、商談・打合せの調整</li>
                <li>当社サービス・イベント・キャンペーン等に関するご案内や情報提供</li>
                <li>サービスやコンテンツの企画・改善・品質向上のための分析</li>
                <li>不正行為の防止、セキュリティ確保、システム保守・障害対応</li>
                <li>法令・行政機関の要請への対応、権利・財産・安全の保護</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">5. クッキー等の利用</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <p>
                当社は、サイトの利便性向上、利用状況の把握、コンテンツ改善のためにクッキー等の技術を利用する場合があります。ブラウザの設定によりクッキーを無効化できますが、機能が一部制限されることがあります。
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">6. 第三者提供と委託</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <p>
                当社は、法令に基づく場合や人の生命・財産保護のために必要な場合を除き、あらかじめ本人の同意なく個人情報を第三者に提供しません。ただし、上記利用目的の達成に必要な範囲で業務を外部に委託することがあり、この場合は委託先に対し適切な監督を行います。
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">7. 海外での取扱い</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <p>
                当社は、クラウドサービス等を利用する場合に、取得した情報を国外で保管・処理することがあります。その際は、関係法令に基づき必要な契約・管理を行い、適切な安全管理措置を確保します。
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">8. 安全管理措置</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <ul className="list-disc space-y-2 pl-5">
                <li>アクセス権限管理、認証・認可の適正化</li>
                <li>通信の暗号化、ログ取得・監査、バックアップ</li>
                <li>最小限の取得・保存と保存期間の適正化</li>
                <li>従業者・委託先への必要な教育および契約による義務付け</li>
                <li>漏えい等の発生時の報告・再発防止体制の整備</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">9. 保存期間</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              個人情報は利用目的の達成に必要な期間に限り保存し、保存期間経過後は適切な方法で削除または匿名化します。法令により保存が義務付けられる場合は、その期間に従います。
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">10. 開示等のご請求</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <p>
                本人または代理人は、当社が保有する自身の個人情報について、利用目的の通知・開示・訂正・追加・削除・利用停止・第三者提供停止を求めることができます。請求の際は本人確認にご協力いただく場合があります。
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">11. 未成年の方の情報</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              16歳未満の方が本サイトを利用する場合は、必ず保護者の方の同意を得た上で情報を提供してください。
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">12. 改定</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              本ポリシーの内容は、法令改正やサービス変更に応じて、予告なく改定することがあります。重要な変更がある場合は、本サイト上で告知します。
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-xl font-semibold text-[#d10000]">13. お問い合わせ</h2>
            <div className="mt-3 space-y-2 leading-relaxed text-white/80">
              <p>
                本ポリシーおよび個人情報の取扱いに関するご質問・ご相談は、下記窓口よりご連絡ください。
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>toito.inc プライバシー窓口</li>
                <li>
                  <Link href="/#contact" className="underline underline-offset-4 hover:text-white">
                    お問い合わせフォーム
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
