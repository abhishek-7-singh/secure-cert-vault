import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Activity,
  Search,
  Plus
} from "lucide-react";
import AdminUpload from "./admin/AdminUpload";
import AdminDocuments from "./admin/AdminDocuments";

interface AdminDashboardProps {
  activeTab: string;
}

const AdminDashboard = ({ activeTab }: AdminDashboardProps) => {
  if (activeTab === 'dashboard') {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-red-100">
            Manage certificates and users across the SecureVault platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-purple-400" />
                <div>
                  <p className="text-2xl font-bold">5,832</p>
                  <p className="text-sm text-gray-600">Total Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Upload className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-gray-600">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold">98.5%</p>
                  <p className="text-sm text-gray-600">System Uptime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest certificate uploads and user activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'Certificate uploaded', user: 'john.doe@example.com', document: 'Aadhaar Card', time: '2 minutes ago' },
                { action: 'User registered', user: 'jane.smith@example.com', document: 'Account created', time: '15 minutes ago' },
                { action: 'Certificate downloaded', user: 'mike.wilson@example.com', document: 'PAN Card', time: '1 hour ago' },
                { action: 'Certificate uploaded', user: 'sarah.jones@example.com', document: 'Driving License', time: '2 hours ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.user} - {activity.document}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'upload') {
    return (
      <div className="space-y-6">
        <AdminUpload />
      </div>
    );
  }

  if (activeTab === 'manage-users') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Manage Users</span>
                </CardTitle>
                <CardDescription>View and manage user accounts</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input placeholder="Search users..." className="flex-1" />
              </div>
              
              <div className="space-y-3">
                {[
                  { name: 'John Doe', email: 'john.doe@example.com', documents: 5, status: 'active' },
                  { name: 'Jane Smith', email: 'jane.smith@example.com', documents: 3, status: 'active' },
                  { name: 'Mike Wilson', email: 'mike.wilson@example.com', documents: 7, status: 'active' },
                  { name: 'Sarah Jones', email: 'sarah.jones@example.com', documents: 2, status: 'pending' },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-sm text-gray-500">{user.documents} documents</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={user.status === 'active' ? 'bg-purple-100 text-purple-700' : 'bg-yellow-100 text-yellow-800'}>
                        {user.status}
                      </Badge>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AdminDocuments />
    </div>
  );
};

export default AdminDashboard;
