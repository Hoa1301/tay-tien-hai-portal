
import React, { useState } from 'react';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import ParentDashboard from '../components/ParentDashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role: string) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  const renderDashboard = () => {
    switch (userRole) {
      case 'student':
        return <Dashboard onLogout={handleLogout} />;
      case 'teacher':
        return <TeacherDashboard onLogout={handleLogout} />;
      case 'parent':
        return <ParentDashboard onLogout={handleLogout} />;
      default:
        return <Dashboard onLogout={handleLogout} />;
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        renderDashboard()
      )}
    </>
  );
};

export default Index;
