import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            LIFE IS NOTTING WITHOUT TASTING IN OUR FAMOUS RESTAURANT
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            43/603 Sir C V Raman Street,
            <br /> CHENNAI, 602001
            <br /> +91 55555 66666
          </p>
          <p className={styles.text}>
            sai baba colony ,
            <br /> COIMBATORE, 631027
            <br /> (602) 867-1011
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
