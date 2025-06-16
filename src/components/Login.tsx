
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

interface LoginProps {
  onLogin: (role: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password || !role) {
      toast({
        title: "Lỗi đăng nhập",
        description: "Vui lòng nhập đầy đủ thông tin và chọn vai trò",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // Demo credentials for each role
      const credentials = {
        student: { username: 'student', password: '123456' },
        teacher: { username: 'teacher', password: '123456' },
        parent: { username: 'parent', password: '123456' }
      };

      const validCredential = credentials[role as keyof typeof credentials];
      
      if (validCredential && username === validCredential.username && password === validCredential.password) {
        toast({
          title: "Đăng nhập thành công",
          description: `Chào mừng ${role === 'student' ? 'học sinh' : role === 'teacher' ? 'giáo viên' : 'phụ huynh'}`,
        });
        onLogin(role);
      } else {
        toast({
          title: "Đăng nhập thất bại",
          description: "Tài khoản, mật khẩu hoặc vai trò không chính xác",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-school-primary to-school-dark p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto mb-4 w-16 h-16 bg-school-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">TTH</span>
          </div>
          <CardTitle className="text-2xl font-bold text-school-primary">
            THPT Tây Tiền Hải
          </CardTitle>
          <CardDescription>
            Hệ thống quản lý học sinh
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">Vai trò</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Chọn vai trò" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Học sinh</SelectItem>
                  <SelectItem value="teacher">Giáo viên</SelectItem>
                  <SelectItem value="parent">Phụ huynh</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Tài khoản</Label>
              <Input
                id="username"
                type="text"
                placeholder="Nhập tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-school-primary hover:bg-school-dark transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p><strong>Tài khoản demo:</strong></p>
            <p>Học sinh: student / 123456</p>
            <p>Giáo viên: teacher / 123456</p>
            <p>Phụ huynh: parent / 123456</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
