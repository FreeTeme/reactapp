import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleStartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRoleSelect = (role) => {
    navigate(`/${role}`);
    setShowModal(false);
  };

  return (
    <div className="landing-page">
      {/* Стили */}
      <style>{`
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          margin: 0; 
          padding: 0; 
          background: #fff; 
        }
        .landing-page { max-width: 1200px; margin: 0 auto; padding: 16px; }

        /* Навигация */
        .navbar { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 12px 16px; 
          background: #fff; 
          border-bottom: 1px solid #e5e7eb; 
          border-radius: 8px; 
        }
        .nav-brand { 
          font-size: 24px; 
          font-weight: 700; 
          color: #6366f1; 
        }
        .nav-menu { 
          display: flex; 
          gap: 12px; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
        }
        .nav-menu a { 
          text-decoration: none; 
          color: #1f2937; 
          font-size: 14px; 
          padding: 6px 10px; 
          border-radius: 6px; 
        }
        .nav-menu a:hover { 
          background: #e5e7eb; 
        }

        /* Секции */
        .section { 
          padding: 32px 16px; 
          margin: 16px 0; 
          background: #f9fafb; 
          border-radius: 8px; 
        }
        .section h2 { 
          font-size: 24px; 
          text-align: center; 
          margin-bottom: 16px; 
          color: #1f2937; 
        }
        .hero { 
          text-align: center; 
          padding: 48px 16px; 
          background: #f3f4f6; 
          border-radius: 8px; 
        }
        .hero h1 { 
          font-size: 32px; 
          font-weight: 700; 
          color: #1f2937; 
          margin-bottom: 12px; 
        }
        .hero p { 
          font-size: 16px; 
          max-width: 600px; 
          margin: 0 auto 16px; 
          color: #4b5563; 
        }
        .card-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); 
          gap: 12px; 
        }
        .card { 
          background: #fff; 
          padding: 16px; 
          border-radius: 8px; 
          border: 1px solid #e5e7eb; 
        }
        .card h3 { 
          font-size: 18px; 
          margin-bottom: 8px; 
          color: #1f2937; 
        }
        .card p { 
          font-size: 14px; 
          color: #4b5563; 
        }
        .card a { 
          color: #6366f1; 
          text-decoration: none; 
          font-size: 14px; 
        }
        .card a:hover { 
          text-decoration: underline; 
        }

        /* Кнопки */
        .btn { 
          padding: 10px 20px; 
          border: none; 
          border-radius: 6px; 
          cursor: pointer; 
          font-size: 14px; 
          font-weight: 500; 
        }
        .btn-primary { 
          background: #6366f1; 
          color: white; 
        }
        .btn-primary:hover { 
          background: #4f46e5; 
        }
        .btn-outline { 
          background: transparent; 
          border: 1px solid #6366f1; 
          color: #6366f1; 
        }
        .btn-outline:hover { 
          background: #6366f1; 
          color: white; 
        }

        /* Футер */
        footer { 
          padding: 24px 16px; 
          background: #1f2937; 
          color: #e5e7eb; 
          border-radius: 8px; 
          text-align: center; 
          margin-top: 16px; 
        }
        .footer-nav { 
          display: flex; 
          justify-content: center; 
          gap: 12px; 
          margin-bottom: 12px; 
          flex-wrap: wrap; 
        }
        .footer-nav a { 
          color: #e5e7eb; 
          text-decoration: none; 
          font-size: 14px; 
        }
        .footer-nav a:hover { 
          color: #a5b4fc; 
        }
        .social-links { 
          display: flex; 
          justify-content: center; 
          gap: 12px; 
          margin-bottom: 12px; 
        }
        .social-links a { 
          color: #e5e7eb; 
          font-size: 14px; 
          text-decoration: none; 
        }
        .social-links a:hover { 
          color: #a5b4fc; 
        }

        /* Модалка */
        .modal-overlay { 
          position: fixed; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          background: rgba(0,0,0,0.5); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          z-index: 1000; 
        }
        .modal-content { 
          background: #fff; 
          padding: 24px; 
          border-radius: 8px; 
          text-align: center; 
          max-width: 320px; 
          width: 90%; 
          border: 1px solid #e5e7eb; 
        }
        .modal-content h2 { 
          font-size: 20px; 
          margin-bottom: 16px; 
          color: #1f2937; 
        }
        .role-buttons { 
          display: flex; 
          flex-direction: column; 
          gap: 8px; 
          margin-bottom: 16px; 
        }
        .role-buttons button { 
          width: 100%; 
          padding: 12px; 
        }

        /* Адаптивность */
        @media (max-width: 768px) {
          .navbar { flex-direction: column; gap: 8px; padding: 8px; }
          .nav-menu { flex-direction: column; align-items: center; gap: 6px; }
          .nav-menu a { font-size: 13px; padding: 5px 8px; }
          .hero { padding: 32px 12px; }
          .hero h1 { font-size: 24px; }
          .hero p { font-size: 14px; }
          .section { padding: 24px 12px; }
          .section h2 { font-size: 20px; }
          .card-grid { grid-template-columns: 1fr; }
          .card h3 { font-size: 16px; }
          .card p, .card a { font-size: 13px; }
          .btn { padding: 8px 16px; font-size: 13px; }
          .modal-content { padding: 16px; max-width: 280px; }
        }
        @media (max-width: 480px) {
          .hero h1 { font-size: 20px; }
          .hero p { font-size: 13px; }
          .section h2 { font-size: 18px; }
          .card h3 { font-size: 14px; }
          .btn { padding: 6px 12px; font-size: 12px; }
          .modal-content h2 { font-size: 18px; }
        }
      `}</style>

      {/* Навигация */}
      <nav className="navbar">
        <div className="nav-brand">MOST</div>
        <ul className="nav-menu">
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#how">Как это работает</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#blog">Блог</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
        <button className="btn btn-primary" onClick={handleStartClick}>Начать</button>
      </nav>

      {/* Главный баннер */}
      <section id="home" className="hero">
        <h1>Соединяем бренды и сердца</h1>
        <p>MOST — платформа для брендов и креаторов. Прозрачные условия, точная аналитика, честные сделки.</p>
        <div className="card-grid">
          <div className="card">Точный подбор</div>
          <div className="card">Анализ контента</div>
          <div className="card">Прогноз результатов</div>
        </div>
      </section>

      {/* Адаптивность */}
      <section className="section adaptivity">
        <h2>Адаптивность</h2>
        <p>Индивидуальные решения для вашего бизнеса. MOST подберет инфлюенсеров для любых проектов.</p>
      </section>

      {/* О MOST */}
      <section id="about" className="section about">
        <h2>О MOST</h2>
        <p>Интеллектуальная платформа для поиска микроблогеров с ИИ. Экономия 80% времени, рост эффективности на 60%.</p>
        <button className="btn btn-primary">Узнать больше</button>
      </section>

      {/* Как это работает */}
      <section id="how" className="section how-it-works">
        <h2>Как это работает</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Найдите</h3>
            <p>Смотрите профили, UGC, цены и сроки.</p>
          </div>
          <div className="card">
            <h3>Согласуйте</h3>
            <p>Выберите бриф, подтвердите концепт.</p>
          </div>
          <div className="card">
            <h3>Запустите</h3>
            <p>Оплата через эскроу, получите контент.</p>
          </div>
        </div>
      </section>

      {/* Стратегия */}
      <section className="section strategy">
        <h2>Эффективная стратегия</h2>
        <div className="card-grid">
          <div className="card">Тестовые кампании или полное решение.</div>
          <div className="card">Интеграция с вашим CRM.</div>
          <div className="card">ИИ-аналитика и прогнозы.</div>
        </div>
      </section>

      {/* Результаты */}
      <section className="section results">
        <h2>Результаты клиентов</h2>
        <div className="card-grid">
          <div className="card">−80% времени на поиск</div>
          <div className="card">+45% ROI кампаний</div>
          <div className="card">+60% эффективности</div>
        </div>
      </section>

      {/* Блог */}
      <section id="blog" className="section blog-teasers">
        <h2>Экспертные материалы</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Запуск с микроблогерами</h3>
            <p>Инструкция по целям и форматам.</p>
            <a href="#">Читать →</a>
          </div>
          <div className="card">
            <h3>Как составить бриф</h3>
            <p>Шаблон и советы по коммуникации.</p>
            <a href="#">Читать →</a>
          </div>
          <div className="card">
            <h3>Ошибки и практики</h3>
            <p>7 ошибок и лучшие решения.</p>
            <a href="#">Читать →</a>
          </div>
        </div>
      </section>

      {/* Демодоступ */}
      <section className="section demo">
        <h2>Демо-доступ</h2>
        <button className="btn btn-primary" onClick={handleStartClick}>Получить</button>
      </section>

      {/* Футер */}
      <footer>
        <nav className="footer-nav">
          <a href="#about">О нас</a>
          <a href="#how">Как это работает</a>
          <a href="#blog">Блог</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="social-links">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
        <p>&copy; 2025 MOST</p>
      </footer>

      {/* Модалка */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Выберите роль</h2>
            <div className="role-buttons">
              <button className="btn btn-primary" onClick={() => handleRoleSelect('blogger')}>
                Блогер
              </button>
              <button className="btn btn-primary" onClick={() => handleRoleSelect('advertiser')}>
                Рекламодатель
              </button>
              {/* <button className="btn btn-primary" onClick={() => handleRoleSelect('admin')}>
                Админ
              </button> */}
            </div>
            <button className="btn btn-outline" onClick={handleCloseModal}>Отмена</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;