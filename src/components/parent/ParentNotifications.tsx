
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ParentNotifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    {
      id: 1,
      title: "Thông báo họp phụ huynh cuối năm",
      time: "2024-12-15 08:00",
      content: "Nhà trường tổ chức buổi họp phụ huynh tổng kết năm học 2024-2025. Thời gian: 8h00 ngày 20/12/2024 tại hội trường trường."
    },
    {
      id: 2,
      title: "Thông báo lịch nghỉ Tết Nguyên đán",
      time: "2024-12-14 14:30",
      content: "Học sinh được nghỉ Tết Nguyên đán từ ngày 25/01/2025 đến hết ngày 02/02/2025. Ngày khai giảng lại: 03/02/2025."
    },
    {
      id: 3,
      title: "Kết quả học tập kỳ I",
      time: "2024-12-13 16:00",
      content: "Kết quả học tập kỳ I của các em đã được cập nhật. Phụ huynh có thể xem chi tiết tại mục 'Xem kết quả học sinh'."
    }
  ];

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Thông báo</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Danh sách thông báo */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách thông báo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedNotification(notification)}
                >
                  <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chi tiết thông báo */}
        <Card>
          <CardHeader>
            <CardTitle>Chi tiết thông báo</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedNotification ? (
              <div>
                <h3 className="font-semibold text-lg mb-2">{selectedNotification.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{selectedNotification.time}</p>
                <p className="text-gray-700">{selectedNotification.content}</p>
              </div>
            ) : (
              <p className="text-gray-500">Chọn một thông báo để xem chi tiết</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentNotifications;
