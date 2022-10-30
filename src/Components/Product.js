import React from "react";
import JsonData from "../Data/JsonData.json";
import { useDispatch } from "react-redux";
import { decrementCart, incrementCart } from "../Redux/Reducers/CartReducer";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div className="row">
          {JsonData.products.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card m-2 "
                style={{ width: "15rem", height: "25rem", textAlign: "center" }}
              >
                <img
                  className="card-img-top"
                  src={product.src}
                  style={{
                    width: "15rem",
                    height: "20rem",
                    textAlign: "center",
                  }}
                  alt="images"
                />
                <p>
                  {product.name} | Rs.{product.price}
                </p>
                <div className="card-body">
                  <button
                    className="btn btn-primary ml-auto"
                    onClick={() => {
                      dispatch(
                        incrementCart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      );
                    }}
                  >
                    Add
                  </button>{" "}
                  &nbsp; &nbsp;
                  <button
                    className="btn btn-primary ml-auto"
                    onClick={() => {
                      dispatch(
                        decrementCart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      );
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
