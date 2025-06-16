import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ParentHome = () => {
  const news = [
    {
      id: 1,
      title: "Thông báo về buổi họp phụ huynh cuối năm",
      content: "Nhà trường tổ chức buổi họp phụ huynh tổng kết năm học...",
      date: "2024-12-15"
    },
    {
      id: 2,
      title: "Lịch nghỉ Tết Nguyên đán 2025",
      content: "Thông báo lịch nghỉ Tết Nguyên đán cho học sinh...",
      date: "2024-12-10"
    },
    {
      id: 3,
      title: "Chương trình ngoại khóa tháng 1",
      content: "Các hoạt động ngoại khóa dành cho học sinh...",
      date: "2024-12-08"
    }
  ];

  const rules = [
    {
      id: 1,
      content: "Quy định về trang phục học sinh",
      file: "quy-dinh-trang-phuc.pdf"
    },
    {
      id: 2,
      content: "Nội quy thư viện trường",
      file: "noi-quy-thu-vien.pdf"
    },
    {
      id: 3,
      content: "Quy định về giờ học và nghỉ học",
      file: "quy-dinh-gio-hoc.pdf"
    }
  ];

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Trang chủ - Phụ huynh</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Tin tức - 2/3 */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-600">Tin tức mới nhất</CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              <div className="space-y-4">
                {news.map((item) => (
                  <div key={item.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.content}</p>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nội quy - 1/3 */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-600">Nội quy trường học</CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              <div className="space-y-3">
                {rules.map((rule) => (
                  <div key={rule.id} className="border-b pb-3 last:border-b-0">
                    <p className="text-sm text-gray-700 mb-2">{rule.content}</p>
                    <button className="text-blue-500 hover:text-blue-700 text-xs underline">
                      📄 {rule.file}
                    </button>
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

export default ParentHome;
