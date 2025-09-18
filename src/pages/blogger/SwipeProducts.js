import React, { useState } from "react";

const mockProducts = [
  { id: 1, name: "Органическая косметика", brand: "Natural Beauty", budget: 50000, category: "Красота" },
  { id: 2, name: "Фитнес-трекер", brand: "FitTech", budget: 30000, category: "Спорт" },
  { id: 3, name: "Кофе в капсулах", brand: "CoffeeTime", budget: 40000, category: "Еда" },
  { id: 4, name: "Умная колонка", brand: "TechSound", budget: 60000, category: "Техника" }
];

export default function SwipeProducts() {
  const [products, setProducts] = useState(mockProducts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedProducts, setSwipedProducts] = useState([]);

  const currentProduct = products[currentIndex];

  const handleSwipe = (direction) => {
    // Добавляем продукт в список с учетом направления свайпа
    setSwipedProducts([...swipedProducts, { ...currentProduct, direction }]);
    
    // Переходим к следующему продукту
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Все продукты просмотрены
      setCurrentIndex(-1);
    }
  };

  const resetSwipes = () => {
    setCurrentIndex(0);
    setSwipedProducts([]);
  };

  if (currentIndex === -1) {
    return (
      <div>
        <h1>Свайп товаров</h1>
        <p>Вы просмотрели все товары</p>
        
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <h3>Результаты</h3>
          <p>Лайков: {swipedProducts.filter(p => p.direction === 'right').length}</p>
          <p>Дизлайков: {swipedProducts.filter(p => p.direction === 'left').length}</p>
          <button className="btn btn-primary" onClick={resetSwipes} style={{ marginTop: '20px' }}>
            Начать заново
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Свайп товаров</h1>
      <p>Свайпайте вправо для интересных предложений, влево - чтобы пропустить</p>

      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="card" style={{ position: 'relative', height: '500px' }}>
          <div style={{ padding: '20px' }}>
            <h2>{currentProduct.name}</h2>
            <p><strong>Бренд:</strong> {currentProduct.brand}</p>
            <p><strong>Бюджет:</strong> {currentProduct.budget.toLocaleString()} ₽</p>
            <p><strong>Категория:</strong> {currentProduct.category}</p>
          </div>
          
          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
            left: '0', 
            right: '0', 
            display: 'flex', 
            justifyContent: 'space-around' 
          }}>
            <button 
              className="btn btn-outline" 
              style={{ fontSize: '24px', width: '60px', height: '60px', borderRadius: '30px' }}
              onClick={() => handleSwipe('left')}
            >
              ✕
            </button>
            <button 
              className="btn btn-primary" 
              style={{ fontSize: '24px', width: '60px', height: '60px', borderRadius: '30px' }}
              onClick={() => handleSwipe('right')}
            >
              ♥
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <p>Осталось товаров: {products.length - currentIndex - 1}</p>
        </div>
      </div>
    </div>
  );
}