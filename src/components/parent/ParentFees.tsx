
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ParentFees = () => {
  const unpaidFees = [
    {
      id: 1,
      name: 'Học phí tháng 12',
      amount: '500,000',
      semester: 'Kỳ I',
      note: 'Hạn nộp: 31/12/2024'
    },
    {
      id: 2,
      name: 'Quỹ lớp tháng 12',
      amount: '50,000',
      semester: 'Kỳ I',
      note: 'Hạn nộp: 30/12/2024'
    },
    {
      id: 3,
      name: 'Phí hoạt động ngoại khóa',
      amount: '100,000',
      semester: 'Kỳ I',
      note: 'Hạn nộp: 15/01/2025'
    }
  ];

  const receipts = [
    {
      id: 1,
      receiptCode: 'BL001234',
      amount: '500,000',
      date: '2024-11-15',
      note: 'Học phí tháng 11'
    },
    {
      id: 2,
      receiptCode: 'BL001235',
      amount: '50,000',
      date: '2024-11-10',
      note: 'Quỹ lớp tháng 11'
    },
    {
      id: 3,
      receiptCode: 'BL001236',
      amount: '200,000',
      date: '2024-10-20',
      note: 'Phí tham quan học tập'
    },
    {
      id: 4,
      receiptCode: 'BL001237',
      amount: '500,000',
      date: '2024-10-15',
      note: 'Học phí tháng 10'
    }
  ];

  return (
    <div className="p-6 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Đóng quỹ - học phí</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Các khoản chưa nộp */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Các khoản chưa nộp</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">STT</th>
                    <th className="border border-gray-300 p-2 text-left">Tên khoản tiền</th>
                    <th className="border border-gray-300 p-2 text-left">Số tiền</th>
                    <th className="border border-gray-300 p-2 text-left">Học kỳ</th>
                    <th className="border border-gray-300 p-2 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {unpaidFees.map((fee, index) => (
                    <tr key={fee.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2">{index + 1}</td>
                      <td className="border border-gray-300 p-2">{fee.name}</td>
                      <td className="border border-gray-300 p-2 text-red-600 font-semibold">{fee.amount} VNĐ</td>
                      <td className="border border-gray-300 p-2">{fee.semester}</td>
                      <td className="border border-gray-300 p-2 text-xs">{fee.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Danh sách biên lai */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Danh sách biên lai</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">STT</th>
                    <th className="border border-gray-300 p-2 text-left">Mã biên lai</th>
                    <th className="border border-gray-300 p-2 text-left">Số tiền nộp</th>
                    <th className="border border-gray-300 p-2 text-left">Ngày nộp</th>
                    <th className="border border-gray-300 p-2 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {receipts.map((receipt, index) => (
                    <tr key={receipt.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2">{index + 1}</td>
                      <td className="border border-gray-300 p-2 text-blue-600 font-mono">{receipt.receiptCode}</td>
                      <td className="border border-gray-300 p-2 text-green-600 font-semibold">{receipt.amount} VNĐ</td>
                      <td className="border border-gray-300 p-2">{receipt.date}</td>
                      <td className="border border-gray-300 p-2 text-xs">{receipt.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentFees;
