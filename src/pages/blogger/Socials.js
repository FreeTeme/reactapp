import React, { useState } from "react";

const initialSocials = [
  { id: 1, platform: "Instagram", followers: 15000, engagement: 4.5, price: 5000, category: "Красота", link: "https://instagram.com" }
];

export default function BloggerSocials() {
  const [socials, setSocials] = useState(initialSocials);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    platform: "",
    followers: "",
    engagement: "",
    price: "",
    category: "",
    link: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSocial = { id: Date.now(), ...formData };
    setSocials([...socials, newSocial]);
    setFormData({ platform: "", followers: "", engagement: "", price: "", category: "", link: "" });
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setSocials(socials.filter(social => social.id !== id));
  };

  return (
    <div>
      <h1>Социальные сети</h1>
      <p>Управление вашими социальными сетями и аналитика</p>

      <div className="card-grid">
        <div className="card">
          <h3>Показы карточки</h3>
          <p>1,245 просмотров</p>
        </div>
        <div className="card">
          <h3>Добавления в кампании</h3>
          <p>47 раз</p>
        </div>
      </div>

      <div style={{ marginTop: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2>Мои социальные сети</h2>
          <button className="btn btn-primary" onClick={() => setIsAdding(true)}>
            Добавить соцсеть
          </button>
        </div>

        {isAdding && (
          <div className="card" style={{ marginBottom: '20px' }}>
            <h3>Добавить новую соцсеть</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="label">Платформа</label>
                  <input
                    className="input"
                    value={formData.platform}
                    onChange={(e) => setFormData({...formData, platform: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="label">Подписчики</label>
                  <input
                    type="number"
                    className="input"
                    value={formData.followers}
                    onChange={(e) => setFormData({...formData, followers: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="label">ER (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="input"
                    value={formData.engagement}
                    onChange={(e) => setFormData({...formData, engagement: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="label">Цена (₽)</label>
                  <input
                    type="number"
                    className="input"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="label">Категория</label>
                  <input
                    className="input"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="label">Ссылка</label>
                  <input
                    type="url"
                    className="input"
                    value={formData.link}
                    onChange={(e) => setFormData({...formData, link: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                <button type="submit" className="btn btn-primary">Сохранить</button>
                <button type="button" className="btn btn-outline" onClick={() => setIsAdding(false)}>Отмена</button>
              </div>
            </form>
          </div>
        )}

        <div className="card-grid">
          {socials.map(social => (
            <div key={social.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{social.platform}</h3>
                <button 
                  className="btn btn-outline"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                  onClick={() => handleDelete(social.id)}
                >
                  Удалить
                </button>
              </div>
              <p>Подписчики: {social.followers.toLocaleString()}</p>
              <p>ER: {social.engagement}%</p>
              <p>Цена: {social.price.toLocaleString()} ₽</p>
              <p>Категория: {social.category}</p>
              <a href={social.link} target="_blank" rel="noopener noreferrer">Перейти</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}