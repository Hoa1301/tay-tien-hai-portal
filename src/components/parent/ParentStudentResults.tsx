
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ParentStudentResults = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [selectedSemester, setSelectedSemester] = useState('1');

  const years = ['2024-2025', '2023-2024', '2022-2023'];
  const semesters = [
    { value: '1', label: 'Kỳ 1' },
    { value: '2', label: 'Kỳ 2' }
  ];

  const results = [
    {
      subject: 'Toán học',
      oralScore: 8.5,
      test15Min: 8.0,
      test15Min2: 7.5,
      test45Min: 8.5,
      finalExam: 9.0,
      average: 8.4
    },
    {
      subject: 'Văn học',
      oralScore: 9.0,
      test15Min: 8.5,
      test15Min2: 9.0,
      test45Min: 8.0,
      finalExam: 8.5,
      average: 8.6
    },
    {
      subject: 'Tiếng Anh',
      oralScore: 7.5,
      test15Min: 8.0,
      test15Min2: 7.0,
      test45Min: 7.5,
      finalExam: 8.0,
      average: 7.6
    },
    {
      subject: 'Vật lý',
      oralScore: 8.0,
      test15Min: 7.5,
      test15Min2: 8.5,
      test45Min: 8.0,
      finalExam: 8.5,
      average: 8.1
    },
    {
      subject: 'Hóa học',
      oralScore: 7.0,
      test15Min: 7.5,
      test15Min2: 7.0,
      test45Min: 7.5,
      finalExam: 8.0,
      average: 7.4
    }
  ];

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Xem kết quả học sinh</h1>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Kết quả học tập</CardTitle>
            <div className="flex space-x-4">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>Năm học {year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map(semester => (
                    <SelectItem key={semester.value} value={semester.value}>{semester.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Môn học</th>
                  <th className="border border-gray-300 p-3 text-center">Điểm miệng</th>
                  <th className="border border-gray-300 p-3 text-center">Điểm 15 phút (1)</th>
                  <th className="border border-gray-300 p-3 text-center">Điểm 15 phút (2)</th>
                  <th className="border border-gray-300 p-3 text-center">Điểm 45 phút</th>
                  <th className="border border-gray-300 p-3 text-center">Điểm cuối kỳ</th>
                  <th className="border border-gray-300 p-3 text-center">Điểm trung bình</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">{result.subject}</td>
                    <td className="border border-gray-300 p-3 text-center">{result.oralScore}</td>
                    <td className="border border-gray-300 p-3 text-center">{result.test15Min}</td>
                    <td className="border border-gray-300 p-3 text-center">{result.test15Min2}</td>
                    <td className="border border-gray-300 p-3 text-center">{result.test45Min}</td>
                    <td className="border border-gray-300 p-3 text-center">{result.finalExam}</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">{result.average}</td>
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

export default ParentStudentResults;
