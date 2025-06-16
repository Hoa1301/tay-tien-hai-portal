
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ParentSchedule = () => {
  const schedule = [
    { day: 'Thứ 2', session: 'Sáng', period: 1, subject: 'Toán học', teacher: 'Nguyễn Thị B' },
    { day: 'Thứ 2', session: 'Sáng', period: 2, subject: 'Văn học', teacher: 'Trần Văn C' },
    { day: 'Thứ 2', session: 'Sáng', period: 3, subject: 'Tiếng Anh', teacher: 'Lê Thị D' },
    { day: 'Thứ 2', session: 'Sáng', period: 4, subject: 'Vật lý', teacher: 'Phạm Văn E' },
    { day: 'Thứ 2', session: 'Chiều', period: 1, subject: 'Hóa học', teacher: 'Hoàng Thị F' },
    { day: 'Thứ 2', session: 'Chiều', period: 2, subject: 'Sinh học', teacher: 'Vũ Văn G' },
    { day: 'Thứ 3', session: 'Sáng', period: 1, subject: 'Lịch sử', teacher: 'Đỗ Thị H' },
    { day: 'Thứ 3', session: 'Sáng', period: 2, subject: 'Địa lý', teacher: 'Ngô Văn I' },
    { day: 'Thứ 3', session: 'Sáng', period: 3, subject: 'Toán học', teacher: 'Nguyễn Thị B' },
    { day: 'Thứ 3', session: 'Sáng', period: 4, subject: 'Văn học', teacher: 'Trần Văn C' }
  ];

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Thời khóa biểu</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Thời khóa biểu học sinh</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Thứ</th>
                  <th className="border border-gray-300 p-3 text-left">Buổi</th>
                  <th className="border border-gray-300 p-3 text-left">Tiết</th>
                  <th className="border border-gray-300 p-3 text-left">Môn học</th>
                  <th className="border border-gray-300 p-3 text-left">Giáo viên</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">{item.day}</td>
                    <td className="border border-gray-300 p-3">{item.session}</td>
                    <td className="border border-gray-300 p-3">Tiết {item.period}</td>
                    <td className="border border-gray-300 p-3">{item.subject}</td>
                    <td className="border border-gray-300 p-3">{item.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentSchedule;
