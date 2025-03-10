import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import "./style.css";

export function Card({ id, tags, title, description, price, image }) {
  const [count, setCount] = useState(0);
  return (
    <div id="cardcss">
      <img src={image} alt="" id="img" />
      <p>{id}</p>
      <p id="tag">{tags}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>

      <div id="diversos">
        <div id="preco">
          <strong> R$ 9,90 </strong>
        </div>

        <div id="button">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <div>
          <button type="button" id="carrinho">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
