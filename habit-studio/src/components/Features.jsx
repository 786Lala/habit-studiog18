import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '📈',
      title: 'Smart Tracking',
      description: 'Track your habits with daily check-ins and visual progress indicators.'
    },
    {
      icon: '🔥',
      title: 'Streak Counter',
      description: 'Build momentum with streak tracking. Never break the chain!'
    },
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Set meaningful goals and track progress towards achieving them.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Visualize your progress with detailed analytics and insights.'
    },
    {
      icon: '🏆',
      title: 'Achievements',
      description: 'Unlock badges and rewards as you hit your milestones.'
    },
    {
      icon: '💬',
      title: 'Community',
      description: 'Connect with others and get motivated by shared success stories.'
    }
  ];

  const currentFeatures = features.slice(0, 4);
  const upcomingFeatures = features.slice(4);

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <span className="features-badge">Features</span>
          <h2>Why Choose Habit Studio?</h2>
          <p className="features-desc">Everything you need to build lasting habits and achieve your goals</p>
        </div>
        <div className="features-grid">
          {currentFeatures.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="upcoming-section">
          <span className="upcoming-badge">Coming Soon</span>
          <div className="upcoming-grid">
            {upcomingFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card upcoming-card">
                <div className="feature-icon-wrapper upcoming-icon">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .features-section {
          padding: 5rem 2rem;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          width: 100%;
          box-sizing: border-box;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .features-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          margin-bottom: 1.25rem;
          letter-spacing: 0.025em;
        }

        .features-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 1rem 0;
          letter-spacing: -0.025em;
        }

        .features-desc {
          font-size: 1.125rem;
          color: #64748b;
          margin: 0;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        .upcoming-section {
          margin-top: 3rem;
          text-align: center;
        }

        .upcoming-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          letter-spacing: 0.025em;
        }

        .upcoming-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .upcoming-card {
          opacity: 0.9;
          border-style: dashed;
        }

        .upcoming-icon {
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
        }

        .feature-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem 1.75rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .feature-card:hover {
          border-color: #c7d2fe;
          box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.15);
          transform: translateY(-4px);
        }

        .feature-icon-wrapper {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .feature-icon {
          font-size: 2rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.75rem 0;
        }

        .feature-card p {
          color: #64748b;
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .upcoming-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 500px;
          }
        }

        @media (max-width: 640px) {
          .features-section {
            padding: 3rem 1rem;
          }

          .features-header h2 {
            font-size: 1.875rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .upcoming-grid {
            grid-template-columns: 1fr;
            max-width: 300px;
          }

          .feature-card {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
