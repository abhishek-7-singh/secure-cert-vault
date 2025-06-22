
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, Shield, Edit } from "lucide-react";

interface ProfileProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
}

const Profile = ({ user }: ProfileProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-black mb-2">Profile</h1>
        <p className="text-gray-600">Manage your account information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="bg-white border-purple-600">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-purple-600" />
            </div>
            <CardTitle className="text-black">{user.name}</CardTitle>
            <CardDescription className="text-gray-600">{user.email}</CardDescription>
            <Badge className="bg-purple-100 text-purple-700 w-fit mx-auto">
              {user.role}
            </Badge>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2 bg-white border-purple-600">
          <CardHeader>
            <CardTitle className="text-black">Personal Information</CardTitle>
            <CardDescription className="text-gray-600">
              Update your personal details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-black">First Name</Label>
                <Input
                  id="firstName"
                  defaultValue={user.name.split(' ')[0]}
                  className="border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-black">Last Name</Label>
                <Input
                  id="lastName"
                  defaultValue={user.name.split(' ').slice(1).join(' ')}
                  className="border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={user.email}
                  className="border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-black">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="border-gray-300"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address" className="text-black">Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your address"
                  className="border-gray-300"
                />
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Update Information
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Account Statistics */}
      <Card className="bg-white border-purple-600">
        <CardHeader>
          <CardTitle className="text-black">Account Statistics</CardTitle>
          <CardDescription className="text-gray-600">
            Overview of your account activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-black">5</p>
              <p className="text-sm text-gray-600">Documents Stored</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-black">23</p>
              <p className="text-sm text-gray-600">Downloads</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <User className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-black">Active</p>
              <p className="text-sm text-gray-600">Account Status</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-black">Jan 2025</p>
              <p className="text-sm text-gray-600">Member Since</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-white border-purple-600">
        <CardHeader>
          <CardTitle className="text-black">Security Settings</CardTitle>
          <CardDescription className="text-gray-600">
            Manage your account security and privacy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-black">Change Password</h4>
              <p className="text-sm text-gray-600">Update your account password</p>
            </div>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              Change
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-black">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              Enable
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
