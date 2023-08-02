import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>U WILL GET BEST FOODS IN TOWN</h1>
      <p className={styles.desc}>
      we wanted to create a place... a good place where a guest can truly feel like a guest would fell
        in our home ,ehre the meals are prepared ina traditional authenthic way.
        so,we opened one
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
