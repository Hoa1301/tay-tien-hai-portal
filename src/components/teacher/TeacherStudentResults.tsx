
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TeacherStudentResults = () => {
  const [selectedClass, setSelectedClass] = useState('10A1');
  const [selectedScoreType, setSelectedScoreType] = useState('average');

  const classes = ['10A1', '10A2', '10A3', '11A1', '11A2', '12A1'];
  const scoreTypes = [
    { value: 'average', label: 'Điểm trung bình' },
    { value: 'oral', label: 'Điểm miệng' },
    { value: 'test15', label: 'Điểm 15 phút' },
    { value: 'test45', label: 'Điểm 45 phút' },
    { value: 'final', label: 'Điểm cuối kỳ' }
  ];

  const chartData = [
    { name: 'Nguyễn Văn An', score: 8.2 },
    { name: 'Trần Thị Bình', score: 9.0 },
    { name: 'Lê Hoàng Cường', score: 7.3 },
    { name: 'Phạm Thị Dung', score: 8.5 },
    { name: 'Hoàng Văn Em', score: 7.8 },
    { name: 'Vũ Thị Phương', score: 9.2 },
    { name: 'Đỗ Văn Giang', score: 6.9 },
    { name: 'Ngô Thị Hoa', score: 8.7 }
  ];

  const statistics = {
    highest: 9.2,
    lowest: 6.9,
    average: 8.2,
    totalStudents: 8
  };

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Xem kết quả học sinh</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Điểm cao nhất</p>
              <p className="text-2xl font-bold text-green-600">{statistics.highest}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Điểm thấp nhất</p>
              <p className="text-2xl font-bold text-red-600">{statistics.lowest}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Điểm trung bình</p>
              <p className="text-2xl font-bold text-blue-600">{statistics.average}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Tổng số học sinh</p>
              <p className="text-2xl font-bold text-purple-600">{statistics.totalStudents}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Biểu đồ xếp hạng học sinh</CardTitle>
            <div className="flex space-x-4">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(cls => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedScoreType} onValueChange={setSelectedScoreType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {scoreTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
              />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="score" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherStudentResults;
