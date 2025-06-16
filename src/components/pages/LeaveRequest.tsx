
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { FileText, Send } from 'lucide-react';

const LeaveRequest = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    days: '',
    reason: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.startDate || !formData.days || !formData.reason) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Gửi thành công",
        description: "Đơn xin nghỉ học đã được gửi thành công. Vui lòng chờ phê duyệt.",
      });
      
      // Reset form
      setFormData({
        startDate: '',
        days: '',
        reason: '',
        note: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Xin nghỉ học</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-school-primary text-center text-xl">
              Đơn xin nghỉ học
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">
                    Ngày nghỉ <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="days">
                    Số ngày nghỉ <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="days"
                    type="number"
                    min="1"
                    placeholder="Nhập số ngày"
                    value={formData.days}
                    onChange={(e) => handleInputChange('days', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">
                  Lý do nghỉ <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="reason"
                  placeholder="Nhập lý do nghỉ học..."
                  value={formData.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Ghi chú</Label>
                <Textarea
                  id="note"
                  placeholder="Ghi chú thêm (nếu có)..."
                  value={formData.note}
                  onChange={(e) => handleInputChange('note', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-school-primary mb-2">Thông tin học sinh</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Họ và tên:</span> Nguyễn Văn An
                  </div>
                  <div>
                    <span className="font-medium">Lớp:</span> 11A1
                  </div>
                  <div>
                    <span className="font-medium">GVCN:</span> Cô Nguyễn Thị Bình
                  </div>
                  <div>
                    <span className="font-medium">Ngày tạo đơn:</span> {new Date().toLocaleDateString('vi-VN')}
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-school-primary hover:bg-school-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Đang gửi..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Gửi đơn
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Lưu ý:</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Đơn xin nghỉ học cần được gửi trước ít nhất 1 ngày</li>
                <li>• Đối với nghỉ học đột xuất do ốm đau, cần có giấy xác nhận của y tế</li>
                <li>• Học sinh cần bù học những bài học đã nghỉ</li>
                <li>• Liên hệ GVCN nếu cần hỗ trợ thêm</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaveRequest;
