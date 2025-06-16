
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Bell, Clock } from 'lucide-react';

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "Thông báo nghỉ học do thời tiết xấu",
      content: "Do ảnh hưởng của bão số 5, nhà trường thông báo cho học sinh nghỉ học ngày 20/06/2024. Các em theo dõi thông báo tiếp theo về lịch học bù.",
      date: "2024-06-19T14:30:00",
      isRead: false,
      priority: "high"
    },
    {
      id: 2,
      title: "Kế hoạch thi giữa kỳ II năm học 2023-2024",
      content: "Nhà trường thông báo kế hoạch thi giữa kỳ II cho các khối lớp. Thời gian thi từ ngày 25/06 đến 30/06/2024. Các em chuẩn bị ôn tập tốt.",
      date: "2024-06-18T09:00:00",
      isRead: true,
      priority: "medium"
    },
    {
      id: 3,
      title: "Thông báo về việc đóng học phí học kỳ II",
      content: "Các em học sinh cần hoàn thành việc đóng học phí học kỳ II trước ngày 30/06/2024. Liên hệ phòng kế toán để được hỗ trợ.",
      date: "2024-06-17T16:45:00",
      isRead: true,
      priority: "medium"
    },
    {
      id: 4,
      title: "Mở lớp học thêm môn Toán - Lý - Hóa",
      content: "Nhà trường tổ chức lớp học thêm cho học sinh khối 12 chuẩn bị thi THPT Quốc gia. Đăng ký tại phòng đào tạo.",
      date: "2024-06-16T11:20:00",
      isRead: false,
      priority: "low"
    },
    {
      id: 5,
      title: "Cuộc thi sáng tác văn học",
      content: "Phòng Giáo dục tổ chức cuộc thi sáng tác văn học với chủ đề 'Tình yêu quê hương'. Hạn nộp bài: 15/07/2024.",
      date: "2024-06-15T08:15:00",
      isRead: true,
      priority: "low"
    }
  ]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'Quan trọng';
      case 'medium': return 'Bình thường';
      case 'low': return 'Thông tin';
      default: return '';
    }
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Thông báo</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-school-primary">Danh sách thông báo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <Dialog key={notification.id}>
                  <DialogTrigger asChild>
                    <div className={`p-4 border rounded-lg cursor-pointer hover:shadow-md transition-all ${
                      !notification.isRead ? 'bg-blue-50 border-blue-200' : 'bg-white'
                    }`}>
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className={`font-semibold ${
                              !notification.isRead ? 'text-school-primary' : 'text-gray-800'
                            }`}>
                              {notification.title}
                            </h3>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-school-secondary rounded-full"></div>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {formatDate(notification.date)}
                            </div>
                            <Badge className={getPriorityColor(notification.priority)}>
                              {getPriorityText(notification.priority)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-school-primary">
                        {notification.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {formatDate(notification.date)}
                        </div>
                        <Badge className={getPriorityColor(notification.priority)}>
                          {getPriorityText(notification.priority)}
                        </Badge>
                      </div>
                      <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {notification.content}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
