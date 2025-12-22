import React from "react";

export default function DashboardAltPage() {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', padding: '3rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        maxWidth: 900,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '18px',
        boxShadow: '0 2px 16px rgba(100,116,139,0.08)',
        padding: '3rem 2rem',
        minHeight: 300
      }}>
        <h1 style={{ color: '#64748b', fontWeight: 700, fontSize: '2rem' }}>Welcome to the New Dashboard Page</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>This page is empty and uses the same background as the analytics page.</p>
        <div style={{marginTop: '2rem', color: '#94a3b8', fontSize: '1.2rem', fontStyle: 'italic'}}>Add your dashboard widgets or content here.</div>
      </div>
    </div>
  );
}
