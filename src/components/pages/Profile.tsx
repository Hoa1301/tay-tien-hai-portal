
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import { User, Edit, Save, X } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    // Thông tin cá nhân
    fullName: 'Nguyễn Văn An',
    gender: 'Nam',
    birthDate: '2007-05-15',
    birthPlace: 'Hà Nội',
    address: '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM',
    ethnicity: 'Kinh',
    
    // Thông tin học tập
    class: '11A1',
    unionMember: '2023-09-01',
    conduct: 'Tốt',
    homeRoomTeacher: 'Cô Nguyễn Thị Bình',
    enrollmentDate: '2022-09-05',
    currentGrade: 'Giỏi',
    
    // Thông tin liên lạc
    fatherName: 'Nguyễn Văn Ba',
    fatherPhone: '0912345678',
    motherName: 'Trần Thị Cẩm',
    motherPhone: '0987654321'
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    toast({
      title: "Cập nhật thành công",
      description: "Thông tin cá nhân đã được cập nhật",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-school-primary">Thông tin cá nhân</h1>
          {!isEditing ? (
            <Button onClick={handleEdit} className="bg-school-primary hover:bg-school-dark">
              <Edit className="h-4 w-4 mr-2" />
              Cập nhật
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Lưu
              </Button>
              <Button onClick={handleCancel} variant="outline">
                <X className="h-4 w-4 mr-2" />
                Hủy
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Avatar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl bg-school-primary text-white">
                    <User className="h-16 w-16" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-school-primary">{profileData.fullName}</h3>
                <p className="text-gray-600">{profileData.class}</p>
              </CardContent>
            </Card>
          </div>

          {/* Thông tin chi tiết */}
          <div className="lg:col-span-2 space-y-6">
            {/* Thông tin cá nhân */}
            <Card>
              <CardHeader>
                <CardTitle className="text-school-primary">Thông tin cá nhân</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Họ và tên</Label>
                  {isEditing ? (
                    <Input
                      value={editData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.fullName}</p>
                  )}
                </div>
                <div>
                  <Label>Giới tính</Label>
                  {isEditing ? (
                    <Select value={editData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Nam">Nam</SelectItem>
                        <SelectItem value="Nữ">Nữ</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.gender}</p>
                  )}
                </div>
                <div>
                  <Label>Ngày sinh</Label>
                  {isEditing ? (
                    <Input
                      type="date"
                      value={editData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{new Date(profileData.birthDate).toLocaleDateString('vi-VN')}</p>
                  )}
                </div>
                <div>
                  <Label>Nơi sinh</Label>
                  {isEditing ? (
                    <Input
                      value={editData.birthPlace}
                      onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.birthPlace}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Label>Địa chỉ liên lạc</Label>
                  {isEditing ? (
                    <Input
                      value={editData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.address}</p>
                  )}
                </div>
                <div>
                  <Label>Dân tộc</Label>
                  {isEditing ? (
                    <Input
                      value={editData.ethnicity}
                      onChange={(e) => handleInputChange('ethnicity', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.ethnicity}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Thông tin học tập */}
            <Card>
              <CardHeader>
                <CardTitle className="text-school-primary">Thông tin học tập</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Lớp</Label>
                  <p className="p-2 bg-gray-50 rounded">{profileData.class}</p>
                </div>
                <div>
                  <Label>Đoàn viên (ngày kết nạp)</Label>
                  <p className="p-2 bg-gray-50 rounded">{new Date(profileData.unionMember).toLocaleDateString('vi-VN')}</p>
                </div>
                <div>
                  <Label>Hạnh kiểm</Label>
                  <p className="p-2 bg-gray-50 rounded">{profileData.conduct}</p>
                </div>
                <div>
                  <Label>Giáo viên chủ nhiệm</Label>
                  <p className="p-2 bg-gray-50 rounded">{profileData.homeRoomTeacher}</p>
                </div>
                <div>
                  <Label>Ngày nhập học</Label>
                  <p className="p-2 bg-gray-50 rounded">{new Date(profileData.enrollmentDate).toLocaleDateString('vi-VN')}</p>
                </div>
                <div>
                  <Label>Học lực hiện tại</Label>
                  <p className="p-2 bg-gray-50 rounded">{profileData.currentGrade}</p>
                </div>
              </CardContent>
            </Card>

            {/* Thông tin liên lạc */}
            <Card>
              <CardHeader>
                <CardTitle className="text-school-primary">Thông tin liên lạc</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Họ tên bố</Label>
                  {isEditing ? (
                    <Input
                      value={editData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.fatherName}</p>
                  )}
                </div>
                <div>
                  <Label>Số điện thoại bố</Label>
                  {isEditing ? (
                    <Input
                      value={editData.fatherPhone}
                      onChange={(e) => handleInputChange('fatherPhone', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.fatherPhone}</p>
                  )}
                </div>
                <div>
                  <Label>Họ tên mẹ</Label>
                  {isEditing ? (
                    <Input
                      value={editData.motherName}
                      onChange={(e) => handleInputChange('motherName', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.motherName}</p>
                  )}
                </div>
                <div>
                  <Label>Số điện thoại mẹ</Label>
                  {isEditing ? (
                    <Input
                      value={editData.motherPhone}
                      onChange={(e) => handleInputChange('motherPhone', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded">{profileData.motherPhone}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
