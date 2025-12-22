import React from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    content: 'Habit Studio transformed my daily routine. The streak counter keeps me motivated every single day!'
  },
  {
    name: 'Marcus Johnson',
    role: 'Fitness Enthusiast',
    content: 'I finally stuck with my workout routine for 90 days straight. This app made it possible.'
  },
  {
    name: 'Emma Williams',
    role: 'Student',
    content: 'The analytics feature helped me understand my study patterns and improve my productivity.'
  },
  {
    name: 'Carlos Rivera',
    role: 'Entrepreneur',
    content: 'I love how easy it is to track my habits. The reminders keep me on track even on busy days.'
  },
  {
    name: 'Priya Patel',
    role: 'Software Engineer',
    content: 'The streak feature is so motivating! I haven’t missed a day of meditation in months.'
  },
  {
    name: 'Liam O’Connor',
    role: 'Designer',
    content: 'The interface is beautiful and intuitive. I recommend it to all my friends.'
  },
  {
    name: 'Ava Müller',
    role: 'Researcher',
    content: 'Habit Studio helps me balance work and life. The analytics are a game changer.'
  },
  {
    name: 'Noah Kim',
    role: 'Fitness Coach',
    content: 'My clients love using this app to build healthy routines. It’s a must-have!'
  },
  {
    name: 'Sofia Rossi',
    role: 'Teacher',
    content: 'I use Habit Studio to encourage my students to develop good study habits. It works wonders.'
  },
  {
    name: 'David Lee',
    role: 'Photographer',
    content: 'Tracking my creative habits has never been easier. I feel more productive every week.'
  },
  {
    name: 'Maya Singh',
    role: 'Nutritionist',
    content: 'The daily check-ins help my clients stay accountable. Fantastic tool!'
  },
  {
    name: 'Lucas Dubois',
    role: 'Student',
    content: 'I finally managed to stick to my reading goals. The app is simple and effective.'
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div>
          <p className="testimonial-name">{testimonial.name}</p>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>
      <p className="testimonial-content">"{testimonial.content}"</p>
      <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate testimonials for seamless looping
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Loved by Thousands</h2>
          <p style={{whiteSpace: 'nowrap'}}>Join thousands of users building better habits with Habit Studio.</p>
        </div>
        <div className="marquee-row marquee-left">
          <div className="marquee-track">
            {row1.map((t, idx) => (
              <TestimonialCard testimonial={t} key={`row1-${idx}`} />
            ))}
          </div>
        </div>
        <div className="marquee-row marquee-right">
          <div className="marquee-track">
            {row2.map((t, idx) => (
              <TestimonialCard testimonial={t} key={`row2-${idx}`} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonials-section {
          padding: 3.5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .testimonials-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }
        .testimonials-header p {
          font-size: 1.125rem;
          color: var(--slate-600);
          max-width: 500px;
          margin: 0 auto;
        }
        .marquee-row {
          width: 100%;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .testimonials-section:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-left .marquee-track {
          animation-name: marqueeLeft;
          animation-duration: 30s;
        }
        .marquee-right .marquee-track {
          animation-name: marqueeRight;
          animation-duration: 30s;
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .testimonial-card {
          background: white;
          border-radius: 22px;
          padding: 1.1rem 1.1rem;
          border: 1px solid var(--slate-200);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 240px;
          max-width: 300px;
          margin: 0 0.7rem;
        }
        .testimonial-header {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.7rem;
        }

        .testimonial-name {
          font-weight: 600;
          color: var(--slate-900);
          margin: 0;
          font-size: 1rem;
        }
        .testimonial-role {
          font-size: 0.875rem;
          color: #6366f1;
          font-weight: 500;
          margin: 0.25rem 0 0 0;
          background: linear-gradient(135deg, #e0e7ff 0%, #ede9fe 100%);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          display: inline-block;
        }
        .testimonial-content {
          color: var(--slate-600);
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 0.6rem;
          flex-grow: 1;
        }
        .testimonial-rating {
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          margin-top: auto;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 1.5rem 0;
          }
          .testimonials-header h2 {
            font-size: 2rem;
          }
          .testimonial-card {
            min-width: 140px;
            max-width: 180px;
            padding: 0.7rem 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
