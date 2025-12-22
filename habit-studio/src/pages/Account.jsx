import React, { useState, useEffect } from 'react';

export default function Account() {
  const [user, setUser] = useState({ username: '', email: '' });
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '', newPassword: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsed = JSON.parse(userData);
      setUser(parsed);
      setForm(f => ({ ...f, username: parsed.username || '', email: parsed.email || '' }));
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSave = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) {
      users[idx].username = form.username;
      users[idx].email = form.email;
      if (form.newPassword) users[idx].password = form.newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify({ username: form.username, email: form.email }));
      setUser({ username: form.username, email: form.email });
      setMessage('Account updated!');
      setEdit(false);
      setForm(f => ({ ...f, password: '', newPassword: '' }));
    }
  };

  const handleLogoff = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete your account? This cannot be undone.')) return;
    const users = JSON.parse(localStorage.getItem('users') || '[]').filter(u => u.email !== user.email);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('user');
    setUser({ username: '', email: '' });
    window.location.reload();
  };

  return (
    <div className="account-page-bg">
      <div className="account-container">
        <h2 className="account-title">My Account</h2>
        <form className="account-form" onSubmit={handleSave}>
          <div className="account-field-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              disabled={!edit}
              className="account-input"
              required
            />
          </div>
          <div className="account-field-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={!edit}
              className="account-input"
              required
            />
          </div>
          {edit && (
            <>
              <div className="account-field-group">
                <label>Current Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="account-input"
                  required
                />
              </div>
              <div className="account-field-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="account-input"
                  placeholder="Enter new password"
                />
              </div>
            </>
          )}
          <div className="account-actions" style={{ justifyContent: 'center' }}>
            {!edit ? (
              <button type="button" className="btn-primary" style={{ margin: '0 auto', display: 'block' }} onClick={() => setEdit(true)}>
                Edit Account
              </button>
            ) : (
              <>
                <button type="submit" className="btn-primary">Save Changes</button>
                <button type="button" className="btn-secondary" onClick={() => { setEdit(false); setForm(f => ({ ...f, password: '', newPassword: '' })); }}>Cancel</button>
              </>
            )}
          </div>
        </form>
        <div className="account-footer-actions">
          <button className="btn-secondary" onClick={handleLogoff}>Log Off</button>
          <button className="btn-danger" onClick={handleDelete}>Delete Account</button>
        </div>
        {message && <div className="account-message">{message}</div>}
      </div>
      <style jsx>{`
        .account-page-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .account-container {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 32px 0 rgba(99,102,241,0.08);
          padding: 2.5rem 2.2rem 2rem 2.2rem;
          max-width: 420px;
          width: 100%;
          margin: 3.5rem 0 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .account-title {
          color: #6366f1;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 2.2rem;
          text-align: center;
          letter-spacing: -0.01em;
        }
        .account-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .account-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .account-input {
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          font-size: 1rem;
          background: #f8fafc;
          color: #22223b;
          font-family: inherit;
          transition: border 0.2s;
        }
        .account-input:focus {
          border: 1.5px solid #6366f1;
          outline: none;
        }
        .account-actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          justify-content: center;
        }
        .account-footer-actions {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          margin-top: 2.2rem;
        }
        .btn-primary {
          background: linear-gradient(90deg, #6366f1 0%, #818cf8 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.7rem 1.5rem;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-primary:hover {
          background: linear-gradient(90deg, #818cf8 0%, #6366f1 100%);
        }
        .btn-secondary {
          background: #f1f5f9;
          color: #6366f1;
          border: 1.5px solid #c7d2fe;
          border-radius: 8px;
          padding: 0.7rem 1.5rem;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .btn-secondary:hover {
          background: #e0e7ff;
          color: #4f46e5;
        }
        .btn-danger {
          background: #fee2e2;
          color: #dc2626;
          border: 1.5px solid #fecaca;
          border-radius: 8px;
          padding: 0.7rem 1.5rem;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .btn-danger:hover {
          background: #fecaca;
          color: #b91c1c;
        }
        .account-message {
          margin-top: 1.2rem;
          color: #22c55e;
          font-weight: 600;
          text-align: center;
        }
        .account-footer {
          width: 100%;
          text-align: center;
          padding: 1.5rem 0 0.5rem 0;
          color: #a5b4fc;
          font-weight: 500;
          font-size: 1rem;
          background: transparent;
        }
      `}</style>
    </div>
  );
}
