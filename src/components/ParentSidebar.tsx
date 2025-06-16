
import React from 'react';
import { 
  Home, 
  Phone, 
  Bell, 
  Calendar, 
  BookOpen,
  CreditCard,
  Settings,
  LogOut
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

interface ParentSidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  onLogout: () => void;
}

const menuItems = [
  { id: 'home', title: 'Trang chủ', icon: Home },
  { id: 'contact', title: 'Thông tin liên hệ', icon: Phone },
  { id: 'notifications', title: 'Thông báo', icon: Bell },
  { id: 'schedule', title: 'Thời khóa biểu', icon: Calendar },
  { id: 'student-results', title: 'Xem kết quả học sinh', icon: BookOpen },
  { id: 'fees', title: 'Đóng quỹ - học phí', icon: CreditCard },
  { id: 'settings', title: 'Cài đặt', icon: Settings },
];

const ParentSidebar: React.FC<ParentSidebarProps> = ({ activeItem, setActiveItem, onLogout }) => {
  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="bg-school-primary p-6">
        <div className="flex flex-col items-center text-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
            <span className="text-school-primary font-bold text-xl">TTH</span>
          </div>
          <h2 className="text-lg font-bold text-center">THPT Tây Tiền Hải</h2>
          <p className="text-sm opacity-90 text-center">Hệ thống phụ huynh</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-school-primary">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      w-full justify-start text-white hover:bg-school-secondary hover:text-white transition-colors
                      ${activeItem === item.id ? 'bg-school-secondary text-white' : ''}
                    `}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="bg-school-primary p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Phone className="h-4 w-4 text-school-primary" />
            </div>
            <span className="text-sm">Nguyễn Văn C</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-white hover:bg-school-secondary hover:text-white p-2"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ParentSidebar;
