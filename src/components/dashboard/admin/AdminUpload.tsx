
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AdminUpload = () => {
  const [uploadForm, setUploadForm] = useState({
    userEmail: '',
    certificateType: '',
    issuedBy: '',
    description: '',
    file: null as File | null
  });

  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadForm(prev => ({ ...prev, file }));
    }
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Certificate uploaded successfully",
      description: `Certificate has been uploaded for ${uploadForm.userEmail}`,
    });
    setUploadForm({
      userEmail: '',
      certificateType: '',
      issuedBy: '',
      description: '',
      file: null
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5" />
          <span>Upload Certificate</span>
        </CardTitle>
        <CardDescription>
          Upload a new certificate for a user
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUploadSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="userEmail">User Email</Label>
              <Input
                id="userEmail"
                type="email"
                placeholder="user@example.com"
                value={uploadForm.userEmail}
                onChange={(e) => setUploadForm(prev => ({ ...prev, userEmail: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="certificateType">Certificate Type</Label>
              <Select value={uploadForm.certificateType} onValueChange={(value) => setUploadForm(prev => ({ ...prev, certificateType: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select certificate type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="identity">Identity Proof</SelectItem>
                  <SelectItem value="education">Education Certificate</SelectItem>
                  <SelectItem value="license">License</SelectItem>
                  <SelectItem value="tax">Tax Document</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="issuedBy">Issued By</Label>
            <Input
              id="issuedBy"
              placeholder="Issuing authority"
              value={uploadForm.issuedBy}
              onChange={(e) => setUploadForm(prev => ({ ...prev, issuedBy: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Brief description of the certificate"
              value={uploadForm.description}
              onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Certificate File</Label>
            <Input
              id="file"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              required
            />
            <p className="text-sm text-gray-500">
              Accepted formats: PDF, JPG, PNG (Max size: 10MB)
            </p>
          </div>

          <Button type="submit" className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Upload Certificate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdminUpload;
