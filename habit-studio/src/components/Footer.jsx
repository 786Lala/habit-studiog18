import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-about-wrapper plain" style={{padding: '0', margin: '0 auto', maxWidth: '1200px', minHeight: 'unset'}}>
          <div className="footer-about-block plain">
            <h2>About Us</h2>
            <p>We're group 18, two individuals who are interested in bringing you a simple yet effective habit tracking system. As part of the SDG goals, we focus on sustainability and consistency in our website. Thanks for visiting our site - we're excited to share our work with you!</p>
          </div>
          <div className="footer-about-block plain">
            <h2>About Habit Studio</h2>
            <p>Targeting on the third category of the SDG - good health and well-being, Habit Studio is created to raise awareness about sustainable habits. Not only will it help tracking and analyzing your habit, Habit Studio also prioritize your thoughts by creating a journalling page.</p>
          </div>
        </div>
        <div className="footer-horizontal-line" />
        <div className="footer-copyright">
          &copy; 2025 Habit Studio. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer-horizontal-line {
          width: 100%;
          height: 1px;
          background: #d1d5db;
          margin: 2.5rem 0 1.2rem 0;
        }
        .footer-divider {
          width: 2px;
          height: 90px;
          background: #222;
          margin: 0 1.5rem;
          border-radius: 2px;
          align-self: center;
        }

        .footer-copyright {
          width: 100%;
          text-align: left;
          color: #111;
          font-size: 1rem;
          margin-top: 2.5rem;
          margin-bottom: 0.5rem;
          margin-left: 0.5rem;
        }
        .footer {
          background: #f8fafc;
          color: var(--slate-300);
          padding: 1.5rem 0 1rem;
          margin-top: 2rem;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .footer-about-wrapper.plain {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
          background: none;
          padding: 0;
          margin: 0 auto;
          max-width: 1200px;
          min-height: unset;
        }

        .footer-about-block.plain {
          background: none;
          border-radius: 0;
          padding: 0.5rem 0.5rem;
          max-width: 340px;
          width: 100%;
          box-shadow: none;
          text-align: left;
          margin: 0 auto;
        }

        .footer-about-block.plain h2 {
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          text-align: left;
        }

        .footer-about-block.plain p {
          color: #374151;
          font-size: 0.95rem;
          line-height: 1.3;
          text-align: left;
        }

        @media (max-width: 800px) {
          .footer-about-wrapper.plain {
            flex-direction: column;
            gap: 1.2rem;
          }
        }

        .footer-section h3,
        .footer-section h4 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .footer-section p {
          color: var(--slate-400);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          margin-bottom: 0.75rem;
        }

        .footer-section a {
          color: var(--slate-400);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-section a:hover {
          color: var(--primary);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 40px;
          min-height: 40px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          flex-shrink: 0;
          font-size: 0.875rem;
        }

        .social-links a:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-4px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: var(--slate-400);
          font-size: 0.9rem;
        }

        .footer-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 6px;
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer {
            background: #6366F1;
            padding: 2rem 0 1rem;
          }

          .footer-content {
            gap: 2rem;
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-badges {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
