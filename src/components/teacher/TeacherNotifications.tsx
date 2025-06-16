
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const TeacherNotifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNotification, setNewNotification] = useState({
    title: '',
    content: '',
    file: null,
    audience: 'students'
  });

  const notifications = [
    {
      id: 1,
      title: "Thông báo nghỉ học do thời tiết xấu",
      time: "2024-12-15 08:00",
      content: "Do ảnh hưởng của bão số 12, nhà trường quyết định cho học sinh nghỉ học trong ngày 16/12/2024..."
    },
    {
      id: 2,
      title: "Lịch thi cuối kỳ môn Toán",
      time: "2024-12-14 14:30",
      content: "Thông báo lịch thi cuối kỳ môn Toán học kỳ I năm học 2024-2025..."
    },
    {
      id: 3,
      title: "Họp phụ huynh cuối năm",
      time: "2024-12-13 16:00",
      content: "Trường tổ chức buổi họp phụ huynh tổng kết năm học..."
    }
  ];

  const handleCreateNotification = () => {
    console.log('Creating notification:', newNotification);
    setShowCreateForm(false);
    setNewNotification({ title: '', content: '', file: null, audience: 'students' });
  };

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Thông báo</h1>
        <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              + Tạo thông báo mới
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>TẠO THÔNG BÁO MỚI</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Tiêu đề thông báo</Label>
                <Input
                  id="title"
                  value={newNotification.title}
                  onChange={(e) => setNewNotification({...newNotification, title: e.target.value})}
                  placeholder="Nhập tiêu đề thông báo"
                />
              </div>
              <div>
                <Label htmlFor="content">Nội dung thông báo</Label>
                <Textarea
                  id="content"
                  value={newNotification.content}
                  onChange={(e) => setNewNotification({...newNotification, content: e.target.value})}
                  placeholder="Nhập nội dung thông báo"
                  rows={6}
                />
              </div>
              <div>
                <Label htmlFor="file">File đính kèm</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => setNewNotification({...newNotification, file: e.target.files[0]})}
                />
              </div>
              <div>
                <Label>Chọn quyền xem</Label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="audience"
                      value="students"
                      checked={newNotification.audience === 'students'}
                      onChange={(e) => setNewNotification({...newNotification, audience: e.target.value})}
                      className="mr-2"
                    />
                    Học sinh
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="audience"
                      value="parents"
                      checked={newNotification.audience === 'parents'}
                      onChange={(e) => setNewNotification({...newNotification, audience: e.target.value})}
                      className="mr-2"
                    />
                    Phụ huynh
                  </label>
                </div>
              </div>
              <Button onClick={handleCreateNotification} className="w-full bg-blue-600 hover:bg-blue-700">
                Đăng tải thông báo
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

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

export default TeacherNotifications;
