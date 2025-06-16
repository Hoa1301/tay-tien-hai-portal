
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const Schedule = () => {
  const scheduleData = [
    // Thứ 2
    { day: 'Thứ 2', session: 'Sáng', period: 1, subject: 'Toán', teacher: 'Thầy Nguyễn Văn A' },
    { day: 'Thứ 2', session: 'Sáng', period: 2, subject: 'Toán', teacher: 'Thầy Nguyễn Văn A' },
    { day: 'Thứ 2', session: 'Sáng', period: 3, subject: 'Văn', teacher: 'Cô Trần Thị B' },
    { day: 'Thứ 2', session: 'Sáng', period: 4, subject: 'Anh', teacher: 'Cô Lê Thị C' },
    { day: 'Thứ 2', session: 'Chiều', period: 1, subject: 'Lý', teacher: 'Thầy Phạm Văn D' },
    { day: 'Thứ 2', session: 'Chiều', period: 2, subject: 'Lý', teacher: 'Thầy Phạm Văn D' },
    { day: 'Thứ 2', session: 'Chiều', period: 3, subject: 'Hóa', teacher: 'Cô Hoàng Thị E' },
    { day: 'Thứ 2', session: 'Chiều', period: 4, subject: 'Sinh', teacher: 'Thầy Võ Văn F' },
    
    // Thứ 3
    { day: 'Thứ 3', session: 'Sáng', period: 1, subject: 'Văn', teacher: 'Cô Trần Thị B' },
    { day: 'Thứ 3', session: 'Sáng', period: 2, subject: 'Văn', teacher: 'Cô Trần Thị B' },
    { day: 'Thứ 3', session: 'Sáng', period: 3, subject: 'Toán', teacher: 'Thầy Nguyễn Văn A' },
    { day: 'Thứ 3', session: 'Sáng', period: 4, subject: 'Sử', teacher: 'Cô Đỗ Thị G' },
    { day: 'Thứ 3', session: 'Chiều', period: 1, subject: 'Địa', teacher: 'Thầy Bùi Văn H' },
    { day: 'Thứ 3', session: 'Chiều', period: 2, subject: 'Anh', teacher: 'Cô Lê Thị C' },
    { day: 'Thứ 3', session: 'Chiều', period: 3, subject: 'Thể dục', teacher: 'Thầy Mai Văn I' },
    { day: 'Thứ 3', session: 'Chiều', period: 4, subject: 'Thể dục', teacher: 'Thầy Mai Văn I' },
    
    // Thứ 4
    { day: 'Thứ 4', session: 'Sáng', period: 1, subject: 'Hóa', teacher: 'Cô Hoàng Thị E' },
    { day: 'Thứ 4', session: 'Sáng', period: 2, subject: 'Hóa', teacher: 'Cô Hoàng Thị E' },
    { day: 'Thứ 4', session: 'Sáng', period: 3, subject: 'Toán', teacher: 'Thầy Nguyễn Văn A' },
    { day: 'Thứ 4', session: 'Sáng', period: 4, subject: 'Anh', teacher: 'Cô Lê Thị C' },
    { day: 'Thứ 4', session: 'Chiều', period: 1, subject: 'Văn', teacher: 'Cô Trần Thị B' },
    { day: 'Thứ 4', session: 'Chiều', period: 2, subject: 'Lý', teacher: 'Thầy Phạm Văn D' },
    { day: 'Thứ 4', session: 'Chiều', period: 3, subject: 'Sinh', teacher: 'Thầy Võ Văn F' },
    { day: 'Thứ 4', session: 'Chiều', period: 4, subject: 'GDCD', teacher: 'Cô Ngô Thị J' },

    // Thứ 5
    { day: 'Thứ 5', session: 'Sáng', period: 1, subject: 'Lý', teacher: 'Thầy Phạm Văn D' },
    { day: 'Thứ 5', session: 'Sáng', period: 2, subject: 'Lý', teacher: 'Thầy Phạm Văn D' },
    { day: 'Thứ 5', session: 'Sáng', period: 3, subject: 'Toán', teacher: 'Thầy Nguyễn Văn A' },
    { day: 'Thứ 5', session: 'Sáng', period: 4, subject: 'Văn', teacher: 'Cô Trần Thị B' },
    { day: 'Thứ 5', session: 'Chiều', period: 1, subject: 'Anh', teacher: 'Cô Lê Thị C' },
    { day: 'Thứ 5', session: 'Chiều', period: 2, subject: 'Hóa', teacher: 'Cô Hoàng Thị E' },
    { day: 'Thứ 5', session: 'Chiều', period: 3, subject: 'Tin học', teacher: 'Thầy Lý Văn K' },
    { day: 'Thứ 5', session: 'Chiều', period: 4, subject: 'Tin học', teacher: 'Thầy Lý Văn K' },

    // Thứ 6
    { day: 'Thứ 6', session: 'Sáng', period: 1, subject: 'Sinh', teacher: 'Thầy Võ Văn F' },
    { day: 'Thứ 6', session: 'Sáng', period: 2, subject: 'Toán', teacher: 'Thầy Nguyễn Văn A' },
    { day: 'Thứ 6', session: 'Sáng', period: 3, subject: 'Văn', teacher: 'Cô Trần Thị B' },
    { day: 'Thứ 6', session: 'Sáng', period: 4, subject: 'Anh', teacher: 'Cô Lê Thị C' },
    { day: 'Thứ 6', session: 'Chiều', period: 1, subject: 'Sử', teacher: 'Cô Đỗ Thị G' },
    { day: 'Thứ 6', session: 'Chiều', period: 2, subject: 'Địa', teacher: 'Thầy Bùi Văn H' },
    { day: 'Thứ 6', session: 'Chiều', period: 3, subject: 'GDCD', teacher: 'Cô Ngô Thị J' },
    { day: 'Thứ 6', session: 'Chiều', period: 4, subject: 'Nghiên cứu', teacher: 'Cô Trần Thị B' },
  ];

  const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6'];
  const sessions = ['Sáng', 'Chiều'];
  const periods = [1, 2, 3, 4];

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      'Toán': 'bg-blue-100 text-blue-800',
      'Văn': 'bg-green-100 text-green-800',
      'Anh': 'bg-purple-100 text-purple-800',
      'Lý': 'bg-red-100 text-red-800',
      'Hóa': 'bg-yellow-100 text-yellow-800',
      'Sinh': 'bg-emerald-100 text-emerald-800',
      'Sử': 'bg-orange-100 text-orange-800',
      'Địa': 'bg-teal-100 text-teal-800',
      'GDCD': 'bg-pink-100 text-pink-800',
      'Thể dục': 'bg-indigo-100 text-indigo-800',
      'Tin học': 'bg-cyan-100 text-cyan-800',
      'Nghiên cứu': 'bg-gray-100 text-gray-800'
    };
    return colors[subject] || 'bg-gray-100 text-gray-800';
  };

  const getScheduleItem = (day: string, session: string, period: number) => {
    return scheduleData.find(item => 
      item.day === day && item.session === session && item.period === period
    );
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Thời khóa biểu</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-school-primary">Lớp 11A1 - Tuần học từ 17/06 đến 22/06/2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-20">Thứ</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-20">Buổi</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-16">Tiết</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-32">Môn học</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-48">Giáo viên</th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((day) => (
                    sessions.map((session) => (
                      periods.map((period, periodIndex) => {
                        const scheduleItem = getScheduleItem(day, session, period);
                        const isFirstPeriodOfSession = period === 1;
                        const isFirstSession = session === 'Sáng';
                        
                        return (
                          <tr key={`${day}-${session}-${period}`} className="hover:bg-gray-50">
                            {/* Day column - only show on first period of morning session */}
                            {isFirstSession && isFirstPeriodOfSession && (
                              <td 
                                className="border p-3 bg-school-light text-school-primary font-semibold text-center align-middle"
                                rowSpan={8} // 2 sessions × 4 periods
                              >
                                {day}
                              </td>
                            )}
                            {/* Session column - only show on first period of each session */}
                            {isFirstPeriodOfSession && (
                              <td 
                                className="border p-3 bg-gray-50 text-gray-700 font-medium text-center align-middle"
                                rowSpan={4} // 4 periods per session
                              >
                                {session}
                              </td>
                            )}
                            {/* Period column */}
                            <td className="border p-3 text-center font-medium">{period}</td>
                            {/* Subject column */}
                            <td className="border p-3 text-center">
                              {scheduleItem && (
                                <span className={`px-2 py-1 rounded text-sm font-medium ${getSubjectColor(scheduleItem.subject)}`}>
                                  {scheduleItem.subject}
                                </span>
                              )}
                            </td>
                            {/* Teacher column */}
                            <td className="border p-3 text-center text-sm">
                              {scheduleItem?.teacher}
                            </td>
                          </tr>
                        );
                      })
                    ))
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-school-primary mb-2">Ghi chú:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Buổi sáng: 7h00 - 11h30 (Tiết 1-4)</li>
                <li>• Buổi chiều: 13h30 - 17h00 (Tiết 1-4)</li>
                <li>• Nghỉ giữa tiết: 10 phút</li>
                <li>• Nghỉ trưa: 11h30 - 13h30</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
