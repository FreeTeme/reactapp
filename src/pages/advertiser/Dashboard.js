import React from "react";
import { Link } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Органическая косметика", status: "Активна", budget: 50000, progress: 75 },
  { id: 2, name: "Фитнес-трекер", status: "Завершена", budget: 30000, progress: 100 }
];

const mockReviews = [
  { id: 1, author: "Екатерина", rating: 4, comment: "Хороший рекламодатель", date: "2023-04-12" },
  { id: 2, author: "Алексей", rating: 5, comment: "Отличное сотрудничество", date: "2023-04-08" }
];

export default function AdvertiserDashboard() {
  const averageRating = (mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length).toFixed(1);
  
  return (
    <div>
      <h1>Панель рекламодателя</h1>
      <p>Обзор ваших кампаний и статистика</p>

      {/* Аналитика аккаунта */}
      <div className="card-grid">
        <div className="card">
          <h3>Активные кампании</h3>
          <p>{mockProducts.filter(p => p.status === "Активна").length}</p>
        </div>
        <div className="card">
          <h3>Отклики блогеров</h3>
          <p>24</p>
        </div>
        <div className="card">
          <h3>Общий охват</h3>
          <p>125,000</p>
        </div>
        <div className="card">
          <h3>Средняя оценка</h3>
          <p>{averageRating} ⭐</p>
        </div>
      </div>

      {/* Краткий обзор товаров/кампаний */}
      <div style={{ marginTop: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2>Мои товары</h2>
          <Link to="/advertiser/products" className="btn btn-outline">
            Все товары
          </Link>
        </div>

        <div className="card-grid">
          {mockProducts.slice(0, 2).map(product => (
            <div key={product.id} className="card">
              <h3>{product.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0' }}>
                <span className={`status ${product.status.toLowerCase()}`}>
                  {product.status}
                </span>
                <span style={{ fontWeight: 'bold' }}>{product.budget.toLocaleString()} ₽</span>
              </div>
              
              <div style={{ margin: '10px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Прогресс:</span>
                  <span>{product.progress}%</span>
                </div>
                <div style={{ 
                  height: '8px', 
                  backgroundColor: '#e5e7eb', 
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${product.progress}%`, 
                    height: '100%', 
                    backgroundColor: product.progress === 100 ? '#10b981' : '#3b82f6',
                    borderRadius: '4px'
                  }}></div>
                </div>
              </div>
              
              <div style={{ marginTop: '16px' }}>
                <Link to="/advertiser/products" className="btn btn-outline" style={{ width: '100%' }}>
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>

        {mockProducts.length > 2 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/advertiser/products" style={{ color: '#6366f1', textDecoration: 'none' }}>
              Показать все {mockProducts.length} товара →
            </Link>
          </div>
        )}
      </div>

      {/* Краткий обзор отзывов */}
      <div style={{ marginTop: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2>Последние отзывы</h2>
          <Link to="/advertiser/reviews" className="btn btn-outline">
            Все отзывы
          </Link>
        </div>

        <div className="card-grid">
          {mockReviews.slice(0, 2).map(review => (
            <div key={review.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3>{review.author}</h3>
                <div>{'⭐'.repeat(review.rating)}</div>
              </div>
              <p style={{ 
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                margin: '10px 0'
              }}>
                {review.comment}
              </p>
              <p style={{ fontSize: '12px', color: '#6b7280' }}>{review.date}</p>
              <div style={{ marginTop: '16px' }}>
                <Link to="/advertiser/reviews" className="btn btn-outline" style={{ width: '100%' }}>
                  Все отзывы
                </Link>
              </div>
            </div>
          ))}
        </div>

        {mockReviews.length > 2 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/advertiser/reviews" style={{ color: '#6366f1', textDecoration: 'none' }}>
              Показать все {mockReviews.length} отзыва →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}