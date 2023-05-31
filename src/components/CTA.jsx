import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="cta" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Find the closest machine in your area!</h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5 text-white`}>
        Everything you need to earn money through collecting, disposing and recycling.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
