import React, { useState, useEffect } from 'react';

export default function Profile({ onNavigate }) {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ username: '', email: '', password: '' });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
        const parsed = JSON.parse(userData);
        setEditData({ username: parsed.username || '', email: parsed.email || '', password: parsed.password || '' });
      } catch (e) {
        console.error('Failed to parse user data');
      }
    }
  }, []);


  const handleSaveProfile = () => {
    if (!editData.username || !editData.email || !editData.password) {
      alert('Please fill in all fields');
      return;
    }
    // Update user in 'users' array in localStorage
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem('users') || '[]');
    } catch {}
    users = users.map(u => u.email === user.email ? { ...u, ...editData } : u);
    localStorage.setItem('users', JSON.stringify(users));
    const updatedUser = { ...user, ...editData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setEditMode(false);
    alert('Profile updated successfully!');
  };
  const handleDeleteAccount = () => {
    if (!window.confirm('Are you sure you want to delete your account? This cannot be undone.')) return;
    // Remove from users array
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem('users') || '[]');
    } catch {}
    users = users.filter(u => u.email !== user.email);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('user');
    setUser(null);
    if (onNavigate) onNavigate('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    onNavigate('home');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  if (!user) {
    // Immediately redirect to home if no user (prevents showing 'No Account Found')
    if (onNavigate) onNavigate('home');
    return null;
  }

  return (
    <div className="profile-container">
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="profile-header">
          <h1>My Profile</h1>
          <p style={{ color: 'var(--slate-600)' }}>Manage your account settings and preferences</p>
        </div>

        <div className="profile-grid-centered">
          {/* Profile Card */}
          <div className="profile-card" style={{minWidth: '320px', maxWidth: '400px', padding: '1.2rem 1.2rem', border: '1px solid #a5b4fc', boxShadow: '0 2px 8px rgba(99, 102, 241, 0.05)', borderRadius: '24px', background: 'white'}}>
            <div className="profile-card-header">
              <h2>Account Information</h2>
            </div>

            {editMode ? (
              <div className="profile-edit-form">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={editData.username}
                    onChange={handleInputChange}
                    className="profile-input"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                    className="profile-input"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={editData.password}
                    onChange={handleInputChange}
                    className="profile-input"
                  />
                </div>
                <button className="btn-primary" onClick={handleSaveProfile}>
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="profile-info">
                <div className="info-item">
                  <span className="info-label">Username</span>
                  <span className="info-value">{user.username}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Member Since</span>
                  <span className="info-value">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* Danger Zone Card */}
          <div className="profile-card danger-zone" style={{minWidth: '320px', maxWidth: '400px', padding: '1.2rem 1.2rem', background: 'white'}}>
            <h2>Account Management</h2>
            <div className="danger-section">
              <h3>Logout</h3>
              <p>Sign out of your account on this device</p>
              <button className="btn-secondary" onClick={handleLogout}>
                <span className="btn-logout-box">Logout</span>
              </button>
            </div>
            <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid rgba(239, 68, 68, 0.2)' }} />
            <div className="danger-section">
              <h3>Delete Account</h3>
              <p>Permanently delete your account and all data</p>
              <button className="btn-danger" onClick={handleDeleteAccount}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-container {
          min-height: 100vh;
          background: var(--slate-50);
          padding: 2rem 0;
        }

        .profile-header {
          margin-bottom: 3rem;
        }

        .profile-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--slate-900);
        }

        .profile-header p {
          font-size: 1.125rem;
          color: var(--slate-600);
        }

        .profile-grid-centered {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .profile-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid var(--slate-200);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .profile-card:hover {
          border-color: var(--primary);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.1);
        }

        .profile-card h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--slate-900);
        }

        .profile-card h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--slate-800);
        }

        .profile-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .profile-card-header h2 {
          margin-bottom: 0;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: var(--slate-50);
          border-radius: 12px;
        }

        .info-label {
          color: var(--slate-600);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          color: var(--slate-900);
          font-weight: 600;
          font-size: 1.05rem;
        }

        .profile-edit-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: var(--slate-700);
          font-size: 0.95rem;
        }

        .profile-input {
          padding: 0.75rem 1rem;
          border: 1px solid var(--slate-300);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .profile-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .settings-group {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          gap: 2rem;
        }

        .setting-item > div:first-child {
          flex: 1;
        }

        .setting-item h3 {
          margin: 0;
        }

        .setting-item p {
          margin: 0.25rem 0 0 0;
          font-size: 0.9rem;
          color: var(--slate-600);
        }

        .toggle-button {
          background: var(--slate-200);
          border: 2px solid var(--slate-300);
          border-radius: 12px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          padding: 0;
        }

        .toggle-button:hover {
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
        }

        .toggle-button.active {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--primary);
        }

        .toggle-switch {
          position: relative;
          display: inline-flex;
          align-items: center;
          width: 50px;
          height: 24px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--slate-300);
          transition: all 0.3s ease;
          border-radius: 12px;
          z-index: 1;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          top: 3px;
          background-color: white;
          transition: all 0.3s ease;
          border-radius: 50%;
          z-index: 2;
        }

        .support-section {
          margin-bottom: 1rem;
        }

        .support-section h3 {
          margin: 0 0 0.5rem 0;
        }

        .support-section p {
          margin: 0 0 1rem 0;
          color: var(--slate-600);
          font-size: 0.9rem;
        }

        .danger-zone {
          border-color: rgba(239, 68, 68, 0.2);
          background: rgba(239, 68, 68, 0.02);
        }

        .danger-section h3 {
          color: #dc2626;
          margin: 0 0 0.5rem 0;
        }

        .danger-section p {
          margin: 0 0 1rem 0;
          color: var(--slate-600);
          font-size: 0.9rem;
        }

        .btn-danger {
          background: #ef4444;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-danger:hover {
          background: #dc2626;
          box-shadow: 0 8px 24px rgba(239, 68, 68, 0.25);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .profile-header h1 {
            font-size: 1.75rem;
          }

          .profile-grid {
            grid-template-columns: 1fr;
          }

          .setting-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
