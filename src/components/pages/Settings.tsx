
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { Settings as SettingsIcon, Key, Bell, User, Save } from 'lucide-react';

const Settings = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    gradeUpdates: true,
    scheduleChanges: true,
    announcements: true
  });

  const [profileSettings, setProfileSettings] = useState({
    showPhoneNumber: true,
    showEmail: true,
    allowMessages: true
  });

  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive"
      });
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Mật khẩu mới và xác nhận mật khẩu không khớp",
        variant: "destructive"
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast({
        title: "Lỗi",
        description: "Mật khẩu mới phải có ít nhất 6 ký tự",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate password change
    setTimeout(() => {
      toast({
        title: "Thành công",
        description: "Mật khẩu đã được thay đổi thành công",
      });
      
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      setIsLoading(false);
    }, 1000);
  };

  const handleNotificationSave = () => {
    toast({
      title: "Đã lưu",
      description: "Cài đặt thông báo đã được cập nhật",
    });
  };

  const handleProfileSave = () => {
    toast({
      title: "Đã lưu",
      description: "Cài đặt quyền riêng tư đã được cập nhật",
    });
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <SettingsIcon className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Cài đặt</h1>
        </div>

        <div className="space-y-6">
          {/* Đổi mật khẩu */}
          <Card>
            <CardHeader>
              <CardTitle className="text-school-primary flex items-center gap-2">
                <Key className="h-5 w-5" />
                Đổi mật khẩu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData(prev => ({
                        ...prev,
                        currentPassword: e.target.value
                      }))}
                      placeholder="Nhập mật khẩu hiện tại"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">Mật khẩu mới</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData(prev => ({
                        ...prev,
                        newPassword: e.target.value
                      }))}
                      placeholder="Nhập mật khẩu mới"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData(prev => ({
                        ...prev,
                        confirmPassword: e.target.value
                      }))}
                      placeholder="Nhập lại mật khẩu mới"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="bg-school-primary hover:bg-school-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang cập nhật..." : "Đổi mật khẩu"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Cài đặt thông báo */}
          <Card>
            <CardHeader>
              <CardTitle className="text-school-primary flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Cài đặt thông báo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Thông báo qua email</Label>
                  <p className="text-sm text-gray-600">Nhận thông báo qua email</p>
                </div>
                <Switch
                  checked={notifications.emailNotifications}
                  onCheckedChange={(checked) => setNotifications(prev => ({
                    ...prev,
                    emailNotifications: checked
                  }))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Thông báo cập nhật điểm</Label>
                  <p className="text-sm text-gray-600">Thông báo khi có điểm mới</p>
                </div>
                <Switch
                  checked={notifications.gradeUpdates}
                  onCheckedChange={(checked) => setNotifications(prev => ({
                    ...prev,
                    gradeUpdates: checked
                  }))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Thay đổi thời khóa biểu</Label>
                  <p className="text-sm text-gray-600">Thông báo khi thời khóa biểu thay đổi</p>
                </div>
                <Switch
                  checked={notifications.scheduleChanges}
                  onCheckedChange={(checked) => setNotifications(prev => ({
                    ...prev,
                    scheduleChanges: checked
                  }))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Thông báo chung</Label>
                  <p className="text-sm text-gray-600">Thông báo từ nhà trường</p>
                </div>
                <Switch
                  checked={notifications.announcements}
                  onCheckedChange={(checked) => setNotifications(prev => ({
                    ...prev,
                    announcements: checked
                  }))}
                />
              </div>
              
              <Button 
                onClick={handleNotificationSave}
                className="bg-school-primary hover:bg-school-dark"
              >
                <Save className="h-4 w-4 mr-2" />
                Lưu cài đặt thông báo
              </Button>
            </CardContent>
          </Card>

          {/* Quyền riêng tư */}
          <Card>
            <CardHeader>
              <CardTitle className="text-school-primary flex items-center gap-2">
                <User className="h-5 w-5" />
                Quyền riêng tư
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Hiển thị số điện thoại</Label>
                  <p className="text-sm text-gray-600">Cho phép hiển thị số điện thoại trong hồ sơ</p>
                </div>
                <Switch
                  checked={profileSettings.showPhoneNumber}
                  onCheckedChange={(checked) => setProfileSettings(prev => ({
                    ...prev,
                    showPhoneNumber: checked
                  }))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Hiển thị email</Label>
                  <p className="text-sm text-gray-600">Cho phép hiển thị email trong hồ sơ</p>
                </div>
                <Switch
                  checked={profileSettings.showEmail}
                  onCheckedChange={(checked) => setProfileSettings(prev => ({
                    ...prev,
                    showEmail: checked
                  }))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Cho phép nhận tin nhắn</Label>
                  <p className="text-sm text-gray-600">Cho phép nhận tin nhắn từ giáo viên và bạn học</p>
                </div>
                <Switch
                  checked={profileSettings.allowMessages}
                  onCheckedChange={(checked) => setProfileSettings(prev => ({
                    ...prev,
                    allowMessages: checked
                  }))}
                />
              </div>
              
              <Button 
                onClick={handleProfileSave}
                className="bg-school-primary hover:bg-school-dark"
              >
                <Save className="h-4 w-4 mr-2" />
                Lưu cài đặt quyền riêng tư
              </Button>
            </CardContent>
          </Card>

          {/* Thông tin hệ thống */}
          <Card>
            <CardHeader>
              <CardTitle className="text-school-primary">Thông tin hệ thống</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <Label>Phiên bản hệ thống</Label>
                  <p className="text-gray-600">v2.1.0</p>
                </div>
                <div>
                  <Label>Cập nhật lần cuối</Label>
                  <p className="text-gray-600">15/06/2024</p>
                </div>
                <div>
                  <Label>Hỗ trợ kỹ thuật</Label>
                  <p className="text-gray-600">support@tth.edu.vn</p>
                </div>
                <div>
                  <Label>Hotline</Label>
                  <p className="text-gray-600">(024) 3856 7891</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
