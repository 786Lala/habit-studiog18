import React from 'react';

export default function CTASection() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Build Better Habits?</h2>
          <p className="cta-single-line">Join thousands of users who are transforming their lives.</p>
          <div className="cta-buttons">
            <button className="btn-primary btn-lg" onClick={handleScrollToTop}>
              Start Tracking Now — It's Free
            </button>
          </div>
          <p className="cta-hint">No credit card required • Takes 2 minutes to set up</p>
        </div>
      </div>

      <style>{`
        .cta-single-line {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
        .cta-section {
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          text-align: center;
          margin: 1.5rem auto;
          border-radius: 16px;
          width: 100%;
          max-width: 900px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .cta-content h2 {
          font-size: 2.1rem;
          color: white;
          margin-bottom: 0.7rem;
          letter-spacing: -0.02em;
        }

        .cta-content p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 480px;
          margin: 0 auto 1.2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 0.7rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .cta-buttons .btn-primary {
          background: #ffffff;
          color: var(--primary);
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .cta-buttons .btn-primary:hover {
          background: #f0f0f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        .cta-buttons .btn-ghost {
          background: rgba(255, 255, 255, 0.2);
          border-color: white;
          color: white;
        }

        .cta-buttons .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: white;
        }

        .cta-hint {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 1.7rem 0.5rem;
          }

          .cta-content h2 {
            font-size: 1.3rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
