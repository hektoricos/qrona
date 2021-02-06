import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import styles from "../styles/Home.module.css";

export default function Qrgen() {
  const g1 =
    Math.floor(Math.random() * (9 * Math.pow(10, 5))) + Math.pow(10, 5);
  const g2 =
    Math.floor(Math.random() * (9 * Math.pow(10, 5))) + Math.pow(10, 5);
  const uid = `${g1}-${g2}`;

  const [name, setName] = useState("Name");
  const [lastname, setLastname] = useState("Nachname");

  const saveCanvas = () => {
    const canvasSave = document.getElementById("qrgen");
    const d = canvasSave.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "filename.png";
    link.href = document.getElementById("qrgen").toDataURL();
    link.click();
  };

  useEffect(() => {
    console.log("name", name);
    console.log("lastname", lastname);
  }, [name, lastname]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          MUNEM <a href="https://nextjs.org">2020</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            https://qrona.vercel.app/covid-validation/covid?name=
            <span style={{ color: "red", fontWeight: "bold" }}>{name}</span>
            &lastname=
            <span style={{ color: "red", fontWeight: "bold" }}>{lastname}</span>
            &uid={uid}
          </code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h1>QR User</h1>
            <label for="male">Name</label>
            <input
              type="text"
              value={name}
              onFocus={() => setName("")}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="male">Nachname</label>
            <input
              type="text"
              value={lastname}
              onFocus={() => setLastname("")}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className={styles.card}>
            <h1>QR Code</h1>
            <QRCode
              size="320"
              id="qrgen"
              value={`https://qrona.vercel.app/covid-validation/covid?name=${name}&lastname=${lastname}&uid=${uid}`}
            />
            <button className={styles.btn} onClick={saveCanvas}>
              Download IMG
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Munem2020
        </a>
      </footer>
    </div>
  );
}
