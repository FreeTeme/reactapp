import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../styles.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      console.log('Отправка запроса на авторизацию:', formData);
      const res = await fetch('/api/login', {
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
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('role', data.role);
      navigate(`/${data.role}`);
    } catch (err) {
      console.error('Ошибка авторизации:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoMode = () => {
    console.log('Вход в демо-режим');
    localStorage.setItem('userId', '1');
    localStorage.setItem('role', 'blogger');
    navigate('/blogger');
  };

  return (
    <div className="container auth-container">
      <h1>Вход</h1>
      <p>Войдите в свой аккаунт или попробуйте демо-режим</p>
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
      <form onSubmit={handleLogin} className="auth-form">
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
          <label className="label">Пароль</label>
          <input
            type="password"
            className="input"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Войти
          </button>
          <button type="button" className="btn btn-outline" onClick={handleDemoMode}>
            Демо-режим
          </button>
        </div>
      </form>
      <p className="auth-link">
        Нет аккаунта? <a href="/register">Зарегистрироваться</a>
      </p>
    </div>
  );
}

export default Login;