
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  FileText, 
  Upload, 
  Activity
} from "lucide-react";

const AdminStats = () => {
  return (
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
  );
};

export default AdminStats;
