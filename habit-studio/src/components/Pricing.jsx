import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'Forever',
      icon: '🌟',
      description: 'Perfect for getting started',
      features: [
        'Up to 5 habits',
        'Daily tracking',
        'Streak counter',
        'Basic analytics',
        'Local data storage'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$4.99',
      period: 'Per month',
      icon: '🚀',
      description: 'For serious habit builders',
      features: [
        'Unlimited habits',
        'Advanced analytics',
        'Custom categories',
        'Progress reports',
        'Cloud backup',
        'Export data',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Team',
      price: '$9.99',
      period: 'Per month',
      icon: '👥',
      description: 'For teams and communities',
      features: [
        'Everything in Pro',
        'Group challenges',
        'Team leaderboards',
        'Shared goals',
        'Admin dashboard',
        'Team analytics',
        '24/7 Support'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that's right for you. Always free to start.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              <div className="pricing-icon">{plan.icon}</div>
              <h3>{plan.name}</h3>
              <p className="pricing-desc">{plan.description}</p>
              
              <div className="pricing-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <button className={`pricing-btn ${plan.highlighted ? 'btn-primary' : 'btn-ghost'}`}>
                {plan.cta}
              </button>

              <div className="pricing-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="feature">
                    <span className="check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <p className="guarantee">30-day money-back guarantee on all paid plans</p>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          padding: 6rem 0;
          background: white;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .pricing-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }

        .pricing-header p {
          font-size: 1.125rem;
          color: var(--slate-600);
          max-width: 500px;
          margin: 0 auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          align-items: stretch;
        }

        .pricing-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 20px;
          border: 1px solid var(--slate-200);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .pricing-card.highlighted {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-color: var(--primary);
          transform: scale(1.05);
          box-shadow: 0 20px 50px rgba(99, 102, 241, 0.25);
        }

        .pricing-card.highlighted h3,
        .pricing-card.highlighted .pricing-desc,
        .pricing-card.highlighted .feature span {
          color: white;
        }

        .pricing-card.highlighted .check {
          color: #10b981;
        }

        .pricing-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .pricing-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--slate-900);
        }

        .pricing-desc {
          color: var(--slate-600);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .pricing-price {
          margin-bottom: 1.5rem;
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .price {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
        }

        .pricing-card.highlighted .price {
          color: white;
        }

        .period {
          color: var(--slate-600);
          font-size: 0.95rem;
        }

        .pricing-card.highlighted .period {
          color: rgba(255, 255, 255, 0.9);
        }

        .pricing-btn {
          width: 100%;
          margin-bottom: 2rem;
        }

        .pricing-features {
          flex-grow: 1;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          font-size: 0.95rem;
          color: var(--slate-600);
        }

        .pricing-card.highlighted .feature {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .check {
          color: var(--success);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .pricing-footer {
          text-align: center;
        }

        .pricing-footer p {
          color: var(--slate-600);
          margin-bottom: 0.5rem;
        }

        .guarantee {
          color: var(--success);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pricing-card.highlighted {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 3rem 0;
          }

          .pricing-header h2 {
            font-size: 2rem;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .pricing-card.highlighted {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
