
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Clock, Calendar } from 'lucide-react';

const ExamSchedule = () => {
  const [examSchedules] = useState([
    {
      id: 1,
      title: "Thi cuối kỳ I - Năm học 2023-2024",
      date: "2024-01-15",
      exams: [
        { subject: "Toán", date: "15/01/2024", time: "07:30 - 09:30", room: "Phòng 201", examId: "001" },
        { subject: "Văn", date: "16/01/2024", time: "07:30 - 10:30", room: "Phòng 201", examId: "002" },
        { subject: "Anh", date: "17/01/2024", time: "07:30 - 09:00", room: "Phòng 201", examId: "003" },
        { subject: "Lý", date: "18/01/2024", time: "07:30 - 09:30", room: "Phòng 201", examId: "004" },
        { subject: "Hóa", date: "19/01/2024", time: "07:30 - 09:30", room: "Phòng 201", examId: "005" },
        { subject: "Sinh", date: "20/01/2024", time: "07:30 - 09:30", room: "Phòng 201", examId: "006" }
      ]
    },
    {
      id: 2,
      title: "Thi giữa kỳ II - Năm học 2023-2024",
      date: "2024-03-20",
      exams: [
        { subject: "Toán", date: "20/03/2024", time: "07:30 - 09:30", room: "Phòng 205", examId: "007" },
        { subject: "Văn", date: "21/03/2024", time: "07:30 - 10:30", room: "Phòng 205", examId: "008" },
        { subject: "Anh", date: "22/03/2024", time: "07:30 - 09:00", room: "Phòng 205", examId: "009" },
        { subject: "Lý", date: "23/03/2024", time: "07:30 - 09:30", room: "Phòng 205", examId: "010" },
        { subject: "Hóa", date: "24/03/2024", time: "07:30 - 09:30", room: "Phòng 205", examId: "011" }
      ]
    },
    {
      id: 3,
      title: "Thi cuối kỳ II - Năm học 2023-2024",
      date: "2024-06-25",
      exams: [
        { subject: "Toán", date: "25/06/2024", time: "07:30 - 09:30", room: "Phòng 203", examId: "012" },
        { subject: "Văn", date: "26/06/2024", time: "07:30 - 10:30", room: "Phòng 203", examId: "013" },
        { subject: "Anh", date: "27/06/2024", time: "07:30 - 09:00", room: "Phòng 203", examId: "014" },
        { subject: "Lý", date: "28/06/2024", time: "07:30 - 09:30", room: "Phòng 203", examId: "015" },
        { subject: "Hóa", date: "29/06/2024", time: "07:30 - 09:30", room: "Phòng 203", examId: "016" },
        { subject: "Sinh", date: "30/06/2024", time: "07:30 - 09:30", room: "Phòng 203", examId: "017" }
      ]
    }
  ]);

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      'Toán': 'bg-blue-100 text-blue-800',
      'Văn': 'bg-green-100 text-green-800',
      'Anh': 'bg-purple-100 text-purple-800',
      'Lý': 'bg-red-100 text-red-800',
      'Hóa': 'bg-yellow-100 text-yellow-800',
      'Sinh': 'bg-emerald-100 text-emerald-800'
    };
    return colors[subject] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Lịch thi</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-school-primary">Danh sách lịch thi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {examSchedules.map((schedule) => (
                <Dialog key={schedule.id}>
                  <DialogTrigger asChild>
                    <div className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-school-primary">{schedule.title}</h3>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{new Date(schedule.date).toLocaleDateString('vi-VN')}</span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-school-primary">
                        {schedule.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr>
                              <th className="border p-3 bg-school-primary text-white font-semibold text-left">Môn thi</th>
                              <th className="border p-3 bg-school-primary text-white font-semibold text-left">Thời gian thi</th>
                              <th className="border p-3 bg-school-primary text-white font-semibold text-left">Phòng thi</th>
                              <th className="border p-3 bg-school-primary text-white font-semibold text-left">Số báo danh</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schedule.exams.map((exam, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="border p-3">
                                  <span className={`px-2 py-1 rounded text-sm font-medium ${getSubjectColor(exam.subject)}`}>
                                    {exam.subject}
                                  </span>
                                </td>
                                <td className="border p-3">
                                  <div>
                                    <div className="font-medium">{exam.date}</div>
                                    <div className="text-sm text-gray-600">{exam.time}</div>
                                  </div>
                                </td>
                                <td className="border p-3 font-medium">{exam.room}</td>
                                <td className="border p-3 font-mono font-medium text-school-primary">{exam.examId}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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

export default ExamSchedule;
