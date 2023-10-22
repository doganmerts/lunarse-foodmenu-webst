import React from "react";

function Header() {
  return (
    <div>
      <h1 style={{ marginTop: "40px" }}>
        ELEGANCE BİR DENEYİME HOŞ GELDİNİZ...
      </h1>
      <div className="container">
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-4">
            <img
              src="https://www.myfrenchbookstore.com/cdn/shop/products/ratatouille_580x.jpg?v=1665773078"
              alt=""
              style={{ height: "470px", width: "400px" }}
            />
          </div>
          <div className="col-md-8">
            <h3>Şefimizle Tanışın</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus fuga velit vel assumenda maiores voluptate ducimus eius
              soluta tenetur sed?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
