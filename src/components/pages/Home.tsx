
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';

const Home = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Thông báo về kế hoạch năm học 2024-2025",
      date: "15/06/2024",
      summary: "Nhà trường thông báo về kế hoạch giảng dạy và các hoạt động trong năm học mới...",
      author: "Ban Giám hiệu"
    },
    {
      id: 2,
      title: "Kết quả thi học sinh giỏi cấp tỉnh",
      date: "10/06/2024",
      summary: "Chúc mừng các em học sinh đạt giải trong kỳ thi học sinh giỏi cấp tỉnh năm 2024...",
      author: "Phòng Đào tạo"
    },
    {
      id: 3,
      title: "Công bố điểm thi tuyển sinh lớp 10",
      date: "05/06/2024",
      summary: "Kết quả thi tuyển sinh vào lớp 10 năm học 2024-2025 đã được công bố...",
      author: "Phòng Khảo thí"
    },
    {
      id: 4,
      title: "Lễ bế giảng năm học 2023-2024",
      date: "25/05/2024",
      summary: "Lễ bế giảng năm học 2023-2024 diễn ra long trọng với sự tham dự của toàn thể thầy cô và học sinh...",
      author: "Ban Tổ chức"
    }
  ];

  const schoolRules = [
    {
      id: 1,
      title: "Nội quy về trang phục học sinh",
      file: "noiquy_trangphuc.pdf"
    },
    {
      id: 2,
      title: "Quy định về thời gian học tập",
      file: "quydinh_thoigian.pdf"
    },
    {
      id: 3,
      title: "Nội quy thư viện trường",
      file: "noiquy_thuvien.pdf"
    },
    {
      id: 4,
      title: "Quy định về hoạt động ngoại khóa",
      file: "quydinh_ngoaikhoa.pdf"
    },
    {
      id: 5,
      title: "Nội quy sử dụng phòng máy tính",
      file: "noiquy_phongmay.pdf"
    }
  ];

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-school-primary mb-6">Trang chủ</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tin tức - chiếm 2/3 */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="text-xl text-school-primary flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Tin tức & Thông báo
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[520px] overflow-y-auto">
                <div className="space-y-4">
                  {newsArticles.map((article) => (
                    <div key={article.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white">
                      <h3 className="font-semibold text-school-primary mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{article.summary}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Đăng bởi: {article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nội quy - chiếm 1/3 */}
          <div className="lg:col-span-1">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="text-xl text-school-primary">Nội quy trường học</CardTitle>
              </CardHeader>
              <CardContent className="h-[520px] overflow-y-auto">
                <div className="space-y-3">
                  {schoolRules.map((rule) => (
                    <div key={rule.id} className="p-3 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start gap-2">
                        <p className="text-sm font-medium text-gray-800 flex-1">{rule.title}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-school-secondary hover:text-school-primary"
                          onClick={() => {
                            // Simulate file opening
                            console.log(`Opening file: ${rule.file}`);
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
