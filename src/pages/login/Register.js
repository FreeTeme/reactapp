import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../styles.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "blogger"
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      console.log('Отправка запроса на регистрацию:', formData);
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      console.log('Ответ сервера:', res.status, res.statusText);
      const data = await res.json();
      console.log('Данные:', data);
      if (!res.ok) {
        throw new Error(data.error || `Ошибка ${res.status}: ${res.statusText}`);
      }
      alert('Регистрация успешна! Пожалуйста, войдите.');
      navigate('/login');
    } catch (err) {
      console.error('Ошибка регистрации:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container auth-container">
      <h1>Регистрация</h1>
      <p>Создайте аккаунт, чтобы начать работу</p>
      {error && (
        <div className="error-modal">
          <div className="modal-content">
            <h3>Ошибка</h3>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={() => setError(null)}>Закрыть</button>
          </div>
        </div>
      )}
      {loading && <div className="loader">Загрузка...</div>}
      <form onSubmit={handleRegister} className="auth-form">
        <div className="form-group">
          <label className="label">Имя пользователя</label>
          <input
            className="input"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Пароль</label>
          <input
            type="password"
            className="input"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Роль</label>
          <select
            className="input"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="blogger">Блогер</option>
            <option value="advertiser">Рекламодатель</option>
            <option value="admin">Админ</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Зарегистрироваться
        </button>
      </form>
      <p className="auth-link">
        Уже есть аккаунт? <a href="/login">Войти</a>
      </p>
    </div>
  );
}

export default Register;