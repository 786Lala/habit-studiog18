import React, { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

export default function TodaysHabits({ habits = [], logs = {}, onToggle, onDeleteHabit, onDeleteCategory }) {
  const [deleteTarget, setDeleteTarget] = useState(null); // { type: 'habit'|'category', id: string }
  const today = new Date().toISOString().slice(0, 10);
  const grouped = habits.reduce((acc, habit) => {
    const cat = habit.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = { color: habit.color, habits: [] };
    acc[cat].color = habit.color || acc[cat].color;
    acc[cat].habits.push(habit);
    return acc;
  }, {});

  return (
    <div style={{
      background: 'transparent',
      padding: '0.5rem 0.7rem 0.8rem 0.7rem',
      marginBottom: '1.3rem',
      maxWidth: 820,
      width: '100%',
      fontFamily: 'Inter, Arial, sans-serif',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{
          color: '#6366f1',
          fontWeight: 800,
          fontSize: '2.1rem',
          margin: '0.5rem 0 1.5rem 0',
          letterSpacing: '-0.01em',
          textAlign: 'center',
        }}>Today's Habits</h2>
      </div>
      {habits.length !== 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {Object.entries(grouped).map(([category, catObj]) => (
            <div key={category} style={{ marginBottom: '0.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.3rem', gap: '0.4rem' }}>
                <div style={{ width: 6, height: 18, borderRadius: 3, background: catObj.color || '#6366f1', marginRight: 6 }} />
                <span style={{ fontWeight: 700, fontSize: '0.98rem', color: catObj.color || '#6366f1', fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '-0.01em', textShadow: '0 1px 3px #e0e7ff', minWidth: 120, display: 'inline-block' }}>{category}</span>
                <div style={{ flex: 1 }} />
                <button
                  title={`Delete category '${category}'`}
                  onClick={() => setDeleteTarget({ type: 'category', id: category })}
                  style={{
                    background: 'none',
                    border: 'none',
                    marginLeft: 8,
                    cursor: 'pointer',
                    borderRadius: 6,
                    padding: '0.1rem 0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'background 0.15s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = '#ffeaea')}
                  onMouseOut={e => (e.currentTarget.style.background = 'none')}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8.5" fill="#f8fafc" stroke="#e57373" strokeWidth="1.5" />
                    <path d="M7 7L13 13M13 7L7 13" stroke="#e57373" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.8rem',
                }}
              >
                {catObj.habits.map(habit => {
                  const checked = logs[today]?.[habit.id] === true;
                  return (
                    <label
                      key={habit.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: checked ? 'rgba(99, 102, 241, 0.15)' : (habit.color || '#e0e7ff'),
                        borderRadius: 22,
                        padding: '0.55rem 0.9rem 0.55rem 0.7rem',
                        boxShadow: checked ? '0 2px 10px 0 #6366f133' : '0 1px 3px 0 rgba(99,102,241,0.04)',
                        cursor: 'pointer',
                        height: '44px',
                        fontWeight: 500,
                        color: checked ? '#94a3b8' : '#22223b',
                        fontSize: '0.91rem',
                        border: checked ? '2px solid #6366f1' : '2px solid transparent',
                        transition: 'all 0.2s ease',
                        position: 'relative',
                        filter: checked ? 'blur(0.8px) brightness(0.95)' : 'none',
                        opacity: checked ? 0.7 : 1,
                        textDecoration: checked ? 'line-through' : 'none',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => onToggle(habit.id, !checked)}
                          style={{ marginRight: 6, accentColor: '#6366f1', width: 16, height: 16, borderRadius: 8, flexShrink: 0 }}
                        />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{habit.name}</span>
                      </span>
                      <button
                        title={`Delete habit '${habit.name}'`}
                        onClick={e => { e.preventDefault(); e.stopPropagation(); setDeleteTarget({ type: 'habit', id: habit.id }); }}
                        style={{
                          background: 'none',
                          border: 'none',
                          marginLeft: 8,
                          cursor: 'pointer',
                          borderRadius: 6,
                          padding: '0.1rem 0.3rem',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'background 0.15s',
                          flexShrink: 0,
                        }}
                        onMouseOver={e => (e.currentTarget.style.background = '#ffeaea')}
                        onMouseOut={e => (e.currentTarget.style.background = 'none')}
                      >
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="8.5" fill="#f8fafc" stroke="#e57373" strokeWidth="1.5" />
                          <path d="M7 7L13 13M13 7L7 13" stroke="#e57373" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </label>
                  );
                })}
                    <ConfirmDialog
                      open={!!deleteTarget}
                      title={deleteTarget?.type === 'category' ? 'Delete Category' : 'Delete Habit'}
                      message={deleteTarget?.type === 'category'
                        ? 'Are you sure you want to delete this category and all its habits? This cannot be undone.'
                        : 'Are you sure you want to delete this habit? This cannot be undone.'}
                      onConfirm={() => {
                        if (deleteTarget?.type === 'category' && onDeleteCategory) onDeleteCategory(deleteTarget.id);
                        if (deleteTarget?.type === 'habit' && onDeleteHabit) onDeleteHabit(deleteTarget.id);
                        setDeleteTarget(null);
                      }}
                      onCancel={() => setDeleteTarget(null)}
                    />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
