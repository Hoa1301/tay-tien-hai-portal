
import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import TeacherSidebar from './TeacherSidebar';
import TeacherHome from './teacher/TeacherHome';
import TeacherProfile from './teacher/TeacherProfile';
import TeacherNotifications from './teacher/TeacherNotifications';
import TeacherSchedule from './teacher/TeacherSchedule';
import TeacherClassManagement from './teacher/TeacherClassManagement';
import TeacherAnswerKey from './teacher/TeacherAnswerKey';
import TeacherStudentResults from './teacher/TeacherStudentResults';
import TeacherSettings from './teacher/TeacherSettings';

interface TeacherDashboardProps {
  onLogout: () => void;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('home');

  const renderContent = () => {
    switch (activeItem) {
      case 'home': return <TeacherHome />;
      case 'profile': return <TeacherProfile />;
      case 'notifications': return <TeacherNotifications />;
      case 'schedule': return <TeacherSchedule />;
      case 'class-management': return <TeacherClassManagement />;
      case 'answer-key': return <TeacherAnswerKey />;
      case 'student-results': return <TeacherStudentResults />;
      case 'settings': return <TeacherSettings />;
      default: return <TeacherHome />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <TeacherSidebar 
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

export default TeacherDashboard;
