import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { datalar } from "./API";
import { AppContext } from "../GlobalContext";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Main() {
  const [foods, setFoods] = useState([]);
  const yemekler = datalar;

  const { favoriler, favorilereEkle, favorilerdenCikar } =
    useContext(AppContext);
  const {
    items,
    AddToCart,
    quantities,
    handleQuantityChange,
    searchResults,
    inputGirdi,
  } = useContext(AppContext);
  const displayItems = inputGirdi ? searchResults : items;
  const { sepettekiler, sepeteEkle, sepettenCikar } = useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id === x);
    return secim;
  };

  const sepetKontrol = (x) => {
    const secim = sepettekiler.some((falan) => falan.id === x);
    return secim;
  };
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("./API.js")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container2">
        <div className="row">
          {yemekler.map((foods) => (
            <div className="col-md-4 my-3">
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
                <input
                  type="number"
                  min="1"
                  value={quantities[foods.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(foods.id, e.target.value)
                  }
                  className="p-2 border rounded"
                  style={{ fontSize: "12px" }}
                />

                {favoriKontrol(foods.id) ? (
                  <button
                    className="btn btn-warning"
                    onClick={() => favorilerdenCikar(foods.id)}
                  >
                    FAVORİLERDEN ÇIKAR
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => favorilereEkle(foods)}
                  >
                    FAVORİLERE EKLE
                  </button>
                )}
                {sepetKontrol(foods.id) ? (
                  <button
                    className="btn btn-warning"
                    onClick={() => sepettenCikar(foods.id)}
                  >
                    SEPETTEN ÇIKAR
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => sepeteEkle(foods)}
                  >
                    SEPETE EKLE
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
