
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Check, AlertCircle } from 'lucide-react';

const TeacherAnswerKey = () => {
  const [showAddDocument, setShowAddDocument] = useState(false);
  const [showAddAnswer, setShowAddAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);

  const documents = [
    { id: 1, name: 'Đề thi Toán học kỳ I', date: '2024-12-10', image: '📄' },
    { id: 2, name: 'Đề thi Văn học kỳ I', date: '2024-12-08', image: '📄' },
    { id: 3, name: 'Đề thi Anh học kỳ I', date: '2024-12-05', image: '📄' }
  ];

  const answers = [
    { 
      id: 1, 
      name: 'Đáp án Toán học kỳ I - Lớp 10', 
      date: '2024-12-11',
      feedbacks: [
        {
          id: 1,
          student: 'Nguyễn Văn An',
          class: '10A1',
          message: 'Em thấy đáp án câu 5 có vẻ không chính xác. Theo em tính thì kết quả phải là 15 chứ không phải 12.',
          time: '2024-12-15T10:30:00',
          status: 'pending'
        },
        {
          id: 2,
          student: 'Trần Thị Bình',
          class: '10A2',
          message: 'Thầy ơi, em không hiểu cách giải của câu 8. Thầy có thể giải thích thêm được không ạ?',
          time: '2024-12-14T14:20:00',
          status: 'approved'
        }
      ]
    },
    { 
      id: 2, 
      name: 'Đáp án Văn học kỳ I - Lớp 10', 
      date: '2024-12-09',
      feedbacks: []
    },
    { 
      id: 3, 
      name: 'Đáp án Anh học kỳ I - Lớp 10', 
      date: '2024-12-06',
      feedbacks: [
        {
          id: 3,
          student: 'Lê Văn Cường',
          class: '10A3',
          message: 'Teacher, I think the answer for question 15 should be C, not B. Could you please check again?',
          time: '2024-12-13T09:15:00',
          status: 'pending'
        }
      ]
    }
  ];

  const classes = ['10A1', '10A2', '10A3', '11A1', '11A2', '12A1'];

  const handleFeedbackAction = (answerId: number, feedbackId: number, action: 'approve' | 'reject') => {
    console.log(`${action} feedback ${feedbackId} for answer ${answerId}`);
    
    if (action === 'approve') {
      alert('Phản hồi đã được chấp nhận. Hệ thống sẽ thông báo cho học sinh.');
    } else {
      alert('Phản hồi đã bị từ chối.');
    }
  };

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleString('vi-VN');
  };

  const getPendingFeedbackCount = () => {
    return answers.reduce((total, answer) => {
      return total + answer.feedbacks.filter(f => f.status === 'pending').length;
    }, 0);
  };

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800">Cập nhật đáp án</h1>
          {getPendingFeedbackCount() > 0 && (
            <Badge variant="destructive" className="flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {getPendingFeedbackCount()} phản hồi mới
            </Badge>
          )}
        </div>
      </div>
      
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
                  <div className="flex justify-between items-start">
                    <div className="flex-1" onClick={() => setSelectedAnswer(answer)}>
                      <h3 className="font-semibold text-blue-600 hover:text-blue-800">
                        {answer.name}
                      </h3>
                      <p className="text-sm text-gray-500">{answer.date}</p>
                    </div>
                    {answer.feedbacks.length > 0 && (
                      <div className="flex items-center gap-2">
                        {answer.feedbacks.filter(f => f.status === 'pending').length > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {answer.feedbacks.filter(f => f.status === 'pending').length} mới
                          </Badge>
                        )}
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{answer.feedbacks.length}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dialog chi tiết đáp án và phản hồi */}
      {selectedAnswer && (
        <Dialog open={!!selectedAnswer} onOpenChange={() => setSelectedAnswer(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-school-primary">
                {selectedAnswer.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              {/* Nội dung đáp án */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nội dung đáp án:</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Câu 1:</strong> A</p>
                  <p><strong>Câu 2:</strong> B</p>
                  <p><strong>Câu 3:</strong> C</p>
                  <p><strong>Câu 4:</strong> D</p>
                  <p><strong>Câu 5:</strong> A</p>
                  <p className="text-gray-600 italic">... (nội dung đầy đủ trong file PDF)</p>
                </div>
              </div>

              {/* Phản hồi từ học sinh */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Phản hồi từ học sinh ({selectedAnswer.feedbacks.length})
                </h4>
                {selectedAnswer.feedbacks.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Chưa có phản hồi nào</p>
                ) : (
                  <div className="space-y-4">
                    {selectedAnswer.feedbacks.map((feedback: any) => (
                      <div key={feedback.id} className={`border rounded-lg p-4 ${
                        feedback.status === 'pending' ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h5 className="font-medium">{feedback.student}</h5>
                            <p className="text-sm text-gray-600">Lớp {feedback.class}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">{formatTime(feedback.time)}</p>
                            <Badge 
                              variant={feedback.status === 'pending' ? 'destructive' : 'secondary'}
                              className="mt-1"
                            >
                              {feedback.status === 'pending' ? 'Chưa xử lý' : 'Đã xử lý'}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{feedback.message}</p>
                        {feedback.status === 'pending' && (
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleFeedbackAction(selectedAnswer.id, feedback.id, 'approve')}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Chấp nhận
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleFeedbackAction(selectedAnswer.id, feedback.id, 'reject')}
                            >
                              Từ chối
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TeacherAnswerKey;
