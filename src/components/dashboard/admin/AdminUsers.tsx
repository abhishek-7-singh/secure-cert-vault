
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Plus } from "lucide-react";

const AdminUsers = () => {
  const users = [
    { name: 'John Doe', email: 'john.doe@example.com', documents: 5, status: 'active' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', documents: 3, status: 'active' },
    { name: 'Mike Wilson', email: 'mike.wilson@example.com', documents: 7, status: 'active' },
    { name: 'Sarah Jones', email: 'sarah.jones@example.com', documents: 2, status: 'pending' },
  ];

  return (
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
            {users.map((user, index) => (
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
  );
};

export default AdminUsers;
