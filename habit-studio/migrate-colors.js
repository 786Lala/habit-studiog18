// Color Migration Script
// Run this in the browser console to update existing habit colors to the new deeper pastel palette

const NEW_COLORS = [
  '#ffb4a2', // Peach
  '#a8d8c8', // Mint
  '#ffe4a8', // Lemon
  '#ffaac8', // Rose
  '#b8d4b8', // Sage
  '#c4b0e8', // Lavender
  '#a8c8e8', // Sky
];

function migrateColors() {
  try {
    // Get current habits from localStorage
    const habitsRaw = localStorage.getItem('habits');
    if (!habitsRaw) {
      console.log('No habits found in localStorage');
      return;
    }

    const habits = JSON.parse(habitsRaw);
    if (!Array.isArray(habits) || habits.length === 0) {
      console.log('No habits to migrate');
      return;
    }

    // Group by category and assign new colors
    const categoryColorMap = {};
    let colorIndex = 0;

    // First pass: create color mapping for each unique category
    habits.forEach(habit => {
      if (habit.category && !categoryColorMap[habit.category]) {
        categoryColorMap[habit.category] = NEW_COLORS[colorIndex % NEW_COLORS.length];
        colorIndex++;
      }
    });

    console.log('Category to Color Mapping:', categoryColorMap);

    // Second pass: update all habits with new colors
    const updatedHabits = habits.map(habit => {
      if (habit.category && categoryColorMap[habit.category]) {
        return {
          ...habit,
          color: categoryColorMap[habit.category]
        };
      }
      return habit;
    });

    // Save back to localStorage
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
    
    console.log('✅ Migration complete!');
    console.log('Updated habits:', updatedHabits);
    console.log('Please refresh the page to see the changes.');
    
    return { success: true, categoryColorMap, updatedHabits };
  } catch (error) {
    console.error('❌ Migration failed:', error);
    return { success: false, error };
  }
}

// Run the migration
migrateColors();
