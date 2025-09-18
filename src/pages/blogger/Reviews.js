import React, { useState } from "react";

const mockReviews = [
  { id: 1, author: "Анна", rating: 5, comment: "Отличный блогер!", date: "2023-04-15" },
  { id: 2, author: "Иван", rating: 4, comment: "Хороший контент", date: "2023-04-10" },
  { id: 3, author: "Мария", rating: 3, comment: "Неплохо, но можно лучше", date: "2023-04-05" }
];

export default function BloggerReviews() {
  const [filter, setFilter] = useState(0);
  const averageRating = (mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length).toFixed(1);
  
  const ratingDistribution = [0, 0, 0, 0, 0];
  mockReviews.forEach(review => ratingDistribution[review.rating - 1]++);

  const filteredReviews = filter > 0 
    ? mockReviews.filter(review => review.rating === filter)
    : mockReviews;

  return (
    <div>
      <h1>Отзывы</h1>
      <p>Аналитика и управление отзывами</p>

      <div className="card-grid">
        <div className="card">
          <h3>Средний рейтинг</h3>
          <p>{averageRating} ⭐</p>
        </div>
        {ratingDistribution.map((count, index) => (
          <div key={index} className="card">
            <h3>{index + 1} ⭐</h3>
            <p>{count} отзывов</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '32px' }}>
        <h2>Все отзывы</h2>
        <select 
          className="input"
          value={filter} 
          onChange={(e) => setFilter(Number(e.target.value))}
          style={{ width: '200px', marginBottom: '16px' }}
        >
          <option value={0}>Все оценки</option>
          <option value={5}>5 звезд</option>
          <option value={4}>4 звезды</option>
          <option value={3}>3 звезды</option>
          <option value={2}>2 звезды</option>
          <option value={1}>1 звезда</option>
        </select>

        <table className="table">
          <thead>
            <tr>
              <th>Автор</th>
              <th>Оценка</th>
              <th>Комментарий</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.map(review => (
              <tr key={review.id}>
                <td>{review.author}</td>
                <td>{'⭐'.repeat(review.rating)}</td>
                <td>{review.comment}</td>
                <td>{review.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}