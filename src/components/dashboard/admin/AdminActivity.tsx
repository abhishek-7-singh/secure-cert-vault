
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminActivity = () => {
  const activities = [
    { action: 'Certificate uploaded', user: 'john.doe@example.com', document: 'Aadhaar Card', time: '2 minutes ago' },
    { action: 'User registered', user: 'jane.smith@example.com', document: 'Account created', time: '15 minutes ago' },
    { action: 'Certificate downloaded', user: 'mike.wilson@example.com', document: 'PAN Card', time: '1 hour ago' },
    { action: 'Certificate uploaded', user: 'sarah.jones@example.com', document: 'Driving License', time: '2 hours ago' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest certificate uploads and user activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
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
  );
};

export default AdminActivity;
