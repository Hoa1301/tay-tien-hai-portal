
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TeacherAnswerKey = () => {
  const [showAddDocument, setShowAddDocument] = useState(false);
  const [showAddAnswer, setShowAddAnswer] = useState(false);

  const documents = [
    { id: 1, name: 'Đề thi Toán học kỳ I', date: '2024-12-10', image: '📄' },
    { id: 2, name: 'Đề thi Văn học kỳ I', date: '2024-12-08', image: '📄' },
    { id: 3, name: 'Đề thi Anh học kỳ I', date: '2024-12-05', image: '📄' }
  ];

  const answers = [
    { id: 1, name: 'Đáp án Toán học kỳ I - Lớp 10', date: '2024-12-11' },
    { id: 2, name: 'Đáp án Văn học kỳ I - Lớp 10', date: '2024-12-09' },
    { id: 3, name: 'Đáp án Anh học kỳ I - Lớp 10', date: '2024-12-06' }
  ];

  const classes = ['10A1', '10A2', '10A3', '11A1', '11A2', '12A1'];

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Cập nhật đáp án</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tài liệu mới nhất */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Tài liệu mới nhất</CardTitle>
              <Dialog open={showAddDocument} onOpenChange={setShowAddDocument}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    + Thêm tài liệu
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>THÊM TÀI LIỆU</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="document">Tài liệu</Label>
                      <Input
                        id="document"
                        type="file"
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => setShowAddDocument(false)} className="bg-green-600 hover:bg-green-700">
                        Lưu
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="text-2xl">{doc.image}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold">{doc.name}</h3>
                    <p className="text-sm text-gray-500">{doc.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Đáp án kỳ thi mới nhất */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Đáp án kỳ thi mới nhất</CardTitle>
              <Dialog open={showAddAnswer} onOpenChange={setShowAddAnswer}>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700">
                    + Thêm đáp án
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>THÊM ĐÁP ÁN</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="answerFile">Đáp án kỳ thi</Label>
                      <Input
                        id="answerFile"
                        type="file"
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                    <div>
                      <Label>Chọn lớp xem</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {classes.map((cls) => (
                          <label key={cls} className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>{cls}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => setShowAddAnswer(false)} className="bg-green-600 hover:bg-green-700">
                        Lưu
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {answers.map((answer) => (
                <div key={answer.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-semibold text-blue-600 hover:text-blue-800">
                    {answer.name}
                  </h3>
                  <p className="text-sm text-gray-500">{answer.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherAnswerKey;
