
import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import UserDashboard from "@/components/dashboard/UserDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

interface User {
  name: string;
  email: string;
  role: 'user' | 'admin';
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (userData: User) => {
    setUser(userData);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
  };

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-purple-900">
      <Header user={user} onLogout={handleLogout} />
      
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar 
          userRole={user.role} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {user.role === 'admin' ? (
              <AdminDashboard activeTab={activeTab} />
            ) : (
              <UserDashboard user={user} activeTab={activeTab} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
