import React from 'react';

export default function ConfirmDialog({ open, title, message, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="confirm-dialog-backdrop">
      <div className="confirm-dialog">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="confirm-dialog-actions">
          <button className="confirm-btn" onClick={onConfirm}>Yes</button>
          <button className="cancel-btn" onClick={onCancel}>No</button>
        </div>
      </div>
      <style jsx>{`
        .confirm-dialog-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.18);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .confirm-dialog {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px 0 rgba(160, 180, 200, 0.18);
          padding: 2rem 2.5rem;
          min-width: 320px;
          max-width: 90vw;
          text-align: center;
        }
        .confirm-dialog-actions {
          margin-top: 1.5rem;
          display: flex;
          gap: 1.2rem;
          justify-content: center;
        }
        .confirm-btn {
          background: #e57373;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1.2rem;
          font-weight: 700;
          cursor: pointer;
        }
        .cancel-btn {
          background: #f8fafc;
          color: #22223b;
          border: 1px solid #b5b5b5;
          border-radius: 6px;
          padding: 0.5rem 1.2rem;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
