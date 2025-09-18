import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage"; // Новый импорт
import BloggerDashboard from "./pages/blogger/Dashboard";
import BloggerReviews from "./pages/blogger/Reviews";
import BloggerSocials from "./pages/blogger/Socials";
import CatalogProducts from "./pages/blogger/CatalogProducts";
import SwipeProducts from "./pages/blogger/SwipeProducts";
import AdvertiserDashboard from "./pages/advertiser/Dashboard";
import AdvertiserReviews from "./pages/advertiser/Reviews";
import AdvertiserProducts from "./pages/advertiser/Products";
import CatalogBloggers from "./pages/advertiser/CatalogBloggers";
import SwipeBloggers from "./pages/advertiser/SwipeBloggers";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminCampaigns from "./pages/admin/Campaigns";
import AdminAnalytics from "./pages/admin/Analytics";

function App() {
  return (
    <Routes>
      {/* Лендинг */}
      <Route path="/" element={<LandingPage />} />

      {/* Блогер */}
      <Route path="/blogger" element={<Layout role="blogger" />}>
        <Route index element={<BloggerDashboard />} />
        <Route path="reviews" element={<BloggerReviews />} />
        <Route path="socials" element={<BloggerSocials />} />
        <Route path="catalog" element={<CatalogProducts />} />
        <Route path="swipe" element={<SwipeProducts />} />
      </Route>

      {/* Рекламодатель */}
      <Route path="/advertiser" element={<Layout role="advertiser" />}>
        <Route index element={<AdvertiserDashboard />} />
        <Route path="reviews" element={<AdvertiserReviews />} />
        <Route path="products" element={<AdvertiserProducts />} />
        <Route path="catalog" element={<CatalogBloggers />} />
        <Route path="swipe" element={<SwipeBloggers />} />
      </Route>

      {/* Админ */}
      <Route path="/admin" element={<Layout role="admin" />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="campaigns" element={<AdminCampaigns />} />
        <Route path="analytics" element={<AdminAnalytics />} />
      </Route>

      {/* Редирект для неизвестных маршрутов */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;