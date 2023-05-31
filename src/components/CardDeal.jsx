import { card } from "../assets";
import styles, { layout } from "../style";
import Button2 from "./Button2";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The eqo E-1 is a cutting-edge reverse vending machine (RVM) designed to revolutionize the recycling experience. This innovative RVM incorporates a sleek and customizable design that seamlessly integrates with any environment.
      </p>

      <Button2 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
