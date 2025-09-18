import React, { useState } from "react";

const mockCampaigns = [
  { id: 1, name: "Запуск нового продукта", status: "active", responses: 12, views: 245 },
  { id: 2, name: "Продвижение бренда", status: "completed", responses: 8, views: 180 },
  { id: 3, name: "Сезонная акция", status: "draft", responses: 0, views: 45 }
];

const mockBloggers = [
  { id: 1, name: "Анна", platform: "Instagram", followers: "25K" },
  { id: 2, name: "Иван", platform: "YouTube", followers: "50K" }
];

export default function AdvertiserProducts() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    budget: ""
  });

  const handleCreateCampaign = (e) => {
    e.preventDefault();
    const newCampaign = {
      id: Date.now(),
      name: formData.name,
      status: "draft",
      responses: 0,
      views: 0
    };
    setCampaigns([...campaigns, newCampaign]);
    setFormData({ name: "", description: "", budget: "" });
    setIsCreating(false);
  };

  const getStatusLabel = (status) => {
    const labels = {
      active: "Активна",
      completed: "Завершена",
      draft: "Черновик"
    };
    return labels[status] || status;
  };

  return (
    <div>
      <h1>Кампании</h1>
      <p>Управление рекламными кампаниями и заявками</p>

      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2>Мои кампании</h2>
          <button className="btn btn-primary" onClick={() => setIsCreating(true)}>
            Создать кампанию
          </button>
        </div>

        {isCreating && (
          <div className="card" style={{ marginBottom: '20px' }}>
            <h3>Создание новой кампании</h3>
            <form onSubmit={handleCreateCampaign}>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <label className="label">Название кампании</label>
                  <input
                    className="input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="label">Описание</label>
                  <textarea
                    className="input"
                    rows="3"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
                <div>
                  <label className="label">Бюджет (₽)</label>
                  <input
                    type="number"
                    className="input"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                <button type="submit" className="btn btn-primary">Создать</button>
                <button type="button" className="btn btn-outline" onClick={() => setIsCreating(false)}>Отмена</button>
              </div>
            </form>
          </div>
        )}

        <div className="card-grid">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="card">
              <h3>{campaign.name}</h3>
              <p>Статус: {getStatusLabel(campaign.status)}</p>
              <p>Отклики: {campaign.responses}</p>
              <p>Просмотры: {campaign.views}</p>
              <button 
                className="btn btn-outline"
                style={{ marginTop: '10px' }}
                onClick={() => setSelectedCampaign(campaign)}
              >
                Посмотреть отклики
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedCampaign && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2>Отклики на кампанию: {selectedCampaign.name}</h2>
            <button className="btn btn-outline" onClick={() => setSelectedCampaign(null)}>Закрыть</button>
          </div>
          
          <table className="table">
            <thead>
              <tr>
                <th>Блогер</th>
                <th>Платформа</th>
                <th>Подписчики</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {mockBloggers.map(blogger => (
                <tr key={blogger.id}>
                  <td>{blogger.name}</td>
                  <td>{blogger.platform}</td>
                  <td>{blogger.followers}</td>
                  <td>
                    <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      Написать
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}