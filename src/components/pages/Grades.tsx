
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen } from 'lucide-react';

const Grades = () => {
  const [selectedYear, setSelectedYear] = useState('2023-2024');
  const [selectedSemester, setSemester] = useState('1');

  const gradesData = {
    '2023-2024': {
      '1': [
        { subject: 'Toán', oral: 8.5, test15_1: 7.5, test15_2: 8.0, test45: 8.5, final: 8.0, average: 8.1 },
        { subject: 'Văn', oral: 7.0, test15_1: 7.5, test15_2: 8.0, test45: 7.5, final: 7.0, average: 7.4 },
        { subject: 'Anh', oral: 9.0, test15_1: 8.5, test15_2: 9.0, test45: 8.0, final: 8.5, average: 8.6 },
        { subject: 'Lý', oral: 7.5, test15_1: 8.0, test15_2: 7.0, test45: 7.5, final: 8.0, average: 7.6 },
        { subject: 'Hóa', oral: 8.0, test15_1: 8.5, test15_2: 8.0, test45: 8.5, final: 8.0, average: 8.2 },
        { subject: 'Sinh', oral: 8.5, test15_1: 9.0, test15_2: 8.5, test45: 8.0, final: 8.5, average: 8.5 },
        { subject: 'Sử', oral: 7.5, test15_1: 8.0, test15_2: 7.5, test45: 8.0, final: 7.5, average: 7.7 },
        { subject: 'Địa', oral: 8.0, test15_1: 7.5, test15_2: 8.5, test45: 8.0, final: 8.0, average: 8.0 },
        { subject: 'GDCD', oral: 9.0, test15_1: 9.0, test15_2: 8.5, test45: 9.0, final: 9.0, average: 8.9 }
      ],
      '2': [
        { subject: 'Toán', oral: 8.0, test15_1: 8.5, test15_2: 8.0, test45: 8.0, final: 7.5, average: 8.0 },
        { subject: 'Văn', oral: 7.5, test15_1: 7.0, test15_2: 8.0, test45: 7.5, final: 7.5, average: 7.5 },
        { subject: 'Anh', oral: 9.0, test15_1: 8.5, test15_2: 9.0, test45: 8.5, final: 8.5, average: 8.7 },
        { subject: 'Lý', oral: 7.0, test15_1: 7.5, test15_2: 7.0, test45: 7.5, final: 7.0, average: 7.2 },
        { subject: 'Hóa', oral: 8.5, test15_1: 8.0, test15_2: 8.5, test45: 8.0, final: 8.5, average: 8.3 },
        { subject: 'Sinh', oral: 8.0, test15_1: 8.5, test15_2: 8.0, test45: 8.5, final: 8.0, average: 8.2 },
        { subject: 'Sử', oral: 8.0, test15_1: 7.5, test15_2: 8.0, test45: 8.0, final: 8.0, average: 7.9 },
        { subject: 'Địa', oral: 7.5, test15_1: 8.0, test15_2: 7.5, test45: 8.0, final: 7.5, average: 7.7 },
        { subject: 'GDCD', oral: 9.0, test15_1: 8.5, test15_2: 9.0, test45: 9.0, final: 9.0, average: 8.9 }
      ]
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 8.5) return 'text-green-600 font-semibold';
    if (grade >= 6.5) return 'text-blue-600 font-semibold';
    if (grade >= 5.0) return 'text-yellow-600 font-semibold';
    return 'text-red-600 font-semibold';
  };

  const getAverageGrade = () => {
    const currentGrades = gradesData[selectedYear as keyof typeof gradesData][selectedSemester as keyof typeof gradesData['2023-2024']];
    const total = currentGrades.reduce((sum, grade) => sum + grade.average, 0);
    return (total / currentGrades.length).toFixed(1);
  };

  const currentGrades = gradesData[selectedYear as keyof typeof gradesData][selectedSemester as keyof typeof gradesData['2023-2024']];

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Kết quả học tập</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="text-school-primary">Bảng điểm chi tiết</CardTitle>
              <div className="flex gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Năm học</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023-2024">2023-2024</SelectItem>
                      <SelectItem value="2022-2023">2022-2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Kỳ học</label>
                  <Select value={selectedSemester} onValueChange={setSemester}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Kỳ 1</SelectItem>
                      <SelectItem value="2">Kỳ 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-left min-w-24">Môn học</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-20">Điểm miệng</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-20">15 phút (1)</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-20">15 phút (2)</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-20">45 phút</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-20">Cuối kỳ</th>
                    <th className="border p-3 bg-school-primary text-white font-semibold text-center min-w-24">Trung bình</th>
                  </tr>
                </thead>
                <tbody>
                  {currentGrades.map((grade, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border p-3 font-semibold text-school-primary">{grade.subject}</td>
                      <td className={`border p-3 text-center ${getGradeColor(grade.oral)}`}>{grade.oral}</td>
                      <td className={`border p-3 text-center ${getGradeColor(grade.test15_1)}`}>{grade.test15_1}</td>
                      <td className={`border p-3 text-center ${getGradeColor(grade.test15_2)}`}>{grade.test15_2}</td>
                      <td className={`border p-3 text-center ${getGradeColor(grade.test45)}`}>{grade.test45}</td>
                      <td className={`border p-3 text-center ${getGradeColor(grade.final)}`}>{grade.final}</td>
                      <td className={`border p-3 text-center ${getGradeColor(grade.average)} bg-blue-50`}>{grade.average}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="border p-3 font-bold text-school-primary bg-school-light" colSpan={6}>Điểm trung bình chung</td>
                    <td className={`border p-3 text-center font-bold text-lg bg-school-light ${getGradeColor(parseFloat(getAverageGrade()))}`}>
                      {getAverageGrade()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">
                  {currentGrades.filter(g => g.average >= 8.5).length}
                </div>
                <div className="text-sm text-green-700">Môn giỏi (≥8.5)</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {currentGrades.filter(g => g.average >= 6.5 && g.average < 8.5).length}
                </div>
                <div className="text-sm text-blue-700">Môn khá (6.5-8.4)</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {currentGrades.filter(g => g.average >= 5.0 && g.average < 6.5).length}
                </div>
                <div className="text-sm text-yellow-700">Môn TB (5.0-6.4)</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-600">
                  {currentGrades.filter(g => g.average < 5.0).length}
                </div>
                <div className="text-sm text-red-700">Môn yếu (<5.0)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Grades;
