import React from 'react'

export default function Database({ habits = [], logs = {} }){
  // Group habits by category
  const habitsByCategory = habits.reduce((acc, habit) => {
    const cat = habit.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = { color: habit.color, habits: [] };
    acc[cat].habits.push(habit);
    return acc;
  }, {});

  // Calculate statistics for a habit
  const calculateStats = (habitId, habitCreatedDate) => {
    const habitLogs = Object.entries(logs).filter(([_, dayObj]) => habitId in dayObj && dayObj[habitId]);
    const completedDays = habitLogs.length;
    
    // Parse created date from habit ID (timestamp)
    const createdDate = new Date(parseInt(habitId));
    const today = new Date();
    const daysSinceStart = Math.floor((today - createdDate) / (1000 * 60 * 60 * 24)) + 1;
    const missedDays = daysSinceStart - completedDays;
    const completionRate = daysSinceStart > 0 ? Math.round((completedDays / daysSinceStart) * 100) : 0;

    return {
      startDate: createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      daysSinceStart,
      completedDays,
      missedDays,
      completionRate
    };
  };

  if (habits.length === 0) {
    return (
      <div className="card empty-state">
        <div className="empty-icon">📊</div>
        <h3>No Data Yet</h3>
        <p>Start tracking habits to see your statistics here!</p>
      </div>
    );
  }

  return (
    <div className="database-container">
      <h2 className="database-title">Habit Statistics</h2>
      
      {Object.entries(habitsByCategory).map(([category, { color, habits: categoryHabits }]) => (
        <div key={category} className="stats-category-section">
          <h3 className="stats-category-header" style={{ borderLeftColor: color, color: color }}>
            {category}
          </h3>
          
          <div className="stats-table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Habit</th>
                  <th>Started</th>
                  <th>Days Active</th>
                  <th>Completed</th>
                  <th>Missed</th>
                  <th>Success Rate</th>
                </tr>
              </thead>
              <tbody>
                {categoryHabits.map(habit => {
                  const stats = calculateStats(habit.id, habit.createdDate);
                  return (
                    <tr key={habit.id} style={{ '--category-color': color }}>
                      <td className="habit-name-cell">{habit.name}</td>
                      <td>{stats.startDate}</td>
                      <td>{stats.daysSinceStart}</td>
                      <td className="positive-stat">{stats.completedDays}</td>
                      <td className="negative-stat">{stats.missedDays}</td>
                      <td>
                        <div className="completion-cell">
                          <div className="completion-bar">
                            <div 
                              className="completion-fill" 
                              style={{ width: `${stats.completionRate}%`, backgroundColor: color }}
                            />
                          </div>
                          <span className="completion-text">{stats.completionRate}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
