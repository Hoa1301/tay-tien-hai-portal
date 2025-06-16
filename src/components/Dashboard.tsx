
import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './AppSidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Schedule from './pages/Schedule';
import ExamSchedule from './pages/ExamSchedule';
import AnswerKey from './pages/AnswerKey';
import Grades from './pages/Grades';
import LeaveRequest from './pages/LeaveRequest';
import Fees from './pages/Fees';
import UniversitySearch from './pages/UniversitySearch';
import Settings from './pages/Settings';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('home');

  const renderContent = () => {
    switch (activeItem) {
      case 'home': return <Home />;
      case 'profile': return <Profile />;
      case 'notifications': return <Notifications />;
      case 'schedule': return <Schedule />;
      case 'exam-schedule': return <ExamSchedule />;
      case 'answer-key': return <AnswerKey />;
      case 'grades': return <Grades />;
      case 'leave-request': return <LeaveRequest />;
      case 'fees': return <Fees />;
      case 'university-search': return <UniversitySearch />;
      case 'settings': return <Settings />;
      default: return <Home />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
          onLogout={onLogout}
        />
        <main className="flex-1 overflow-hidden">
          <div className="md:hidden p-4 bg-white shadow-sm">
            <SidebarTrigger />
          </div>
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
