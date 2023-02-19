import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProider";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket.reduce((a, b) => a?.price + b?.price));
  let sum = 0;
  basket.map((product) => (sum += product.price));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items):{" "}
              <strong>{sum.toFixed(2)}$</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
