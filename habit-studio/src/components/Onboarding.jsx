import React from 'react';

export default function Onboarding() {
  const steps = [
    {
      number: '1',
      title: 'Create Your First Habit',
      description: 'Add the habits you want to track. Be specific and measurable.',
      icon: ''
    },
    {
      number: '2',
      title: 'Track Daily',
      description: 'Check off your habits each day. Consistency is key to building success.',
      icon: ''
    },
    {
      number: '3',
      title: 'Build Your Streak',
      description: 'Watch your streak grow. The longer you maintain it, the stronger the habit.',
      icon: ''
    },
    {
      number: '4',
      title: 'Achieve Your Goals',
      description: 'Reach milestones, earn rewards, and celebrate your transformation.',
      icon: ''
    }
  ];

  return (
    <section className="onboarding-section">
      <div className="container">
        <div className="onboarding-header">
          <h2>How It Works</h2>
        </div>

        <div className="steps-container">
          {steps.map((step, idx) => (
            <div key={idx} className="step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {idx < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .onboarding-section {
          padding: 6rem 0;
          background: var(--bg-primary);
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .onboarding-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .onboarding-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .onboarding-header p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          margin: 0 auto;
          max-width: 1200px;
          align-items: stretch;
        }

        .step {
          text-align: center;
          position: relative;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 20px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100%;
          color: var(--text-primary);
        }

        .step:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
          transform: translateY(-8px);
        }

        .step-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .step-number {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.25rem;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .step h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .step p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .step-arrow {
          position: absolute;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: bold;
        }

        @media (max-width: 1024px) {
          .step-arrow {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .onboarding-section {
            padding: 3rem 0;
          }

          .onboarding-header h2 {
            font-size: 2rem;
          }

          .steps-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .step {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
