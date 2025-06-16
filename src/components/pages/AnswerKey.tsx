
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';

const AnswerKey = () => {
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
      date: "2024-01-20"
    },
    {
      id: 2,
      title: "Đáp án thi cuối kỳ I - Văn 11",
      date: "2024-01-19"
    },
    {
      id: 3,
      title: "Đáp án thi giữa kỳ II - Lý 11",
      date: "2024-03-25"
    },
    {
      id: 4,
      title: "Đáp án thi giữa kỳ II - Hóa 11",
      date: "2024-03-24"
    },
    {
      id: 5,
      title: "Đáp án thi cuối năm - Anh 11",
      date: "2024-05-30"
    }
  ];

  const handleDocumentClick = (docId: number) => {
    console.log(`Opening document ${docId}`);
    // Simulate PDF opening
  };

  const handleAnswerKeyClick = (answerId: number) => {
    console.log(`Opening answer key ${answerId}`);
    // Simulate PDF opening
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
                    onClick={() => handleAnswerKeyClick(answer.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-school-primary hover:underline">
                          {answer.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Ngày đăng: {new Date(answer.date).toLocaleDateString('vi-VN')}
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
      </div>
    </div>
  );
};

export default AnswerKey;
