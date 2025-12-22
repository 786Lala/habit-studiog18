
import React, { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

function HabitCard({ habit, value, onChange, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setShowConfirm(true);
  };
  const handleConfirm = () => {
    setShowConfirm(false);
    onDelete && onDelete(habit.id);
  };
  const handleCancel = () => setShowConfirm(false);
  return (
    <div className={`habit-card-grid-item${value ? ' completed' : ''}`}> 
      <div className="habit-card" style={{ borderLeft: `6px solid ${habit.color || '#aee9e1'}` }}>
        <button
          className={`habit-check-btn${value ? ' checked' : ''}`}
          onClick={() => onChange(!value)}
          aria-label={value ? 'Mark as incomplete' : 'Mark as complete'}
        >
          <span className="habit-check-circle">
            {value ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10" fill={habit.color || '#aee9e1'} stroke="#b5b5b5" strokeWidth="1.5" />
                <path d="M6.5 11.5L10 15L16 8.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10" fill="#fff" stroke="#b5b5b5" strokeWidth="1.5" />
              </svg>
            )}
          </span>
        </button>
        <div className="habit-card-content">
          <h3 className={`habit-card-title${value ? ' strikethrough' : ''}`}>{habit.name}</h3>
          <div className="habit-card-category" style={{ color: habit.color ? habit.color : '#7FDBFF', opacity: 0.95 }}>{habit.category || 'Uncategorized'}</div>
        </div>
        <button
          className="delete-habit-btn"
          title={`Delete habit '${habit.name}'`}
          onClick={handleDeleteClick}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8.5" fill="#f8fafc" stroke="#e57373" strokeWidth="1.5" />
            <path d="M7 7L13 13M13 7L7 13" stroke="#e57373" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
        <ConfirmDialog
          open={showConfirm}
          title="Delete Habit"
          message={`Are you sure you want to delete this habit? This cannot be undone.`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      <style jsx>{`
                .delete-habit-btn {
                  background: none;
                  border: none;
                  outline: none;
                  cursor: pointer;
                  margin-left: auto;
                  padding: 0.15rem 0.3rem;
                  display: flex;
                  align-items: center;
                  border-radius: 6px;
                  transition: background 0.15s;
                  position: absolute;
                  right: 0.5rem;
                  top: 0.7rem;
                }
                .delete-habit-btn:hover {
                  background: #ffeaea;
                }
        .habit-card-grid-item {
          transition: box-shadow 0.2s;
        }
        .habit-card {
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #fefefe 0%, #f8fafc 100%);
          border-radius: 14px;
          padding: 1.2rem 1.4rem;
          box-shadow: 0 2px 8px 0 rgba(100, 120, 160, 0.08), 0 1px 3px 0 rgba(100, 120, 160, 0.04);
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .habit-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(100, 120, 160, 0.12), 0 2px 6px 0 rgba(100, 120, 160, 0.06);
        }
        .habit-check-btn {
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          margin-right: 1.1rem;
          padding: 0;
          display: flex;
          align-items: center;
          transition: transform 0.1s;
        }
        .habit-check-btn:active {
          transform: scale(0.95);
        }
        .habit-check-circle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .habit-card-title {
          font-size: 0.95rem;
          font-weight: 500;
          color: #22223b;
          margin: 0 0 0.2rem 0;
          transition: color 0.2s;
        }
        .habit-card-title.strikethrough {
          /* No strikethrough, handled by blur on parent */
        }
        .habit-card-category {
          font-size: 0.82rem;
          font-weight: 900;
          opacity: 1;
          letter-spacing: 0.01em;
        }
        .habit-card-grid-item.completed .habit-card {
          background: #e6f7f1;
          filter: blur(1.7px) brightness(0.97);
        }
        .habit-card-grid-item.completed .habit-check-btn {
          filter: none;
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
}

export default function HabitList({ habits, getValue, setValue, onDeleteCategory, onDeleteHabit }) {
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  if (!habits || habits.length === 0) {
    return (
      <section className="todays-habits-section">
        <div className="empty-habits-block-center">
          <div className="empty-habits-block">
            <h2 className="empty-habits-title">No habits yet</h2>
            <p className="empty-habits-desc">Start your journey by creating your first habit.</p>
          </div>
        </div>
        <style jsx>{`
          .empty-habits-block-center {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0 0 2.5rem 0;
            position: relative;
          }
          .empty-habits-block {
            margin-left: auto;
            margin-right: auto;
          }
          @media (min-width: 700px) {
            .todays-habits-section {
              padding-left: 0 !important;
              margin-left: 0 !important;
            }
          }
          .empty-habits-block {
            background: #f8fafc;
            border-radius: 16px;
            box-shadow: 0 4px 24px 0 rgba(160, 180, 200, 0.10);
            border: 2px solid #d6dfff;
            padding: 2.2rem 1.5rem 2rem 1.5rem;
            max-width: 420px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .empty-habits-title {
            font-size: 1.35rem;
            font-weight: 800;
            color: #22223b;
            margin-bottom: 0.7rem;
            letter-spacing: -0.01em;
          }
          .empty-habits-desc {
            font-size: 1.05rem;
            color: #6c7a89;
            margin-bottom: 0;
          }
        `}</style>
      </section>
    );
  }

  // Group habits by category
  const habitsByCategory = habits.reduce((acc, habit) => {
    const cat = habit.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(habit);
    return acc;
  }, {});

  const handleCategoryDeleteClick = (category) => {
    setCategoryToDelete(category);
  };
  const handleCategoryConfirm = () => {
    if (categoryToDelete && onDeleteCategory) {
      onDeleteCategory(categoryToDelete);
    }
    setCategoryToDelete(null);
  };
  const handleCategoryCancel = () => setCategoryToDelete(null);

  return (
    <section className="todays-habits-section">
      <div className="todays-habits-list">
        {Object.entries(habitsByCategory).map(([category, categoryHabits]) => {
          const color = categoryHabits[0]?.color || '#aee9e1';
          return (
            <div key={category} className="todays-habits-category-block">
              <div className="todays-habits-category-header">
                <span className="todays-habits-category-label" style={{ color }}>{category}</span>
                <button
                  className="delete-category-btn"
                  title={`Delete category '${category}'`}
                  onClick={() => handleCategoryDeleteClick(category)}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" fill="#f8fafc" stroke="#e57373" strokeWidth="1.5" />
                    <path d="M7 7L13 13M13 7L7 13" stroke="#e57373" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="todays-habits-grid">
                {categoryHabits.map((habit, idx) => (
                  <HabitCard
                    key={habit.id}
                    habit={habit}
                    value={getValue(habit.id)}
                    onChange={v => setValue(habit.id, v)}
                    onDelete={onDeleteHabit}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <ConfirmDialog
        open={!!categoryToDelete}
        title="Delete Category"
        message={`Are you sure you want to delete this category and all its habits? This cannot be undone.`}
        onConfirm={handleCategoryConfirm}
        onCancel={handleCategoryCancel}
      />
      <style jsx>{`
                .delete-category-btn {
                  background: none;
                  border: none;
                  outline: none;
                  cursor: pointer;
                  margin-left: auto;
                  padding: 0.2rem 0.4rem;
                  display: flex;
                  align-items: center;
                  border-radius: 6px;
                  transition: background 0.15s;
                }
                .delete-category-btn:hover {
                  background: #ffeaea;
                }
        .todays-habits-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f0f4ff 100%);
          border-radius: 20px;
          box-shadow: 0 8px 32px 0 rgba(100, 120, 160, 0.12), 0 2px 8px 0 rgba(100, 120, 160, 0.06);
          border: 1px solid rgba(200, 210, 230, 0.6);
          padding: 2.5rem 2.5rem 2rem 2.5rem;
          margin: 0 auto 2.5rem auto;
          max-width: 900px;
          width: 100%;
        }
        .todays-habits-title {
          font-size: 2.1rem;
          font-weight: 800;
          color: #22223b;
          margin-bottom: 1.7rem;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .todays-habits-list {
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }
        .todays-habits-category-block {
          background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);
          border-radius: 16px;
          box-shadow: 0 4px 16px 0 rgba(100, 120, 160, 0.08), 0 1px 4px 0 rgba(100, 120, 160, 0.04);
          padding: 1.4rem 1.4rem 1.6rem 1.4rem;
          border: 1px solid rgba(220, 225, 240, 0.5);
          transition: box-shadow 0.2s ease;
        }
        .todays-habits-category-block:hover {
          box-shadow: 0 6px 24px 0 rgba(100, 120, 160, 0.12), 0 2px 6px 0 rgba(100, 120, 160, 0.06);
        }
        .todays-habits-category-header {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 1.1rem;
        }
        .todays-habits-category-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.3rem;
        }
        .todays-habits-category-label {
          font-size: 1.15rem;
          font-weight: 900;
          opacity: 0.92;
          letter-spacing: 0.01em;
        }
        .todays-habits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem 1.5rem;
        }
        @media (max-width: 700px) {
          .todays-habits-section {
            padding: 1.2rem 0.5rem 1.2rem 0.5rem;
          }
          .todays-habits-title {
            font-size: 1.3rem;
          }
          .todays-habits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
