
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, GraduationCap } from 'lucide-react';

const UniversitySearch = () => {
  const [selectedMajor, setSelectedMajor] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const majors = [
    { value: 'cntt', label: 'Công nghệ thông tin' },
    { value: 'kt', label: 'Kinh tế' },
    { value: 'y', label: 'Y khoa' },
    { value: 'su-dia', label: 'Sư phạm Sử - Địa' },
    { value: 'toan', label: 'Toán học' },
    { value: 'ly', label: 'Vật lý' },
    { value: 'hoa', label: 'Hóa học' },
    { value: 'sinh', label: 'Sinh học' },
    { value: 'nn', label: 'Ngôn ngữ Anh' }
  ];

  const universities = [
    { value: 'bach-khoa-hn', label: 'Đại học Bách khoa Hà Nội' },
    { value: 'quoc-gia-hn', label: 'Đại học Quốc gia Hà Nội' },
    { value: 'kinh-te-quoc-dan', label: 'Đại học Kinh tế Quốc dân' },
    { value: 'y-ha-noi', label: 'Đại học Y Hà Nội' },
    { value: 'su-pham-hn', label: 'Đại học Sư phạm Hà Nội' },
    { value: 'ngoai-thuong', label: 'Đại học Ngoại thương' },
    { value: 'cong-nghiep', label: 'Đại học Công nghiệp Hà Nội' },
    { value: 'khoa-hoc-tu-nhien', label: 'Đại học Khoa học Tự nhiên' }
  ];

  const sampleResults = [
    { major: 'Công nghệ thông tin', university: 'ĐH Bách khoa Hà Nội', score: 25.5, block: 'A1' },
    { major: 'Công nghệ thông tin', university: 'ĐH Công nghiệp Hà Nội', score: 23.0, block: 'A1' },
    { major: 'Kinh tế', university: 'ĐH Kinh tế Quốc dân', score: 26.0, block: 'A1' },
    { major: 'Kinh tế', university: 'ĐH Ngoại thương', score: 25.5, block: 'A1' },
    { major: 'Y khoa', university: 'ĐH Y Hà Nội', score: 27.0, block: 'B' },
    { major: 'Toán học', university: 'ĐH Khoa học Tự nhiên', score: 24.5, block: 'A' },
    { major: 'Sư phạm Sử - Địa', university: 'ĐH Sư phạm Hà Nội', score: 22.0, block: 'C' }
  ];

  const handleSearch = () => {
    let results = sampleResults;

    if (selectedMajor && selectedMajor !== 'all') {
      const majorLabel = majors.find(m => m.value === selectedMajor)?.label;
      results = results.filter(r => r.major === majorLabel);
    }

    if (selectedUniversity && selectedUniversity !== 'all') {
      const universityLabel = universities.find(u => u.value === selectedUniversity)?.label;
      results = results.filter(r => r.university === universityLabel);
    }

    setSearchResults(results);
    setHasSearched(true);
  };

  const getScoreColor = (score: number) => {
    if (score >= 26) return 'text-red-600 font-bold';
    if (score >= 24) return 'text-orange-600 font-semibold';
    if (score >= 22) return 'text-yellow-600 font-semibold';
    return 'text-green-600 font-semibold';
  };

  const getBlockColor = (block: string) => {
    const colors: { [key: string]: string } = {
      'A': 'bg-blue-100 text-blue-800',
      'A1': 'bg-purple-100 text-purple-800',
      'B': 'bg-green-100 text-green-800',
      'C': 'bg-orange-100 text-orange-800',
      'D': 'bg-red-100 text-red-800'
    };
    return colors[block] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Tra cứu thông tin</h1>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-school-primary">
              Tìm kiếm trường học
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Chọn ngành học</label>
                <Select value={selectedMajor} onValueChange={setSelectedMajor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn ngành học" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả ngành</SelectItem>
                    {majors.map(major => (
                      <SelectItem key={major.value} value={major.value}>
                        {major.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Chọn trường học</label>
                <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn trường học" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả trường</SelectItem>
                    {universities.map(university => (
                      <SelectItem key={university.value} value={university.value}>
                        {university.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleSearch}
              className="w-full bg-school-primary hover:bg-school-dark"
            >
              <Search className="h-4 w-4 mr-2" />
              Tìm kiếm
            </Button>
          </CardContent>
        </Card>

        {hasSearched && (
          <Card>
            <CardHeader>
              <CardTitle className="text-school-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Kết quả tìm kiếm ({searchResults.length} kết quả)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {searchResults.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border p-3 bg-school-primary text-white font-semibold text-left">Ngành</th>
                        <th className="border p-3 bg-school-primary text-white font-semibold text-left">Trường</th>
                        <th className="border p-3 bg-school-primary text-white font-semibold text-center">Điểm chuẩn</th>
                        <th className="border p-3 bg-school-primary text-white font-semibold text-center">Khối</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResults.map((result, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">{result.major}</td>
                          <td className="border p-3">{result.university}</td>
                          <td className={`border p-3 text-center ${getScoreColor(result.score)}`}>
                            {result.score}
                          </td>
                          <td className="border p-3 text-center">
                            <span className={`px-2 py-1 rounded text-sm font-medium ${getBlockColor(result.block)}`}>
                              {result.block}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">Không tìm thấy kết quả phù hợp</div>
                  <div className="text-sm text-gray-400">Vui lòng thử lại với các tiêu chí khác</div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {!hasSearched && (
          <Card>
            <CardContent className="p-8 text-center">
              <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Tìm kiếm thông tin trường đại học
              </h3>
              <p className="text-gray-500">
                Chọn ngành học và trường học để tra cứu điểm chuẩn và thông tin tuyển sinh
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default UniversitySearch;
