
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

const MyDocuments = () => {
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
      'Identity Proof': 'bg-purple-100 text-purple-800',
      'Tax Document': 'bg-purple-100 text-purple-700',
      'Education': 'bg-indigo-100 text-indigo-800',
      'License': 'bg-orange-100 text-orange-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'active': 'bg-purple-100 text-purple-700',
      'expired': 'bg-red-100 text-red-800',
      'pending': 'bg-yellow-100 text-yellow-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-black mb-2">My Documents</h1>
        <p className="text-gray-600">View and manage all your stored documents</p>
      </div>

      <Card className="bg-white border-purple-600">
        <CardHeader>
          <CardTitle className="text-black">All Documents ({certificates.length})</CardTitle>
          <CardDescription className="text-gray-600">
            Your verified certificates and documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="certificate-card p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="document-icon">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuedBy}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getTypeColor(cert.type)}>{cert.type}</Badge>
                      <Badge className={getStatusColor(cert.status)}>{cert.status}</Badge>
                      <span className="text-xs text-gray-500">
                        Issued: {new Date(cert.issuedDate).toLocaleDateString()}
                      </span>
                      {cert.expiryDate && (
                        <span className="text-xs text-gray-500">
                          Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        Size: {cert.fileSize}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
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

export default MyDocuments;
