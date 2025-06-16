
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Download, MessageSquare, Send } from 'lucide-react';

const AnswerKey = () => {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const latestDocuments = [
    {
      id: 1,
      title: "Đề thi thử THPT Quốc gia 2024 - Môn Toán",
      date: "2024-06-15",
      image: "/api/placeholder/120/160"
    },
    {
      id: 2,
      title: "Đề thi thử THPT Quốc gia 2024 - Môn Văn",
      date: "2024-06-14",
      image: "/api/placeholder/120/160"
    },
    {
      id: 3,
      title: "Đề kiểm tra giữa kỳ II - Lớp 11",
      date: "2024-06-13",
      image: "/api/placeholder/120/160"
    },
    {
      id: 4,
      title: "Đề thi học kỳ I - Năm học 2023-2024",
      date: "2024-06-12",
      image: "/api/placeholder/120/160"
    }
  ];

  const latestAnswerKeys = [
    {
      id: 1,
      title: "Đáp án thi cuối kỳ I - Toán 11",
      date: "2024-01-20",
      teacher: "TS. Nguyễn Văn An"
    },
    {
      id: 2,
      title: "Đáp án thi cuối kỳ I - Văn 11",
      date: "2024-01-19",
      teacher: "ThS. Trần Thị Bình"
    },
    {
      id: 3,
      title: "Đáp án thi giữa kỳ II - Lý 11",
      date: "2024-03-25",
      teacher: "TS. Lê Văn Cường"
    },
    {
      id: 4,
      title: "Đáp án thi giữa kỳ II - Hóa 11",
      date: "2024-03-24",
      teacher: "ThS. Phạm Thị Dung"
    },
    {
      id: 5,
      title: "Đáp án thi cuối năm - Anh 11",
      date: "2024-05-30",
      teacher: "MA. Hoàng Văn Ên"
    }
  ];

  const handleDocumentClick = (docId: number) => {
    console.log(`Opening document ${docId}`);
    // Simulate PDF opening
  };

  const handleAnswerKeyClick = (answer: any) => {
    setSelectedDocument(answer);
    console.log(`Opening answer key ${answer.id}`);
    // Simulate PDF opening
  };

  const handleSendFeedback = () => {
    if (!feedbackText.trim()) return;
    
    console.log('Sending feedback:', {
      answerId: selectedDocument?.id,
      feedback: feedbackText,
      teacher: selectedDocument?.teacher
    });
    
    // Simulate sending feedback
    alert('Phản hồi của bạn đã được gửi đến giáo viên!');
    setFeedbackText('');
    setShowFeedbackDialog(false);
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Tra cứu đáp án</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tài liệu mới nhất */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-school-primary">Tài liệu mới nhất</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestDocuments.map((doc) => (
                  <div 
                    key={doc.id}
                    className="flex gap-4 p-3 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white"
                    onClick={() => handleDocumentClick(doc.id)}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-24 bg-gradient-to-br from-school-light to-school-secondary rounded flex items-center justify-center">
                        <FileText className="h-8 w-8 text-school-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-school-primary mb-2">{doc.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">Ngày đăng: {new Date(doc.date).toLocaleDateString('vi-VN')}</p>
                      <div className="flex items-center gap-1 text-school-secondary hover:text-school-primary">
                        <Download className="h-4 w-4" />
                        <span className="text-sm">Tải xuống</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Đáp án kỳ thi mới nhất */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-school-primary">Đáp án kỳ thi mới nhất</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {latestAnswerKeys.map((answer) => (
                  <div 
                    key={answer.id}
                    className="p-3 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white"
                    onClick={() => handleAnswerKeyClick(answer)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-school-primary hover:underline">
                          {answer.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Ngày đăng: {new Date(answer.date).toLocaleDateString('vi-VN')}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Giáo viên: {answer.teacher}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-school-secondary">
                        <Download className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dialog hiển thị chi tiết đáp án */}
        {selectedDocument && (
          <Dialog open={!!selectedDocument} onOpenChange={() => setSelectedDocument(null)}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-school-primary">
                  {selectedDocument.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  <p>Ngày đăng: {new Date(selectedDocument.date).toLocaleDateString('vi-VN')}</p>
                  <p>Giáo viên: {selectedDocument.teacher}</p>
                </div>
                
                {/* Nội dung đáp án mô phỏng */}
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

                <div className="flex gap-3 pt-4">
                  <Button className="bg-school-primary hover:bg-school-dark">
                    <Download className="h-4 w-4 mr-2" />
                    Tải xuống PDF
                  </Button>
                  <Dialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-light">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Gửi phản hồi
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Gửi phản hồi về đáp án</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            Gửi phản hồi đến: <strong>{selectedDocument.teacher}</strong>
                          </p>
                          <Textarea
                            placeholder="Nhập thắc mắc hoặc góp ý về đáp án..."
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            rows={5}
                          />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setShowFeedbackDialog(false)}>
                            Hủy
                          </Button>
                          <Button onClick={handleSendFeedback} className="bg-school-primary hover:bg-school-dark">
                            <Send className="h-4 w-4 mr-2" />
                            Gửi phản hồi
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default AnswerKey;
