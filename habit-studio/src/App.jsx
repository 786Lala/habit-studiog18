import React, { useEffect, useState } from 'react'
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';
import ProfessionalHeader from './components/ProfessionalHeader'
import Hero from './components/Hero'
import Features from './components/Features'
import Statistics from './pages/Statistics'
import DashboardPage from './pages/DashboardPage'
import DashboardAltPage from './pages/DashboardAltPage'
import Onboarding from './components/Onboarding'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

import Profile from './components/Profile'
import Account from './pages/Account'
import Database from './pages/Database'
import AboutUs from './pages/Option2'
import AboutHabitStudio from './pages/Option3'

const dateKey = (d = new Date()) => d.toISOString().slice(0,10);
function getCurrentUser() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.email ? user.email : null;
  } catch {
    return null;
  }
}

export default function App(){
  const [userEmail, setUserEmail] = useState(getCurrentUser());
  const [habits, setHabits] = useState([]);
  const [logs, setLogs] = useState({});
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Load habits/logs for current user
  useEffect(() => {
    const email = getCurrentUser();
    setUserEmail(email);
    if (email) {
      const h = localStorage.getItem(`habits_${email}`);
      const l = localStorage.getItem(`logs_${email}`);
      setHabits(h ? JSON.parse(h) : []);
      setLogs(l ? JSON.parse(l) : {});
    } else {
      setHabits([]);
      setLogs({});
    }
  }, [localStorage.getItem('user')]);

  // Save habits/logs for current user
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`habits_${userEmail}`, JSON.stringify(habits));
      localStorage.setItem(`logs_${userEmail}`, JSON.stringify(logs));
    }
  }, [habits, logs, userEmail]);

  // Delete a single habit
  const handleDeleteHabit = (habitId) => {
    setHabits(prev => prev.filter(h => h.id !== habitId));
    setLogs(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(date => {
        if (updated[date] && updated[date][habitId] !== undefined) {
          delete updated[date][habitId];
        }
      });
      return updated;
    });
  };

  // Delete a whole category
  const handleDeleteCategory = (category) => {
    const habitIds = habits.filter(h => (h.category || 'Uncategorized') === category).map(h => h.id);
    setHabits(prev => prev.filter(h => (h.category || 'Uncategorized') !== category));
    setLogs(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(date => {
        habitIds.forEach(habitId => {
          if (updated[date] && updated[date][habitId] !== undefined) {
            delete updated[date][habitId];
          }
        });
      });
      return updated;
    });
  };
  const [page, setPage] = useState('home');
  const allowedPages = ['home','dashboard','analytics','database','about-us','about-studio','profile','account'];
  const allowedPagesExtended = [...allowedPages, 'dashboard-alt'];
  const pageSafe = allowedPagesExtended.includes(page) ? page : 'home';
  const today = dateKey();
  const NEW_COLORS = [
    '#A7C7E7', 
    '#B0E0E6', 
    '#D6F6FF', 
    '#A8E6CF', 
    '#7FDBFF',
    '#B4AEE8', 
    '#C3B1E1', 
    '#7FE7DC', 
    '#B8C6DB', 
    '#D6C1ED', 
    '#FFD6E0', 
    '#FFFACD', 
    '#F9D5A7', 
    '#F7B7A3', 
    '#B5EAD7', 
    '#E2F0CB', 
    '#FFDAC1', 
    '#C7CEEA', 
    '#FFB7B2', 
    '#B5B9FF', 
  ];

  // Define navigate before usage
  const navigate = (to) => setPage(to);

  // Move addHabit above first usage
  const addHabit = (habit) => {
    const newHabit = {...habit, id: Date.now().toString()};
    setHabits(prev => [...prev, newHabit]);
  };



  // Move existingCategories above all usages
  const existingCategories = habits.reduce((acc, habit) => {
    if (habit.category && habit.color) {
      acc[habit.category] = habit.color;
    }
    return acc;
  }, {});

  const deleteHabit = (habitId) => {
    setHabits(prev => prev.filter(h => h.id !== habitId));
    setLogs(prev => {
      const newLogs = {...prev};
      Object.keys(newLogs).forEach(date => {
        if (newLogs[date][habitId]) {
          delete newLogs[date][habitId];
        }
      });
      return newLogs;
    });
  };

  const deleteCategory = (category) => {
    setHabits(prev => prev.filter(h => h.category !== category));
    const habitsInCategory = habits.filter(h => h.category === category).map(h => h.id);
    setLogs(prev => {
      const newLogs = {...prev};
      Object.keys(newLogs).forEach(date => {
        habitsInCategory.forEach(habitId => {
          if (newLogs[date][habitId]) {
            delete newLogs[date][habitId];
          }
        });
      });
      return newLogs;
    });
  };

  const setHabitValue = (habitId, value) => {
    setLogs(prev => {
      const day = {...(prev[today] || {}), [habitId]: value};
      return {...prev, [today]: day};
    });
  };

  const getTodayValue = (habitId) => (logs[today] && (habitId in logs[today]) ? logs[today][habitId] : null);

  const exportCSV = () => {
    const header = ['date','habitId','habitName','value'];
    const rows = [header.join(',')];
    Object.entries(logs).forEach(([date, dayObj])=>{
      Object.entries(dayObj).forEach(([hid, val])=>{
        const habit = habits.find(h=>h.id===hid);
        rows.push([date, hid, `"${habit ? habit.name : ''}"`, String(val)].join(','));
      });
    });
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'habit_logs.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const migrated = localStorage.getItem('colorsMigrated');
    if (!migrated && habits.length > 0) {
      const categoryColorMap = {};
      let colorIndex = 0;

      habits.forEach(habit => {
        if (habit.category && !categoryColorMap[habit.category]) {
          categoryColorMap[habit.category] = NEW_COLORS[colorIndex % NEW_COLORS.length];
          colorIndex++;
        }
      });

      const updatedHabits = habits.map(habit => {
        if (habit.category && categoryColorMap[habit.category]) {
          return { ...habit, color: categoryColorMap[habit.category] };
        }
        return habit;
      });

      setHabits(updatedHabits);
      localStorage.setItem('colorsMigrated', 'true');
    }
  }, []);

  useEffect(() => {
    const categoryColors = {};
    let needsUpdate = false;
   
    habits.forEach(habit => {
      if (habit.category && !categoryColors[habit.category]) {
        categoryColors[habit.category] = habit.color;
      }
    });
    
    const normalizedHabits = habits.map(habit => {
      if (habit.category && habit.color !== categoryColors[habit.category]) {
        needsUpdate = true;
        return { ...habit, color: categoryColors[habit.category] };
      }
      return habit;
    });
    
    if (needsUpdate) {
      setHabits(normalizedHabits);
    }
  }, [habits, setHabits]);

  return (
    <div className="app-shell">
      <ProfessionalHeader onNavigate={navigate} currentPage={pageSafe} />

      {pageSafe === 'home' && (
        <>
          <Hero onGetStarted={() => {
            if (userEmail) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('dashboard');
            } else {
              setShowAuthModal(true);
            }
          }} />
          <Features />
          <Onboarding />
          <Testimonials />
          <CTA onGetStarted={() => {
            if (userEmail) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('dashboard');
            } else {
              setShowAuthModal(true);
            }
          }} />
        </>
      )}

      {pageSafe === 'dashboard' && (
        <DashboardPage
          onAdd={addHabit}
          existingCategories={existingCategories}
          habits={habits}
          getValue={getTodayValue}
          setValue={setHabitValue}
          onDeleteCategory={deleteCategory}
          onDeleteHabit={deleteHabit}
        />
      )}

      {pageSafe === 'analytics' && (
        <Statistics 
          habits={habits} 
          logs={logs} 
          onToggleTodayHabit={(habitId, value) => setHabitValue(habitId, value)}
          onDeleteHabit={deleteHabit}
          onDeleteCategory={deleteCategory}
        />
      )}

      {pageSafe === 'database' && <Database habits={habits} logs={logs} />}
      {pageSafe === 'about-us' && <AboutUs />}
      {pageSafe === 'about-studio' && <AboutHabitStudio />}

      {pageSafe === 'profile' && <Profile onNavigate={navigate} />}
      {pageSafe === 'journal' && <Journal />}
      <Footer />

      <LoginModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onLogin={(user) => {
          setUserEmail(user.email);
          setShowAuthModal(false);
          navigate('dashboard');
        }}
      />

      <style jsx>{`
        .app-shell {
          min-height: 100vh;
          background: var(--slate-50);
          width: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }

        .card {
          background: white;
          border-radius: 12px;
          border: 1px solid var(--slate-200);
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .card {
            padding: 1.5rem;
          }
        }

      `}</style>
    </div>
  );
}
