import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import PricingPage from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import Login from "./pages/AnimateLogin.jsx";
import SignUp from "./pages/SignUp"; // Import the SignUp page
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./Components/CityList";
import City from "./Components/City.jsx";
import CountryList from "./Components/CountryList.jsx";
import Form from "./Components/Form";
import Map from "./Components/Map";
import { CitiesProvider } from "./Contexts/CitiesContext.jsx";
import "leaflet/dist/leaflet.css";
import { AuthProvider } from "./Contexts/FakeAuthContext.jsx";
// import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />{" "}
            
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
              <Route path="map" element={<Map />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
