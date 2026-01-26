import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3>このアプリについて</h3>
        <p>
          ドラクエウォークのキャラクターのレベル管理を行うためのツールです。
        </p>
      </section>
      <section className={styles.section}>
        <h3>データ参照元</h3>
        <p>経験値テーブルは以下のサイトを参照しています。</p>
        <a
          href="https://9db.jp/dqwalk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ドラクエウォーク攻略 - みんドラ
        </a>
      </section>
      <section className={styles.section}>
        <h3>注意事項</h3>
        <p>
          データはブラウザのLocalStorageに保存されます。ブラウザのデータを削除すると入力した情報が消えますのでご注意ください。
        </p>
      </section>
    </div>
  );
}
