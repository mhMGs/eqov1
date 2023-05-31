import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-9`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-none flex justify-between items-center flex-row m-6`} >
        <h4 className="font-poppins font-semibold xs:text-[20.89px] text-[15.89px] xs:leading-[53.16px] leading-[43.16px] text-gradient">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-black uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
