
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  User, 
  Search,
  Upload,
  Users,
  Shield
} from "lucide-react";

interface SidebarProps {
  userRole: 'user' | 'admin';
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ userRole, activeTab, onTabChange }: SidebarProps) => {
  const userMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FileText },
    { id: 'documents', label: 'My Documents', icon: FileText },
    { id: 'search', label: 'Search Documents', icon: Search },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const adminMenuItems = [
    { id: 'dashboard', label: 'Admin Dashboard', icon: Shield },
    { id: 'upload', label: 'Upload Certificate', icon: Upload },
    { id: 'manage-users', label: 'Manage Users', icon: Users },
    { id: 'manage-docs', label: 'Manage Documents', icon: FileText },
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <div className="w-64 bg-purple-800 border-r border-purple-600 h-full">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start text-white hover:bg-purple-700",
                  activeTab === item.id && "bg-white text-purple-800 hover:bg-gray-100"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
