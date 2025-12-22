

import React, { useState } from 'react';

const PASTEL_COLORS = [
  { name: 'Sky Blue', hex: '#A7C7E7' },
  { name: 'Powder Blue', hex: '#B0E0E6' },
  { name: 'Ice Blue', hex: '#D6F6FF' },
  { name: 'Mint', hex: '#A8E6CF' },
  { name: 'Aqua', hex: '#7FDBFF' },
  { name: 'Periwinkle', hex: '#B4AEE8' },
  { name: 'Lavender', hex: '#C3B1E1' },
  { name: 'Light Teal', hex: '#7FE7DC' },
  { name: 'Cool Grey', hex: '#B8C6DB' },
  { name: 'Lilac', hex: '#D6C1ED' },
];

export default function AddHabit({ onAdd, existingCategories = {} }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [isNewCategory, setIsNewCategory] = useState(true);
  const [selectedColor, setSelectedColor] = useState(PASTEL_COLORS[0].hex);

  const categoryList = Object.keys(existingCategories);
  const usedColors = new Set(Object.values(existingCategories));

  React.useEffect(() => {
    if (!isNewCategory && category && existingCategories[category]) {
      setSelectedColor(existingCategories[category]);
    }
  }, [category, isNewCategory, existingCategories]);

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return alert('Please enter a habit name');
    if (!category.trim()) return alert('Please enter or select a category');

    const finalCategory = category.trim();
    const finalColor = existingCategories[finalCategory] || selectedColor;

    onAdd({
      name: name.trim(),
      category: finalCategory,
      color: finalColor
    });

    setName('');
    setCategory('');
    setSelectedColor(PASTEL_COLORS[0].hex);
    setIsNewCategory(true);
  }

  const availableColors = PASTEL_COLORS.filter(c => !usedColors.has(c.hex) || selectedColor === c.hex);

  return (
    <div className="add-habit-bubble-wrapper">
      <form onSubmit={submit} className="add-habit-bubble-form">
        <h2 className="add-habit-bubble-title" style={{ color: '#6366f1', fontWeight: 800, fontSize: '2.1rem', letterSpacing: '-0.01em' }}>Create a New Habit</h2>
        <div className="add-habit-bubble-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="What habit do you want to start today?"
            className="add-habit-bubble-input"
            required
          />
        </div>
        <div className="add-habit-bubble-group">
          <label>Category</label>
          <div className="add-habit-bubble-toggle-row">
            <button
              type="button"
              className={`add-habit-bubble-toggle${isNewCategory ? ' active' : ''}`}
              onClick={() => setIsNewCategory(true)}
            >
              New
            </button>
            <button
              type="button"
              className={`add-habit-bubble-toggle${!isNewCategory ? ' active' : ''}`}
              onClick={() => setIsNewCategory(false)}
            >
              Existing
            </button>
          </div>
          {isNewCategory ? (
            <input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="e.g. Health, Learning, Spiritual"
              className="add-habit-bubble-input"
              required
            />
          ) : (
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="add-habit-bubble-input"
              required
            >
              <option value="">Select a category</option>
              {categoryList.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          )}
        </div>
        <div className="add-habit-bubble-group">
          <label>Color</label>
          <div className="add-habit-bubble-colors">
            {availableColors.map(color => (
              <button
                key={color.hex}
                type="button"
                className={`add-habit-bubble-color${selectedColor === color.hex ? ' selected' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColor(color.hex)}
                title={color.name}
              />
            ))}
          </div>
        </div>
        <div className="add-habit-bubble-actions">
          <button type="submit" className="add-habit-bubble-btn">Add Habit</button>
        </div>
      </form>
      <style jsx>{`
        .add-habit-bubble-wrapper {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(99,102,241,0.08);
          border: 2px solid #e0e7ff;
          padding: 1.5rem 3rem 1.5rem 3rem;
          max-width: 650px;
          width: 100%;
          min-width: 320px;
          margin: 0 auto;
        }
        .add-habit-bubble-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .add-habit-bubble-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 700;
          color: #7c6ee6;
          margin-bottom: 0.5rem;
        }
        .add-habit-bubble-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .add-habit-bubble-input {
          border: none;
          border-radius: 12px;
          background: #fff;
          padding: 0.9rem 1.2rem;
          font-size: 1rem;
          box-shadow: 0 1px 4px rgba(99,102,241,0.04);
          outline: none;
          margin-top: 0.2rem;
        }
        .add-habit-bubble-toggle-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .add-habit-bubble-toggle {
          flex: 1;
          border: none;
          border-radius: 10px;
          background: #e0e7ff;
          color: #7c6ee6;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.6rem 0;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }
        .add-habit-bubble-toggle.active {
          background: linear-gradient(90deg, #a5b4fc 0%, #7c6ee6 100%);
          color: #fff;
        }
        .add-habit-bubble-toggle:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .add-habit-bubble-colors {
          display: flex;
          gap: 1.2rem;
          margin-top: 0.5rem;
        }
        .add-habit-bubble-color {
          width: 28px !important;
          height: 28px !important;
          min-width: 28px !important;
          min-height: 28px !important;
          max-width: 28px !important;
          max-height: 28px !important;
          aspect-ratio: 1 / 1 !important;
          border-radius: 50% !important;
          border: 2px solid transparent;
          cursor: pointer;
          transition: border 0.2s;
          box-sizing: border-box;
          display: block !important;
          padding: 0 !important;
        }
        .add-habit-bubble-color.selected {
          border: 2.5px solid #a5b4fc;
        }
        .add-habit-bubble-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }
        .add-habit-bubble-btn {
          background: linear-gradient(90deg, #a5b4fc 0%, #7c6ee6 100%);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          padding: 0.9rem 2.5rem;
          box-shadow: 0 2px 8px rgba(99,102,241,0.10);
          cursor: pointer;
          transition: background 0.2s;
        }
        .add-habit-bubble-btn:hover {
          background: linear-gradient(90deg, #7c6ee6 0%, #a5b4fc 100%);
        }
      `}</style>
    </div>
  );
}
