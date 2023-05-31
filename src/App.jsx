import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats,  Hero } from "./components";

const App = () => (
  <div className="bg-primary-nav w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary-h ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
      </div>
    </div>
    
    <div className={`bg-primary-sc ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        </div>
    </div>
      <div className={`bg-primary-b ${styles.paddingX} ${styles.flexCenter}`}>
     <div className={`${styles.boxWidth}`}>
        <Billing />
      </div>
    </div>
    <div className={`bg-primary-ca ${styles.paddingX} ${styles.flexCenter}`}>
     <div className={`${styles.boxWidth}`}>
      <CardDeal />
      </div>
    </div>
    <div className={`bg-primary-c ${styles.paddingX} ${styles.flexCenter}`}>
     <div className={`${styles.boxWidth}`}>
        <CTA />
      </div>
    </div>
    <div className={`bg-primary-f ${styles.paddingX} ${styles.flexCenter}`}>
     <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
