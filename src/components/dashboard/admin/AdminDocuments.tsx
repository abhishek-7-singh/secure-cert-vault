
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDocuments = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Documents</CardTitle>
        <CardDescription>View and manage all certificates in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Document management interface will be implemented here.</p>
      </CardContent>
    </Card>
  );
};

export default AdminDocuments;
