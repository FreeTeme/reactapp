import React, { useState } from "react";

const mockProducts = [
  { id: 1, name: "Органическая косметика", brand: "Natural Beauty", budget: 50000, category: "Красота", deadline: "2023-05-15", status: "В работе" },
  { id: 2, name: "Фитнес-трекер", brand: "FitTech", budget: 30000, category: "Спорт", deadline: "2023-05-20", status: "Ожидание" },
  { id: 3, name: "Кофе в капсулах", brand: "CoffeeTime", budget: 40000, category: "Еда", deadline: "2023-05-10", status: "Все" },
  { id: 4, name: "Умная колонка", brand: "TechSound", budget: 60000, category: "Техника", deadline: "2023-05-25", status: "В работе" }
];

export default function CatalogProducts() {
  const [products] = useState(mockProducts);
  const [statusFilter, setStatusFilter] = useState("Все");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const statuses = ["Все", "В работе", "Ожидание"];
  const categories = ["all", "Красота", "Спорт", "Еда", "Техника"];

  const filteredProducts = products.filter(product => {
    const matchesStatus = statusFilter === "Все" || product.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  const resetFilters = () => {
    setStatusFilter("Все");
    setCategoryFilter("all");
  };

  return (
    <div>
      <h1>Каталог товаров</h1>
      <p>Выберите товары для вашей кампании</p>

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

          <label className="label">Категория</label>
          <select
            className="input"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map(c => (
              <option key={c} value={c}>
                {c === "all" ? "Все категории" : c}
              </option>
            ))}
          </select>

          <button className="btn reset-btn" onClick={resetFilters}>
            Сбросить фильтры
          </button>
        </div>
      )}

      {/* Сетка карточек */}
      <div className="card-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            {/* Верх карточки с иконкой */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
              <div style={{
                width: "60px", height: "60px", borderRadius: "12px",
                backgroundColor: "#e5e7eb", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "24px", fontWeight: "bold", marginRight: "16px"
              }}>
                {product.name.charAt(0)}
              </div>
              <div>
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
              </div>
            </div>

            {/* Основная информация */}
            <p><strong>Бюджет:</strong> {product.budget.toLocaleString()} ₽</p>
            <p><strong>Категория:</strong> {product.category}</p>
            <p><strong>Дедлайн:</strong> {product.deadline}</p>
            <p><strong>Статус:</strong> {product.status}</p>

            {/* Кнопки */}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <button className="btn btn-blue">Подробнее</button>
              <button className="btn btn-outline">Откликнуться</button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="card empty-card">
          <h3>Товары не найдены</h3>
          <p>Попробуйте изменить параметры поиска</p>
        </div>
      )}
    </div>
  );
}
