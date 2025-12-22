
import React, { useState, useEffect } from 'react';

export default function ProfessionalHeader({ onNavigate, currentPage, forceShowAuthModal, onCloseAuthModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [authData, setAuthData] = useState({ username: '', email: '', password: '' });
  const [user, setUser] = useState(null);
  const [showNotRegistered, setShowNotRegistered] = useState(false);
  const [showIncorrectPassword, setShowIncorrectPassword] = useState(false);


  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Failed to parse user data');
      }
    } else {
      setUser(null);
    }
  }, [showAuthModal]);

  useEffect(() => {
    if (forceShowAuthModal) setShowAuthModal(true);
  }, [forceShowAuthModal]);

  const getRegisteredUsers = () => {
    try {
      return JSON.parse(localStorage.getItem('users') || '[]');
    } catch {
      return [];
    }
  };

  const registerUser = (username, email, password) => {
    const users = getRegisteredUsers();
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  };

  const userExists = (email) => {
    const users = getRegisteredUsers();
    return users.some(u => u.email === email);
  };

  const getUser = (email) => {
    const users = getRegisteredUsers();
    return users.find(u => u.email === email);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (!authData.email || !authData.password) {
      alert('Please fill in all fields');
      return;
    }
    if (isSignUp) {
      if (!authData.username) {
        alert('Please enter a username');
        return;
      }
      if (userExists(authData.email)) {
        alert('This email is already registered. Please sign in.');
        setIsSignUp(false);
        return;
      }
      registerUser(authData.username, authData.email, authData.password);
      localStorage.setItem('user', JSON.stringify({ username: authData.username, email: authData.email }));
      setUser({ username: authData.username, email: authData.email });
      setShowAuthModal(false);
      setAuthData({ username: '', email: '', password: '' });
      if (onNavigate) onNavigate('profile');
    } else {
      if (!userExists(authData.email)) {
        setShowNotRegistered(true);
        return;
      }
      const foundUser = getUser(authData.email);
      if (foundUser.password !== authData.password) {
        setShowIncorrectPassword(true);
        return;
      }
            {/* Incorrect password modal */}
            {showIncorrectPassword && (
              <div className="modal-overlay" style={{zIndex:3000}}>
                <div className="modal-content" style={{textAlign:'center',padding:'2.5rem 1.2rem', maxWidth:'340px', width:'90%'}}>
                  <h2 style={{color:'var(--primary,#6366f1)',marginBottom:'1rem'}}>Incorrect Password</h2>
                  <p style={{color:'var(--slate-700)',marginBottom:'1.5rem',fontSize:'1.1rem'}}>The password you entered is incorrect. Please try again.</p>
                  <button className="btn-primary" style={{width:'100%'}} onClick={() => setShowIncorrectPassword(false)}>
                    Try Again
                  </button>
                </div>
              </div>
            )}
      localStorage.setItem('user', JSON.stringify({ username: foundUser.username, email: authData.email }));
      setUser({ username: foundUser.username, email: authData.email });
      setShowAuthModal(false);
      setAuthData({ username: '', email: '', password: '' });
      if (onNavigate) onNavigate('profile');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthData(prev => ({ ...prev, [name]: value }));
  };


  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <header className="professional-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            
            <span className="logo-text">Habit Studio</span>
          </div>


          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => {
                  if (onNavigate) onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="nav-item"
              aria-label="Log in"
              onClick={() => { setShowAuthModal(true); setIsSignUp(false); }}
              style={{ fontSize: '1rem', borderRadius: '20px', padding: '0.3rem 0.9rem', color: '#fff', background: '#4f46e5', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 600, textDecoration: 'none' }}
            >
              Log in
            </button>
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Show not registered modal on top-level, not nested in showAuthModal */}
      {showNotRegistered && (
        <div className="modal-overlay" style={{zIndex:3000}}>
          <div className="modal-content" style={{textAlign:'center',padding:'2.5rem 1.2rem', maxWidth:'340px', width:'90%'}}>
            <h2 style={{color:'var(--primary,#6366f1)',marginBottom:'1rem'}}>Gmail Not Registered</h2>
            <p style={{color:'var(--slate-700)',marginBottom:'1.5rem',fontSize:'1.1rem'}}>This Gmail was not registered to any account yet.</p>
            <button className="btn-primary" style={{width:'100%',marginBottom:'1rem'}} onClick={() => { setIsSignUp(true); setShowNotRegistered(false); }}>
              Sign Up
            </button>
            <button className="btn-secondary" style={{width:'100%'}} onClick={() => setShowNotRegistered(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {showAuthModal && (
        <div className="modal-overlay" onClick={() => { setShowAuthModal(false); if (onCloseAuthModal) onCloseAuthModal(); }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
              <button className="modal-close" onClick={() => { setShowAuthModal(false); if (onCloseAuthModal) onCloseAuthModal(); }}>✕</button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAuth} style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
                <p style={{ marginBottom: '0.5rem', color: 'var(--slate-600)', fontWeight:600, fontSize:'1.1rem' }}>
                  {isSignUp ? 'Create your account' : 'Sign in to your account'}
                </p>
                {isSignUp && (
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="modal-input"
                    value={authData.username}
                    onChange={handleInputChange}
                    autoComplete="username"
                    required
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="modal-input"
                  value={authData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="modal-input"
                  value={authData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  required
                />
                <button className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} type="submit">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </button>
                <div className="modal-footer" style={{textAlign:'center',marginTop:'0.5rem',color:'#6b7280'}}>
                  {isSignUp ? (
                    <span>Already have an account? <a style={{color:'var(--primary,#6366f1)',cursor:'pointer',fontWeight:600}} onClick={() => setIsSignUp(false)}>Sign In</a></span>
                  ) : (
                    <span>Don&apos;t have an account? <a style={{color:'var(--primary,#6366f1)',cursor:'pointer',fontWeight:600}} onClick={() => setIsSignUp(true)}>Sign Up</a></span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .professional-header {
          background: white;
          border-bottom: 1px solid var(--slate-200);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .logo-section:hover {
          opacity: 0.8;
        }

        .logo-icon {
          font-size: 1.75rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .nav {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .nav-item {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          color: var(--slate-600);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          border-radius: 6px;
        }

        .nav-item:hover {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.05);
        }

        .nav-item.active {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
          border-bottom: 2px solid var(--primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }



        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--slate-600);
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-bottom: 1px solid var(--slate-200);
            padding: 1rem 1.5rem;
            gap: 0;
            width: 100%;
          }

          .nav.mobile-open {
            display: flex;
          }

          .nav-item {
            width: 100%;
            text-align: left;
            padding: 0.75rem;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .header-content {
            flex-wrap: wrap;
          }

          .logo-text {
            font-size: 1.25rem;
          }
        }

        .auth-toggle {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .auth-toggle:hover {
          color: var(--primary-dark);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          z-index: 2001;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: var(--slate-900);
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--slate-500);
          padding: 0;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--slate-200);
          border-radius: 12px;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .modal-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
      `}</style>
    </header>
  );
}
