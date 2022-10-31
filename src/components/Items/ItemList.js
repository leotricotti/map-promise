import { Products } from "../../assets/data/products";

export const Card = () => {
  return (
    <div>
      {Products.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}
