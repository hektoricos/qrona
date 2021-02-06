import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Covid() {
  const { query } = useRouter();

  const name = query.name;
  const lastname = query.lastname;
  const uid = query.uid;

  // https://rosskhanas.github.io/react-qr-code/
  // builder https://qrona.pesihaha.vercel.app/covid-validation/covid?name=alexander&lastname=jocic

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>c19validator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Цовид-19 <a href="https://nextjs.org">Валидација</a>
          </h1>
          <h1 className={styles.title}>
            COVID-19 <a href="https://nextjs.org">Validacija</a>
          </h1>
          <h1 className={styles.title}>
            COVID-19 <a href="https://nextjs.org">Validation</a>
          </h1>

          <div className={styles.grid}>
            <div className="login-box-body">
              <div className="orherl" align="center">
                <strong>
                  <p className="upp">
                    {name} - {lastname}
                  </p>
                </strong>
                <br />
                Име и презиме, Ime i prezime, Name and lastname
                <br />
                <br />
                Шифра потврде <strong>{uid}</strong>
                <br />
                Потврда је ВАЛИДНА! <br />
                Резултат тестирања Негативан
                <br />
                Šifra potvrde <strong>{uid}</strong>{" "}
                {/* <strong>638633-439184</strong> */}
                <br />
                Potvrda je VALIDNA! <br />
                Rezultat testiranja NEGATIVAN
                <br />
                Confirmation code <strong>{uid}</strong>
                <br />
                Report is VALID! <br />
                <p className="upp">Test result Negativ</p>
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright 2020
          </a>
        </footer>
      </div>
      <style>
        {`
        .upp {
            text-transform: uppercase;
            font-weight: bold;
        }
        .login-box-body {
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          font-size: 14px;
          line-height: 1.42857143;
          font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
          font-weight: 400;
          box-sizing: border-box;
          background: #fff;
          padding: 20px;
          border-top: 0;
          color: #666;
        }

        .orherl {
          -webkit-tap-highlight-color: rgba(0,0,0,0);
font-size: 14px;
line-height: 1.42857143;
font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
font-weight: 400;
text-align: -webkit-center;
box-sizing: border-box;
padding: 15px;
margin-bottom: 20px;
border: 1px solid transparent;
border-radius: 3px;
border-color: #008d4c;
color: #fff !important;
background-color: #008d4c !important;
        }
     `}
      </style>
    </>
  );
}
