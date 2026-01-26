import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3>必要経験値データ参照元</h3>
        <p>経験値テーブルは以下のサイトを参照しています。</p>
        <a
          href="https://9db.jp/dqwalk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ドラクエウォーク攻略 - みんドラ
        </a>
      </section>
    </div>
  );
}
