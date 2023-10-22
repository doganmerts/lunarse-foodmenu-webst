import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { datalar } from "./API";
import { AppContext } from "../GlobalContext";

function Foodetails() {
  const yemekler = datalar;
  const { id } = useParams();
  const { favoriler } = useContext(AppContext);
  const [foods, setFoods] = useState([]);
  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id === x);
    return secim;
  };
  useEffect(() => {
    axios
      .get(`API.js/${id}`)
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="container">
        <h2 className="display-2">{foods.name}</h2>
        <div className="row my-4">
          <div className="col-md-4">
            <div>
              {favoriKontrol(foods.id) ? (
                <button className="btn btn-danger mb-2">
                  Favorilerde Bulunmaktadır
                </button>
              ) : (
                <></>
              )}
            </div>
            <img src={foods.img} alt={foods.name} />
          </div>
          <div className="col-md-8">
            <h2>{foods.price}</h2>
            <h3>{foods.dsc}</h3>
            <p>{foods.rate}</p>
            <p>{foods.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodetails;
