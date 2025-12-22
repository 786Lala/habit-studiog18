
import React from "react";
import TodaysHabits from "../components/TodaysHabits";

// Example data structure for demonstration
const demoHabits = [
  { id: '1', name: 'Drink Water', category: 'Health', color: '#a8d8c8', completed: 18, total: 21 },
  { id: '2', name: 'Read Book', category: 'Personal Growth', color: '#c4b0e8', completed: 15, total: 21 },
  { id: '3', name: 'Exercise', category: 'Health', color: '#a8d8c8', completed: 12, total: 21 },
  { id: '4', name: 'Meditate', category: 'Mindfulness', color: '#ffe4a8', completed: 10, total: 21 },
];

function groupByCategory(habits) {
  return habits.reduce((acc, habit) => {
    if (!acc[habit.category]) acc[habit.category] = [];
    acc[habit.category].push(habit);
    return acc;
  }, {});
}

export default function Statistics({ habits = demoHabits, logs = {}, onToggleTodayHabit, onDeleteHabit, onDeleteCategory }) {
  // Helper to get all dates from logs
  const allDates = Object.keys(logs).sort();
  // Group habits by category
  const grouped = groupByCategory(habits);
  // Find the earliest date in logs for started date
  function getStartedDate(habitId) {
    for (let i = 0; i < allDates.length; i++) {
      if (logs[allDates[i]] && logs[allDates[i]][habitId] !== undefined) {
        return allDates[i];
      }
    }
    return null;
  }
  // Count completed days for a habit
  function getCompletedCount(habitId) {
    return allDates.filter(date => logs[date] && logs[date][habitId] === true).length;
  }
  // Count days active (days with any value for this habit)
  function getDaysActive(habitId) {
    return allDates.filter(date => logs[date] && logs[date][habitId] !== undefined).length;
  }
  // Format date as readable string
  function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }
  const hasHabits = habits && habits.length > 0;
  return (
    <div style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', padding: '3rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: 900, margin: '0 auto' }}>
        <TodaysHabits
          habits={habits}
          logs={logs}
          onToggle={onToggleTodayHabit}
          onDeleteHabit={onDeleteHabit}
          onDeleteCategory={onDeleteCategory}
        />
        {!hasHabits && (
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            border: '2px solid #dbeafe',
            borderRadius: '14px',
            boxShadow: '0 2px 16px 0 rgba(99,102,241,0.04)',
            padding: '1rem 1.5rem',
            margin: '1rem auto',
            maxWidth: 320,
            textAlign: 'center',
            fontFamily: 'Inter, Arial, sans-serif',
          }}>
            <h2 style={{ color: '#22223b', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem', whiteSpace: 'nowrap' }}>No analytics yet</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 400, margin: 0 }}>Start tracking your progress by creating your first habit.</p>
          </div>
        )}
        {hasHabits && Object.entries(grouped).map(([category, habits]) => {
          const accentColor = habits[0]?.color || '#b2b3c6';
          return (
            <div key={category} style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', gap: '0.5rem' }}>
                <div style={{ width: 6, height: 32, borderRadius: 4, background: accentColor }} />
                <span style={{ fontWeight: 700, fontSize: '1.5rem', color: accentColor, fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '-0.01em' }}>{category}</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 18, boxShadow: '0 2px 16px 0 rgba(99,102,241,0.08)', padding: '1rem 1.25rem', border: 'none', maxWidth: '100%' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, background: 'transparent', borderRadius: 12, overflow: 'hidden', fontFamily: 'Inter, Arial, sans-serif' }}>
                  <thead>
                    <tr style={{ background: 'transparent', color: '#22292f', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em' }}>
                      <th style={{ padding: '0.5rem 0.5rem', textAlign: 'left', borderBottom: '2px solid #e3e6f3', fontWeight: 700, color: '#22292f' }}>HABIT</th>
                      <th style={{ padding: '0.5rem 0.5rem', textAlign: 'center', borderBottom: '2px solid #e3e6f3', fontWeight: 700, color: '#22292f' }}>DAYS ACTIVE</th>
                      <th style={{ padding: '0.5rem 0.5rem', textAlign: 'center', borderBottom: '2px solid #e3e6f3', fontWeight: 700, color: '#22292f' }}>COMPLETED</th>
                      <th style={{ padding: '0.5rem 0.5rem', textAlign: 'center', borderBottom: '2px solid #e3e6f3', fontWeight: 700, color: '#22292f' }}>MISSED</th>
                      <th style={{ padding: '0.5rem 0.5rem', textAlign: 'center', borderBottom: '2px solid #e3e6f3', fontWeight: 700, color: '#22292f' }}>SUCCESS RATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {habits.map((habit) => {
                      const daysActive = getDaysActive(habit.id);
                      const completed = getCompletedCount(habit.id);
                      const missed = daysActive - completed;
                      const successRate = daysActive > 0 ? Math.round((completed / daysActive) * 100) : 0;
                      return (
                        <tr key={habit.id} style={{ background: 'transparent' }}>
                          <td style={{ padding: '0.6rem 0.5rem', fontWeight: 600, color: '#22292f', borderBottom: '1px solid #ececf6', fontSize: '0.95rem' }}>{habit.name}</td>
                          <td style={{ padding: '0.6rem 0.5rem', color: '#22292f', borderBottom: '1px solid #ececf6', textAlign: 'center', fontWeight: 500, fontSize: '0.9rem' }}>{daysActive}</td>
                          <td style={{ padding: '0.6rem 0.5rem', color: '#22292f', borderBottom: '1px solid #ececf6', textAlign: 'center', fontWeight: 500, fontSize: '0.9rem' }}>{completed}</td>
                          <td style={{ padding: '0.6rem 0.5rem', color: '#22292f', borderBottom: '1px solid #ececf6', textAlign: 'center', fontWeight: 500, fontSize: '0.9rem' }}>{missed}</td>
                          <td style={{ padding: '0.6rem 0.5rem', color: '#22292f', borderBottom: '1px solid #ececf6', textAlign: 'center', fontWeight: 700, fontSize: '0.9rem' }}>{daysActive > 0 ? `${successRate}%` : '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
