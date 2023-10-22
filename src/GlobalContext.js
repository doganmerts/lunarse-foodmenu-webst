import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);
  const [sepettekiler, setSepettekiler] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [cart, setCart] = useState([]);
  const [foods, setFoods] = useState([]);

  const favorilereEkle = (foods) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(foods);

    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((urun) => urun.id !== id);

    setFavoriler(yeniFavoriler);
  };

  const sepeteEkle = (foods) => {
    const eskiSepet = [...sepettekiler];
    const yeniSepet = eskiSepet.concat(foods);

    setSepettekiler(yeniSepet);
  };

  const sepettenCikar = (id) => {
    const eskiSepet = [...sepettekiler];
    const yeniSepet = eskiSepet.filter((urun) => urun.id !== id);

    setSepettekiler(yeniSepet);
  };

  const handleQuantityChange = (foods, value) => {
    setQuantities((prev) => ({ ...prev, [foods]: parseInt(value) }));
  };

  function AddToCart(foods) {
    const existingfoodsIndex = cart.findIndex(
      (cartfoods) => cartfoods.id === foods.id
    );
    if (existingfoodsIndex > -1) {
      const newCart = [...cart];
      newCart[existingfoodsIndex].quantity += quantities[foods.id] || 1;
      setCart(newCart);
    } else {
      foods.quantity = quantities[foods.id] || 1;
      setCart((prevCart) => [...prevCart, foods]);
    }
  }

  function RemoveFromCart(id) {
    const inCart = [...cart];
    const index = inCart.findIndex((foods) => foods.id === id);
    if (index > -1) {
      inCart.splice(index, 1);
      setCart(inCart);
    }
  }
  const total = cart.reduce(
    (acc, foods) => acc + foods.price * foods.quantity,
    0
  );
  const totalFoodsInCart = cart.reduce((acc, foods) => acc + foods.quantity, 0);

  const [inputGirdi, setInputGirdi] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const inputDegeri = e.target.value.toLowerCase();
    setInputGirdi(inputDegeri);
    if (inputDegeri) {
      const results = foods.filter(
        (foods) =>
          foods.title.toLowerCase().includes(inputDegeri) ||
          foods.description.toLowerCase().includes(inputDegeri)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        favoriler,
        favorilereEkle,
        favorilerdenCikar,
        sepettekiler,
        sepeteEkle,
        sepettenCikar,
        handleQuantityChange,
        cart,
        AddToCart,
        foods,
        quantities,
        total,
        totalFoodsInCart,
        inputGirdi,
        handleSearchChange,
        searchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
