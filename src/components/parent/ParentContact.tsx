
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ParentContact = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Nguyễn Văn C',
    gender: 'Nam',
    birthDate: '1980-08-20',
    birthPlace: 'Hà Nội',
    address: '456 Đường DEF, Quận ABC, Hà Nội',
    ethnicity: 'Kinh'
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saved profile:', profile);
  };

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Thông tin liên hệ</h1>
      
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Thông tin phụ huynh</span>
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">
                Cập nhật
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-4xl text-gray-500">👨‍💼</span>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Thông tin cá nhân</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Họ tên</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="gender">Giới tính</Label>
                <Select value={profile.gender} onValueChange={(value) => setProfile({...profile, gender: value})} disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nam">Nam</SelectItem>
                    <SelectItem value="Nữ">Nữ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="birthDate">Ngày sinh</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={profile.birthDate}
                  onChange={(e) => setProfile({...profile, birthDate: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="birthPlace">Nơi sinh</Label>
                <Input
                  id="birthPlace"
                  value={profile.birthPlace}
                  onChange={(e) => setProfile({...profile, birthPlace: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Địa chỉ liên lạc</Label>
                <Input
                  id="address"
                  value={profile.address}
                  onChange={(e) => setProfile({...profile, address: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="ethnicity">Dân tộc</Label>
                <Input
                  id="ethnicity"
                  value={profile.ethnicity}
                  onChange={(e) => setProfile({...profile, ethnicity: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="flex space-x-4 pt-4">
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                Lưu
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Hủy
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentContact;
