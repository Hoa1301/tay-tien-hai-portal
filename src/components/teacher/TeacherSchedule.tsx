
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TeacherSchedule = () => {
  const schedule = [
    { day: 'Thứ 2', session: 'Sáng', period: 1, class: '10A1' },
    { day: 'Thứ 2', session: 'Sáng', period: 2, class: '10A1' },
    { day: 'Thứ 2', session: 'Chiều', period: 1, class: '10A2' },
    { day: 'Thứ 3', session: 'Sáng', period: 3, class: '10A1' },
    { day: 'Thứ 3', session: 'Chiều', period: 2, class: '10A3' },
    { day: 'Thứ 4', session: 'Sáng', period: 1, class: '10A1' },
    { day: 'Thứ 4', session: 'Sáng', period: 4, class: '10A2' },
    { day: 'Thứ 5', session: 'Sáng', period: 2, class: '10A1' },
    { day: 'Thứ 5', session: 'Chiều', period: 3, class: '10A3' },
    { day: 'Thứ 6', session: 'Sáng', period: 1, class: '10A2' },
  ];

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Lịch dạy</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Thời khóa biểu giảng dạy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Thứ</th>
                  <th className="border border-gray-300 p-3 text-left">Buổi</th>
                  <th className="border border-gray-300 p-3 text-left">Tiết</th>
                  <th className="border border-gray-300 p-3 text-left">Lớp</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">{item.day}</td>
                    <td className="border border-gray-300 p-3">{item.session}</td>
                    <td className="border border-gray-300 p-3">Tiết {item.period}</td>
                    <td className="border border-gray-300 p-3">{item.class}</td>
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

export default TeacherSchedule;
