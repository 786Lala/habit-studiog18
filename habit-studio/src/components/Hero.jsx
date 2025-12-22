import React from 'react';

export default function Hero({ onGetStarted }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-badge">✨ Make habits stick with us ✨</div>
            <h1 className="hero-title">
              Transform Yourself,<br />One Day at a Time
            </h1>
            <p className="hero-subtitle" style={{ whiteSpace: 'nowrap' }}>
              The journey to becoming your best self with Habit Studio.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="stat-number" style={{ marginBottom: 0, display: 'block' }}>∞</span>
                <span className="stat-label" style={{ display: 'block', textAlign: 'center' }}>Possibilities</span>
              </div>
              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="stat-number" style={{ marginBottom: 0, display: 'block' }}>2 mins</span>
                <span className="stat-label" style={{ display: 'block', textAlign: 'center' }}>Quick Setup</span>
              </div>
              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="stat-number" style={{ marginBottom: 0, display: 'block' }}>4.8★</span>
                <span className="stat-label" style={{ display: 'block', textAlign: 'center' }}>Average Rating</span>
              </div>
            </div>

            <div className="hero-actions" style={{ justifyContent: 'center', width: '100%', display: 'flex' }}>
              <button className="btn-primary btn-lg" onClick={onGetStarted}>
                Start Your Journey
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <h3>Today's Progress</h3>
                <span className="preview-badge">7-Day Streak</span>
              </div>
              <div className="preview-item">
                <span>Drink Water</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="preview-item">
                <span>Morning Exercise</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="preview-item">
                <span>Reading</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin: 0 auto;
          max-width: 1280px;
        }

        .hero-content {
          animation: slideInLeft 0.6s ease;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 9999px;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #000000;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--slate-600);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-top: 1px solid var(--slate-200);
          border-bottom: 1px solid var(--slate-200);
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--slate-600);
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          animation: slideInRight 0.6s ease;
        }

        .dashboard-preview {
          background: var(--bg-primary);
          border-radius: 12px;
          border: 1px solid var(--slate-200);
          padding: 2rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          color: var(--text-primary);
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .preview-header h3 {
          font-size: 1.125rem;
          margin: 0;
          color: var(--text-primary);
        }

        .preview-badge {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .preview-item {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .preview-item span {
          font-size: 0.875rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .progress {
          height: 6px;
          background: var(--slate-200);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.25rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
