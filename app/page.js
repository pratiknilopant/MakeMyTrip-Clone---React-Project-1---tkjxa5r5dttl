"use client"
import { Routes, Route } from "react-router-dom";
import Navigation from "./Main";
import Checkout from "./pages/Checkout/Checkout";
import Flights from "./pages/Flights/Flights";
import Trains from "./pages/Trains/Trains";
import ErrorInputBox from "./pages/ErrorInputBox/ErrorInputBox";
import Hotel from "./Components/Hotel Card/Hotel/Hotel";
import HotelModal from "./Components/Hotel Card/Hotel Modal/HotelModal";
import HotelCheckout from "./Components/Hotel Card/Hotel Checkout/HotelCheckout";
import { AuthNavigator } from "./Components/Navigator/AuthNavigator";
import { Login } from "./Components/Authentication/Login/Login";


export default function Home() {
  return (
    <div id="App">
      <Routes>
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/trains/:id" element={<Checkout />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={<Checkout />} />
        <Route path="/flights/:id" element={<Checkout />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotels/:id" element={<HotelModal />} />
        <Route path="/hotels/checkout" element={<AuthNavigator><HotelCheckout /></AuthNavigator>} />
        <Route path="" element={<Navigation />} />
        <Route path="/home" element={<ErrorInputBox />} />
      </Routes>
    </div>
  );
}
