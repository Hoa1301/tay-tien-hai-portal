
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, AlertCircle, CheckCircle } from 'lucide-react';

const Fees = () => {
  const unpaidFees = [
    { id: 1, name: 'Học phí kỳ II', amount: 2500000, semester: 'Kỳ II - 2023/2024', note: 'Hạn nộp: 30/06/2024' },
    { id: 2, name: 'Quỹ lớp', amount: 200000, semester: 'Kỳ II - 2023/2024', note: 'Đóng góp hoạt động lớp' },
    { id: 3, name: 'Bảo hiểm y tế', amount: 150000, semester: 'Cả năm', note: 'Bảo hiểm năm học 2023-2024' }
  ];

  const paidFees = [
    { id: 1, receiptCode: 'BL001234', amount: 2500000, paidDate: '2024-01-15', note: 'Học phí kỳ I - 2023/2024' },
    { id: 2, receiptCode: 'BL001235', amount: 200000, paidDate: '2024-01-10', note: 'Quỹ lớp kỳ I' },
    { id: 3, receiptCode: 'BL001236', amount: 300000, paidDate: '2023-09-15', note: 'Sách giáo khoa' },
    { id: 4, receiptCode: 'BL001237', amount: 100000, paidDate: '2023-09-10', note: 'Đồng phục học sinh' },
    { id: 5, receiptCode: 'BL001238', amount: 50000, paidDate: '2023-09-05', note: 'Thẻ học sinh' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const getTotalUnpaid = () => {
    return unpaidFees.reduce((total, fee) => total + fee.amount, 0);
  };

  const getTotalPaid = () => {
    return paidFees.reduce((total, fee) => total + fee.amount, 0);
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="h-8 w-8 text-school-primary" />
          <h1 className="text-3xl font-bold text-school-primary">Đóng quỹ - Học phí</h1>
        </div>

        {/* Tổng quan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{formatCurrency(getTotalUnpaid())}</div>
              <div className="text-sm text-gray-600">Tổng chưa nộp</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{formatCurrency(getTotalPaid())}</div>
              <div className="text-sm text-gray-600">Tổng đã nộp</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CreditCard className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{formatCurrency(getTotalUnpaid() + getTotalPaid())}</div>
              <div className="text-sm text-gray-600">Tổng cộng</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Các khoản chưa nộp */}
          <Card>
            <CardHeader>
              <CardTitle className="text-school-primary flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Các khoản chưa nộp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-3 bg-red-50 text-red-800 font-semibold text-left">STT</th>
                      <th className="border p-3 bg-red-50 text-red-800 font-semibold text-left">Tên khoản tiền</th>
                      <th className="border p-3 bg-red-50 text-red-800 font-semibold text-right">Số tiền</th>
                      <th className="border p-3 bg-red-50 text-red-800 font-semibold text-left">Học kỳ</th>
                      <th className="border p-3 bg-red-50 text-red-800 font-semibold text-left">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unpaidFees.map((fee, index) => (
                      <tr key={fee.id} className="hover:bg-gray-50">
                        <td className="border p-3 text-center">{index + 1}</td>
                        <td className="border p-3 font-medium">{fee.name}</td>
                        <td className="border p-3 text-right font-bold text-red-600">
                          {formatCurrency(fee.amount)}
                        </td>
                        <td className="border p-3">
                          <Badge variant="outline" className="text-xs">
                            {fee.semester}
                          </Badge>
                        </td>
                        <td className="border p-3 text-sm text-gray-600">{fee.note}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="border p-3 font-bold bg-red-50" colSpan={2}>Tổng cần nộp</td>
                      <td className="border p-3 text-right font-bold text-red-600 bg-red-50">
                        {formatCurrency(getTotalUnpaid())}
                      </td>
                      <td className="border p-3 bg-red-50" colSpan={2}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Danh sách biên lai */}
          <Card>
            <CardHeader>
              <CardTitle className="text-school-primary flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Danh sách biên lai
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-3 bg-green-50 text-green-800 font-semibold text-left">STT</th>
                      <th className="border p-3 bg-green-50 text-green-800 font-semibold text-left">Mã biên lai</th>
                      <th className="border p-3 bg-green-50 text-green-800 font-semibold text-right">Số tiền nộp</th>
                      <th className="border p-3 bg-green-50 text-green-800 font-semibold text-left">Ngày nộp</th>
                      <th className="border p-3 bg-green-50 text-green-800 font-semibold text-left">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paidFees.map((fee, index) => (
                      <tr key={fee.id} className="hover:bg-gray-50">
                        <td className="border p-3 text-center">{index + 1}</td>
                        <td className="border p-3 font-mono text-school-primary font-medium">
                          {fee.receiptCode}
                        </td>
                        <td className="border p-3 text-right font-bold text-green-600">
                          {formatCurrency(fee.amount)}
                        </td>
                        <td className="border p-3 text-sm">
                          {new Date(fee.paidDate).toLocaleDateString('vi-VN')}
                        </td>
                        <td className="border p-3 text-sm text-gray-600">{fee.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thông tin hỗ trợ */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-school-primary">Thông tin hỗ trợ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Phòng Kế toán</h3>
                <p className="text-sm text-gray-600 mb-1">Thời gian làm việc: 7:30 - 11:30, 13:30 - 17:00</p>
                <p className="text-sm text-gray-600 mb-1">Điện thoại: (024) 3856 7890</p>
                <p className="text-sm text-gray-600">Email: ketoan@tth.edu.vn</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Hướng dẫn thanh toán</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Thanh toán trực tiếp tại phòng kế toán</li>
                  <li>• Chuyển khoản qua ngân hàng (liên hệ để biết STK)</li>
                  <li>• Giữ lại biên lai để đối chiếu</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fees;
