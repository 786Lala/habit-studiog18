import React from 'react';

export default function Journal() {
  // Demo journal UI inspired by Habitify
  return (
    <div style={{maxWidth:'700px',margin:'2rem auto',padding:'2rem',background:'#fff',borderRadius:'20px',boxShadow:'0 8px 32px rgba(0,0,0,0.08)'}}>
      <h2 style={{fontWeight:800,fontSize:'2rem',marginBottom:'1.5rem'}}>Journal</h2>
      <div style={{marginBottom:'2rem'}}>
        <div style={{fontWeight:600,fontSize:'1.1rem',marginBottom:'0.5rem'}}>Today</div>
        <div style={{background:'#f3f4f6',borderRadius:'12px',padding:'1.2rem',marginBottom:'0.5rem'}}>
          <div style={{fontWeight:700}}>Morning Run</div>
          <div style={{color:'#6b7280',fontSize:'0.95rem'}}>Completed at 8:00 AM</div>
        </div>
        <div style={{background:'#f3f4f6',borderRadius:'12px',padding:'1.2rem',marginBottom:'0.5rem'}}>
          <div style={{fontWeight:700}}>Meditate</div>
          <div style={{color:'#6b7280',fontSize:'0.95rem'}}>Completed at 8:30 AM</div>
        </div>
        <div style={{background:'#f3f4f6',borderRadius:'12px',padding:'1.2rem',marginBottom:'0.5rem'}}>
          <div style={{fontWeight:700}}>Plan the day</div>
          <div style={{color:'#6b7280',fontSize:'0.95rem'}}>Completed at 9:00 AM</div>
        </div>
      </div>
      <div>
        <div style={{fontWeight:600,fontSize:'1.1rem',marginBottom:'0.5rem'}}>Yesterday</div>
        <div style={{background:'#f3f4f6',borderRadius:'12px',padding:'1.2rem',marginBottom:'0.5rem'}}>
          <div style={{fontWeight:700}}>Read</div>
          <div style={{color:'#6b7280',fontSize:'0.95rem'}}>Completed at 10:00 AM</div>
        </div>
        <div style={{background:'#f3f4f6',borderRadius:'12px',padding:'1.2rem',marginBottom:'0.5rem'}}>
          <div style={{fontWeight:700}}>Hydrate</div>
          <div style={{color:'#6b7280',fontSize:'0.95rem'}}>Completed at 9:30 AM</div>
        </div>
      </div>
    </div>
  );
}
