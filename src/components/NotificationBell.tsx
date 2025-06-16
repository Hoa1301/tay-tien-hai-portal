
import React, { useState } from 'react';
import { Bell, BellDot, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'feedback' | 'system' | 'approval';
  time: string;
  isRead: boolean;
}

interface NotificationBellProps {
  userRole: 'student' | 'teacher' | 'parent';
}

const NotificationBell: React.FC<NotificationBellProps> = ({ userRole }) => {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    if (userRole === 'student') {
      return [
        {
          id: 1,
          title: 'Phản hồi được chấp nhận',
          message: 'Phản hồi của bạn về đáp án môn Toán đã được giáo viên chấp nhận và đáp án đã được cập nhật.',
          type: 'approval',
          time: '2024-12-16T10:30:00',
          isRead: false
        },
        {
          id: 2,
          title: 'Thông báo hệ thống',
          message: 'Điểm thi giữa kỳ môn Lý đã được cập nhật. Bạn có thể xem chi tiết tại mục "Xem điểm".',
          type: 'system',
          time: '2024-12-15T14:20:00',
          isRead: false
        }
      ];
    } else if (userRole === 'teacher') {
      return [
        {
          id: 1,
          title: 'Phản hồi mới từ học sinh',
          message: 'Học sinh Nguyễn Văn An (Lớp 11A1) đã gửi phản hồi về đáp án môn Toán học kỳ I.',
          type: 'feedback',
          time: '2024-12-16T09:15:00',
          isRead: false
        },
        {
          id: 2,
          title: 'Phản hồi mới từ học sinh',
          message: 'Học sinh Trần Thị Bình (Lớp 11A2) đã gửi phản hồi về đáp án môn Vật lý.',
          type: 'feedback',
          time: '2024-12-15T16:45:00',
          isRead: true
        }
      ];
    }
    return [];
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'feedback':
        return '💬';
      case 'approval':
        return '✅';
      case 'system':
        return '🔔';
      default:
        return '📢';
    }
  };

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays} ngày trước`;
    } else if (diffHours > 0) {
      return `${diffHours} giờ trước`;
    } else {
      return 'Vừa xong';
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {unreadCount > 0 ? (
            <BellDot className="h-5 w-5" />
          ) : (
            <Bell className="h-5 w-5" />
          )}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[70vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>Thông báo hệ thống</DialogTitle>
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={markAllAsRead}
                className="text-xs"
              >
                Đánh dấu tất cả đã đọc
              </Button>
            )}
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto space-y-3">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell className="h-12 w-12 mx-auto mb-2 text-gray-300" />
              <p>Không có thông báo nào</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`cursor-pointer transition-colors ${
                  !notification.isRead ? 'bg-blue-50 border-blue-200' : 'bg-white'
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <div className="text-lg">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className={`text-sm font-medium ${
                          !notification.isRead ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {notification.title}
                        </h4>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatTime(notification.time)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationBell;
