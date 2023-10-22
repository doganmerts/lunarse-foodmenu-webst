import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../GlobalContext";
import SepetBos from "./SepetBos";

function Sepet() {
  const { sepettekiler, sepeteEkle, sepettenCikar } = useContext(AppContext);
  const [foods, setFoods] = useState([]);

  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        {sepettekiler.length > 0 ? (
          <div className="row">
            {sepettekiler.map((foods) => (
              <div className="col-md-4 my-3">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "22rem", height: "600px" }}
                >
                  <img
                    src={foods.img}
                    alt=""
                    className="card-img-top m-auto"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`foodetail/${foods.id}`)}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{foods.name}</h6>
                    <p className="card-text">{foods.dsc}</p>
                    <p className="card-text">{foods.price}$</p>

                    <button
                      className="btn btn-warning"
                      onClick={() => sepettenCikar(foods.id)}
                    >
                      SEPETTEN ÇIKAR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <SepetBos />
        )}
      </div>
    </div>
  );
}

export default Sepet;
