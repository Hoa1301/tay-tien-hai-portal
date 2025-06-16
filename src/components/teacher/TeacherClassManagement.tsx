
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const TeacherClassManagement = () => {
  const [selectedClass, setSelectedClass] = useState('10A1');
  const [isEditing, setIsEditing] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      lastName: 'Nguyễn Văn',
      firstName: 'An',
      oralScore: 8.5,
      test1Min: 7.0,
      test15Min1: 8.0,
      test15Min2: 7.5,
      test45Min: 8.5,
      finalExam: 9.0,
      average: 8.2
    },
    {
      id: 2,
      lastName: 'Trần Thị',
      firstName: 'Bình',
      oralScore: 9.0,
      test1Min: 8.5,
      test15Min1: 9.0,
      test15Min2: 8.5,
      test45Min: 9.0,
      finalExam: 9.5,
      average: 9.0
    },
    {
      id: 3,
      lastName: 'Lê Hoàng',
      firstName: 'Cường',
      oralScore: 7.0,
      test1Min: 6.5,
      test15Min1: 7.5,
      test15Min2: 7.0,
      test45Min: 7.5,
      finalExam: 8.0,
      average: 7.3
    }
  ]);

  const classes = ['10A1', '10A2', '10A3', '11A1', '11A2', '12A1'];

  const handleScoreChange = (studentId: number, field: string, value: string) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, [field]: parseFloat(value) || 0 }
        : student
    ));
  };

  const downloadExcel = () => {
    console.log('Downloading Excel file...');
  };

  const uploadExcel = () => {
    console.log('Uploading Excel file...');
  };

  const saveChanges = () => {
    console.log('Saving changes:', students);
    setIsEditing(false);
  };

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Quản lý lớp học</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Lớp: {selectedClass}</span>
            <div className="flex space-x-2">
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
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">STT</th>
                  <th className="border border-gray-300 p-2">Họ lót</th>
                  <th className="border border-gray-300 p-2">Tên</th>
                  <th className="border border-gray-300 p-2">Điểm kiểm tra miệng</th>
                  <th className="border border-gray-300 p-2">Điểm kiểm tra 1 phút</th>
                  <th className="border border-gray-300 p-2">Điểm kiểm tra 15 phút (1)</th>
                  <th className="border border-gray-300 p-2">Điểm kiểm tra 15 phút (2)</th>
                  <th className="border border-gray-300 p-2">Điểm kiểm tra 45 phút</th>
                  <th className="border border-gray-300 p-2">Điểm cuối kỳ</th>
                  <th className="border border-gray-300 p-2">Điểm trung bình</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{student.lastName}</td>
                    <td className="border border-gray-300 p-2">{student.firstName}</td>
                    <td className="border border-gray-300 p-2">
                      {isEditing ? (
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={student.oralScore}
                          onChange={(e) => handleScoreChange(student.id, 'oralScore', e.target.value)}
                          className="w-20"
                        />
                      ) : (
                        student.oralScore
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing ? (
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={student.test1Min}
                          onChange={(e) => handleScoreChange(student.id, 'test1Min', e.target.value)}
                          className="w-20"
                        />
                      ) : (
                        student.test1Min
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing ? (
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={student.test15Min1}
                          onChange={(e) => handleScoreChange(student.id, 'test15Min1', e.target.value)}
                          className="w-20"
                        />
                      ) : (
                        student.test15Min1
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing ? (
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={student.test15Min2}
                          onChange={(e) => handleScoreChange(student.id, 'test15Min2', e.target.value)}
                          className="w-20"
                        />
                      ) : (
                        student.test15Min2
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing ? (
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={student.test45Min}
                          onChange={(e) => handleScoreChange(student.id, 'test45Min', e.target.value)}
                          className="w-20"
                        />
                      ) : (
                        student.test45Min
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing ? (
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={student.finalExam}
                          onChange={(e) => handleScoreChange(student.id, 'finalExam', e.target.value)}
                          className="w-20"
                        />
                      ) : (
                        student.finalExam
                      )}
                    </td>
                    <td className="border border-gray-300 p-2 font-semibold">{student.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={downloadExcel} variant="outline">
              📊 Tải xuống file Excel
            </Button>
            <Button onClick={uploadExcel} variant="outline">
              📤 Nhập từ Excel
            </Button>
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">
                ✏️ Chỉnh sửa điểm
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={saveChanges} className="bg-green-600 hover:bg-green-700">
                  💾 Lưu
                </Button>
                <Button onClick={() => setIsEditing(false)} variant="outline">
                  ❌ Hủy
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherClassManagement;
