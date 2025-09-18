import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelectorModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/${role}`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Выберите вашу роль</h2>
        <div className="role-buttons">
          <button className="btn btn-primary" onClick={() => handleRoleSelect('blogger')}>
            Блогер
          </button>
          <button className="btn btn-primary" onClick={() => handleRoleSelect('advertiser')}>
            Рекламодатель
          </button>
          <button className="btn btn-primary" onClick={() => handleRoleSelect('admin')}>
            Админ
          </button>
        </div>
        <button className="btn btn-outline" onClick={onClose}>Отмена</button>
      </div>
    </div>
  );
};

export default RoleSelectorModal;