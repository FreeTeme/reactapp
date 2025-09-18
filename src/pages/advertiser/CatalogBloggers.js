import React, { useState } from "react";

const mockBloggers = [
  { id: 1, name: "Анна Иванова", followers: 25000, engagement: 4.8, categories: ["Красота", "Уход"], price: 5000, status: "В работе" },
  { id: 2, name: "Петр Сидоров", followers: 45000, engagement: 3.2, categories: ["Техника", "Гаджеты"], price: 8000, status: "Ожидание" },
  { id: 3, name: "Мария Петрова", followers: 35000, engagement: 5.1, categories: ["Еда", "Рецепты"], price: 6000, status: "Все" },
  { id: 4, name: "Алексей Козлов", followers: 60000, engagement: 4.2, categories: ["Спорт", "Фитнес"], price: 10000, status: "В работе" }
];

export default function CatalogBloggers() {
  const [bloggers] = useState(mockBloggers);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [minFollowers, setMinFollowers] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [statusFilter, setStatusFilter] = useState("Все");
  const [showFilters, setShowFilters] = useState(false);

  const statuses = ["Все", "В работе", "Ожидание"];
  const allCategories = ["all", "Красота", "Уход", "Техника", "Гаджеты", "Еда", "Рецепты", "Спорт", "Фитнес"];

  const filteredBloggers = bloggers.filter(blogger => {
    const matchesSearch = blogger.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || blogger.categories.includes(categoryFilter);
    const matchesFollowers = blogger.followers >= minFollowers;
    const matchesPrice = blogger.price <= maxPrice;
    const matchesStatus = statusFilter === "Все" || blogger.status === statusFilter;
    return matchesSearch && matchesCategory && matchesFollowers && matchesPrice && matchesStatus;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setMinFollowers(0);
    setMaxPrice(100000);
    setStatusFilter("Все");
  };

  return (
    <div>
      <h1>Каталог блогеров</h1>
      <p>Найдите подходящих блогеров для вашей кампании</p>

      {/* Лента статусов */}
      <div className="status-bar">
        {statuses.map(st => (
          <div
            key={st}
            className={`status-item ${statusFilter === st ? "active" : ""}`}
            onClick={() => setStatusFilter(st)}
          >
            {st}
          </div>
        ))}
      </div>

      {/* Кнопка фильтров */}
      <button className="filters-btn" onClick={() => setShowFilters(!showFilters)}>
        Фильтры
      </button>

      {/* Блок фильтров */}
      {showFilters && (
        <div className="card filter-card">
          <div className="filter-header">
            <h3>Фильтры</h3>
            <button className="filter-close" onClick={() => setShowFilters(false)}>✕</button>
          </div>

          <label className="label">Поиск по имени</label>
          <input
            type="text"
            className="input"
            placeholder="Имя блогера..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <label className="label">Категория</label>
          <select
            className="input"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {allCategories.map(category => (
              <option key={category} value={category}>
                {category === "all" ? "Все категории" : category}
              </option>
            ))}
          </select>

          <label className="label">Мин. подписчиков: {minFollowers.toLocaleString()}</label>
          <input
            type="range"
            min="0"
            max="100000"
            step="5000"
            className="input"
            value={minFollowers}
            onChange={(e) => setMinFollowers(Number(e.target.value))}
          />

          <label className="label">Макс. цена: {maxPrice.toLocaleString()} ₽</label>
          <input
            type="range"
            min="0"
            max="50000"
            step="1000"
            className="input"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />

          <button className="btn reset-btn" onClick={resetFilters}>
            Сбросить фильтры
          </button>
        </div>
      )}

      {/* Сетка карточек */}
      <div className="card-grid">
        {filteredBloggers.map(blogger => (
          <div key={blogger.id} className="card">
            <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
              <div style={{
                width: "60px", height: "60px", borderRadius: "30px",
                backgroundColor: "#e5e7eb", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "20px", marginRight: "16px"
              }}>
                {blogger.name.charAt(0)}
              </div>
              <div>
                <h3>{blogger.name}</h3>
                <p>{blogger.followers.toLocaleString()} подписчиков</p>
              </div>
            </div>
            
            <p><strong>ER:</strong> {blogger.engagement}%</p>
            <p><strong>Цена:</strong> {blogger.price.toLocaleString()} ₽</p>
            <div>
              <strong>Категории:</strong>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                {blogger.categories.map((category, index) => (
                  <span key={index} style={{ 
                    backgroundColor: "#e5e7eb", 
                    padding: "4px 8px", 
                    borderRadius: "4px", 
                    fontSize: "12px" 
                  }}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <button className="btn btn-blue">Подробнее</button>
              <button className="btn btn-outline">Предложить сотрудничество</button>
            </div>
          </div>
        ))}
      </div>

      {filteredBloggers.length === 0 && (
        <div className="card empty-card">
          <h3>Блогеры не найдены</h3>
          <p>Попробуйте изменить параметры поиска</p>
        </div>
      )}
    </div>
  );
}
