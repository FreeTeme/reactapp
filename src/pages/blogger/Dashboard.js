import React from "react";
import { Link } from "react-router-dom";

const mockSocials = [
  { id: 1, platform: "Instagram", followers: 15000, engagement: 4.5 },
  { id: 2, platform: "YouTube", followers: 8000, engagement: 3.8 }
];

const mockReviews = [
  { id: 1, author: "Анна", rating: 5, comment: "Отличный блогер!", date: "2023-04-15" },
  { id: 2, author: "Иван", rating: 4, comment: "Хороший контент", date: "2023-04-10" }
];

export default function BloggerDashboard() {
  const averageRating = (mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length).toFixed(1);
  
  return (
    <div>
      <h1>Панель блогера</h1>
      <p>Обзор вашей активности и статистика</p>

      {/* Аналитика аккаунта */}
      <div className="card-grid">
        <div className="card">
          <h3>Подписчики</h3>
          <p>{mockSocials.reduce((sum, social) => sum + social.followers, 0).toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Средний ER</h3>
          <p>{(mockSocials.reduce((sum, social) => sum + social.engagement, 0) / mockSocials.length).toFixed(1)}%</p>
        </div>
        <div className="card">
          <h3>Показы карточки</h3>
          <p>1,245</p>
        </div>
        <div className="card">
          <h3>Средняя оценка</h3>
          <p>{averageRating} ⭐</p>
        </div>
      </div>

      {/* Краткий обзор соцсетей */}
      <div style={{ marginTop: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2>Социальные сети</h2>
          <Link to="/blogger/socials" className="btn btn-outline">
            Все соцсети
          </Link>
        </div>

        <div className="card-grid">
          {mockSocials.slice(0, 2).map(social => (
            <div key={social.id} className="card">
              <h3>{social.platform}</h3>
              <p>Подписчики: {social.followers.toLocaleString()}</p>
              <p>ER: {social.engagement}%</p>
              <div style={{ marginTop: '16px' }}>
                <Link to="/blogger/socials" className="btn btn-outline" style={{ width: '100%' }}>
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>

        {mockSocials.length > 2 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/blogger/socials" style={{ color: '#6366f1', textDecoration: 'none' }}>
              Показать все {mockSocials.length} соцсети →
            </Link>
          </div>
        )}
      </div>

      {/* Краткий обзор отзывов */}
      <div style={{ marginTop: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2>Последние отзывы</h2>
          <Link to="/blogger/reviews" className="btn btn-outline">
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
                <Link to="/blogger/reviews" className="btn btn-outline" style={{ width: '100%' }}>
                  Все отзывы
                </Link>
              </div>
            </div>
          ))}
        </div>

        {mockReviews.length > 2 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/blogger/reviews" style={{ color: '#6366f1', textDecoration: 'none' }}>
              Показать все {mockReviews.length} отзыва →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}