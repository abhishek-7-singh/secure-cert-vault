
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Shield, LogIn } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// interface LoginFormProps {
//   onLogin: (user: { name: string; email: string; role: 'user' | 'admin' }) => void;
// }

// const LoginForm = ({ onLogin }: LoginFormProps) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent, role: 'user' | 'admin') => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate authentication
//     setTimeout(() => {
//       if (email && password) {
//         const mockUser = {
//           name: role === 'admin' ? 'Admin User' : 'John Doe',
//           email,
//           role
//         };
//         onLogin(mockUser);
//         toast({
//           title: "Login successful",
//           description: `Welcome back, ${mockUser.name}!`,
//         });
//       } else {
//         toast({
//           title: "Login failed",
//           description: "Please enter valid credentials",
//           variant: "destructive",
//         });
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-6">
//         {/* Header */}
//         <div className="text-center space-y-2">
//           <div className="flex justify-center">
//             <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
//               <Shield className="h-8 w-8 text-white" />
//             </div>
//           </div>
//           <h1 className="text-2xl font-bold text-black">SecureVault</h1>
//           <p className="text-gray-600">Digital Certificate Repository</p>
//         </div>

//         {/* Login Form */}
//         <Card className="border-0 shadow-xl bg-white">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-2xl text-center text-black">Sign in</CardTitle>
//             <CardDescription className="text-center text-gray-600">
//               Enter your credentials to access your account
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Tabs defaultValue="user" className="w-full">
//               <TabsList className="grid w-full grid-cols-2">
//                 <TabsTrigger value="user">User Portal</TabsTrigger>
//                 <TabsTrigger value="admin">Admin Portal</TabsTrigger>
//               </TabsList>
              
//               <TabsContent value="user" className="space-y-4 mt-4">
//                 <form onSubmit={(e) => handleSubmit(e, 'user')} className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="user-email" className="text-black">Email</Label>
//                     <Input
//                       id="user-email"
//                       type="email"
//                       placeholder="user@example.com"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                       className="text-black"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="user-password" className="text-black">Password</Label>
//                     <Input
//                       id="user-password"
//                       type="password"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                       className="text-black"
//                     />
//                   </div>
//                   <Button type="submit" className="w-full" disabled={isLoading}>
//                     {isLoading ? (
//                       "Signing in..."
//                     ) : (
//                       <>
//                         <LogIn className="mr-2 h-4 w-4" />
//                         Sign in as User
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </TabsContent>
              
//               <TabsContent value="admin" className="space-y-4 mt-4">
//                 <form onSubmit={(e) => handleSubmit(e, 'admin')} className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="admin-email" className="text-black">Admin Email</Label>
//                     <Input
//                       id="admin-email"
//                       type="email"
//                       placeholder="admin@example.com"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                       className="text-black"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="admin-password" className="text-black">Admin Password</Label>
//                     <Input
//                       id="admin-password"
//                       type="password"
//                       placeholder="Enter admin password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                       className="text-black"
//                     />
//                   </div>
//                   <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
//                     {isLoading ? (
//                       "Signing in..."
//                     ) : (
//                       <>
//                         <Shield className="mr-2 h-4 w-4" />
//                         Sign in as Admin
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>

//         {/* Demo credentials */}
//         <Card className="border border-purple-200 bg-purple-50">
//           <CardContent className="pt-4">
//             <h3 className="font-semibold text-purple-900 mb-2">Demo Credentials</h3>
//             <div className="text-sm text-purple-800 space-y-1">
//               <p><strong>User:</strong> user@demo.com / password123</p>
//               <p><strong>Admin:</strong> admin@demo.com / admin123</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onLogin: (user: { name: string; email: string; role: 'user' | 'admin' }) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent, role: 'user' | 'admin') => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email && password) {
        const mockUser = {
          name: role === 'admin' ? 'Admin User' : 'John Doe',
          email,
          role
        };
        onLogin(mockUser);
        toast({
          title: "Login successful",
          description: `Welcome back, ${mockUser.name}!`,
        });
      } else {
        toast({
          title: "Login failed",
          description: "Please enter valid credentials",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-purple-900">SecureVault</h1>
          <p className="text-purple-700">Digital Certificate Repository</p>
        </div>

        <Card className="border-0 shadow-xl bg-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-purple-900">Sign in</CardTitle>
            <CardDescription className="text-center text-purple-700">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-purple-100">
                <TabsTrigger value="user">User Portal</TabsTrigger>
                <TabsTrigger value="admin">Admin Portal</TabsTrigger>
              </TabsList>
              
              <TabsContent value="user" className="space-y-4 mt-4">
                <form onSubmit={(e) => handleSubmit(e, 'user')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-email" className="text-purple-900">Email</Label>
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-purple-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-password" className="text-purple-900">Password</Label>
                    <Input
                      id="user-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="text-purple-900"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800" disabled={isLoading}>
                    {isLoading ? (
                      "Signing in..."
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign in as User
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="admin" className="space-y-4 mt-4">
                <form onSubmit={(e) => handleSubmit(e, 'admin')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-purple-900">Admin Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-purple-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-purple-900">Admin Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="Enter admin password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="text-purple-900"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800" disabled={isLoading}>
                    {isLoading ? (
                      "Signing in..."
                    ) : (
                      <>
                        <Shield className="mr-2 h-4 w-4" />
                        Sign in as Admin
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border border-purple-300 bg-purple-100">
          <CardContent className="pt-4">
            <h3 className="font-semibold text-purple-900 mb-2">Demo Credentials</h3>
            <div className="text-sm text-purple-800 space-y-1">
              <p><strong>User:</strong> user@demo.com / password123</p>
              <p><strong>Admin:</strong> admin@demo.com / admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
