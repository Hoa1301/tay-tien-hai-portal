
import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import ParentSidebar from './ParentSidebar';
import NotificationBell from './NotificationBell';
import ParentHome from './parent/ParentHome';
import ParentContact from './parent/ParentContact';
import ParentNotifications from './parent/ParentNotifications';
import ParentSchedule from './parent/ParentSchedule';
import ParentStudentResults from './parent/ParentStudentResults';
import ParentFees from './parent/ParentFees';
import ParentSettings from './parent/ParentSettings';

interface ParentDashboardProps {
  onLogout: () => void;
}

const ParentDashboard: React.FC<ParentDashboardProps> = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('home');

  const renderContent = () => {
    switch (activeItem) {
      case 'home': return <ParentHome />;
      case 'contact': return <ParentContact />;
      case 'notifications': return <ParentNotifications />;
      case 'schedule': return <ParentSchedule />;
      case 'student-results': return <ParentStudentResults />;
      case 'fees': return <ParentFees />;
      case 'settings': return <ParentSettings />;
      default: return <ParentHome />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <ParentSidebar 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
          onLogout={onLogout}
        />
        <main className="flex-1 overflow-hidden">
          <div className="md:hidden p-4 bg-white shadow-sm flex justify-between items-center">
            <SidebarTrigger />
            <NotificationBell userRole="parent" />
          </div>
          <div className="hidden md:block absolute top-4 right-4 z-10">
            <NotificationBell userRole="parent" />
          </div>
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ParentDashboard;
