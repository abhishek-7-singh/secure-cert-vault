
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Download, Eye, Filter } from "lucide-react";

const SearchDocuments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const documents = [
    {
      id: '1',
      name: 'Aadhaar Card',
      type: 'Identity Proof',
      issuedBy: 'UIDAI',
      issuedDate: '2025-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'PAN Card',
      type: 'Tax Document',
      issuedBy: 'Income Tax Department',
      issuedDate: '2024-11-20',
      status: 'active'
    },
    {
      id: '3',
      name: 'Academic Certificate',
      type: 'Education',
      issuedBy: 'Academic Bank of Credits',
      issuedDate: '2024-10-22',
      status: 'active'
    }
  ];

  const documentTypes = ['all', 'Identity Proof', 'Tax Document', 'Education', 'License'];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.issuedBy.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Identity Proof': 'bg-purple-100 text-purple-800',
      'Tax Document': 'bg-purple-100 text-purple-700',
      'Education': 'bg-indigo-100 text-indigo-800',
      'License': 'bg-orange-100 text-orange-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-black mb-2">Search Documents</h1>
        <p className="text-gray-600">Find specific documents quickly</p>
      </div>

      <Card className="bg-white border-purple-600">
        <CardHeader>
          <CardTitle className="text-black">Search & Filter</CardTitle>
          <CardDescription className="text-gray-600">
            Use the search and filter options to find documents
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by document name or issuer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
            >
              {documentTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-purple-600">
        <CardHeader>
          <CardTitle className="text-black">
            Search Results ({filteredDocuments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredDocuments.length > 0 ? (
            <div className="space-y-4">
              {filteredDocuments.map((doc) => (
                <div 
                  key={doc.id} 
                  className="certificate-card p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="document-icon">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{doc.name}</h3>
                      <p className="text-sm text-gray-600">{doc.issuedBy}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getTypeColor(doc.type)}>{doc.type}</Badge>
                        <span className="text-xs text-gray-500">
                          Issued: {new Date(doc.issuedDate).toLocaleDateString()}
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
          ) : (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchDocuments;
