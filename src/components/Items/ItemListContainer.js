import { useState, useEffect } from "react";
import { getProducts } from "../../assets/data/products";
import styles from './items.module.css'

export const Card = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProductList(res));
  }, []);

  return (
    <div>
      {productList.map((item) => {
        return (
          <div key={item.id}>
            <img className= {styles.img} src={item.img} alt={item.title} />
            <p className={styles.text}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
