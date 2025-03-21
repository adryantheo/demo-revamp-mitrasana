import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import ProdukLayanan from "./pages/ProdukLayanan";
import KlinikApotek from "./pages/KlinikApotek";
import TokoOnline from "./pages/TokoOnline";
import CareerPage from "./pages/CarreerPage";
import ArticleList from "./pages/ArticleList";
import ArticleDetail from "./pages/DetailArticle";
import PromoPage from "./pages/PromoPage";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/produk-layanan" element={<ProdukLayanan />} />
          <Route path="/jaringan" element={<KlinikApotek />} />
          <Route path="/toko-online" element={<TokoOnline />} />
          <Route path="/karir" element={<CareerPage />} />
          <Route path="/artikel" element={<ArticleList />} />
          <Route path="/artikel/:slug" element={<ArticleDetail />} />
          <Route path="/promo" element={<PromoPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;