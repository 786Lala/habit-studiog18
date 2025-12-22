
import React from "react";
import AddHabit from "../components/AddHabit";

const DashboardPage = ({
  onAdd,
  existingCategories
}) => {
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-content-wrapper" style={{ minHeight: 180, paddingTop: '3.5rem', paddingBottom: '3rem' }}>
        <AddHabit onAdd={onAdd} existingCategories={existingCategories} />
      </div>
    </div>
  );
};

export default DashboardPage;
