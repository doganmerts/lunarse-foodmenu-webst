import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../GlobalContext";
import FavoriBos from "./FavoriBos";

function Favorites() {
  const { favoriler, favorilereEkle, favorilerdenCikar } =
    useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        {favoriler.length > 0 ? (
          <div className="row">
            {favoriler.map((foods) => (
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
                      onClick={() => favorilerdenCikar(foods.id)}
                    >
                      FAVORİLERDEN ÇIKAR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <FavoriBos />
        )}
      </div>
    </div>
  );
}

export default Favorites;
