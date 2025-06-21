
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar } from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  type: string;
  issuedBy: string;
  issuedDate: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'pending';
  fileSize: string;
}

interface UserDashboardProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
}

const UserDashboard = ({ user }: UserDashboardProps) => {
  const certificates: Certificate[] = [
    {
      id: '1',
      name: 'Aadhaar Card',
      type: 'Identity Proof',
      issuedBy: 'Unique Identification Authority of India (UIDAI)',
      issuedDate: '2025-01-15',
      status: 'active',
      fileSize: '2.4 MB'
    },
    {
      id: '2',
      name: 'PAN Verification Record',
      type: 'Tax Document',
      issuedBy: 'Income Tax Department',
      issuedDate: '2024-11-20',
      status: 'active',
      fileSize: '1.8 MB'
    },
    {
      id: '3',
      name: 'Academic Certificate',
      type: 'Education',
      issuedBy: 'Academic Bank of Credits',
      issuedDate: '2024-10-22',
      status: 'active',
      fileSize: '3.2 MB'
    },
    {
      id: '4',
      name: 'Class XII Marksheet',
      type: 'Education',
      issuedBy: 'Central Board of Secondary Education',
      issuedDate: '2022-05-01',
      status: 'active',
      fileSize: '2.1 MB'
    },
    {
      id: '5',
      name: 'Driving License',
      type: 'License',
      issuedBy: 'Regional Transport Office',
      issuedDate: '2023-08-15',
      expiryDate: '2043-08-15',
      status: 'active',
      fileSize: '1.5 MB'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Identity Proof': 'bg-blue-100 text-blue-800',
      'Tax Document': 'bg-green-100 text-green-800',
      'Education': 'bg-purple-100 text-purple-800',
      'License': 'bg-orange-100 text-orange-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'active': 'bg-green-100 text-green-800',
      'expired': 'bg-red-100 text-red-800',
      'pending': 'bg-yellow-100 text-yellow-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h1>
        <p className="text-blue-100">
          SecureVault 'Issued Documents' are at par with original documents as per IT ACT, 2000
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{certificates.length}</p>
                <p className="text-sm text-gray-600">Total Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{certificates.filter(c => c.status === 'active').length}</p>
                <p className="text-sm text-gray-600">Active Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-gray-600">Expiring Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Download className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-gray-600">Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Documents Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Issued Documents</CardTitle>
              <CardDescription>
                View and download your verified certificates
              </CardDescription>
            </div>
            <Button variant="outline">
              View All ({certificates.length})
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="certificate-card p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="document-icon bg-blue-600">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuedBy}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getTypeColor(cert.type)}>{cert.type}</Badge>
                      <Badge className={getStatusColor(cert.status)}>{cert.status}</Badge>
                      <span className="text-xs text-gray-500">
                        Issued: {new Date(cert.issuedDate).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-gray-500">
                        Size: {cert.fileSize}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
