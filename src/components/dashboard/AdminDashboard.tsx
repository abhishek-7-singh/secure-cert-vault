
import AdminStats from "./admin/AdminStats";
import AdminActivity from "./admin/AdminActivity";
import AdminUpload from "./admin/AdminUpload";
import AdminUsers from "./admin/AdminUsers";
import AdminDocuments from "./admin/AdminDocuments";

interface AdminDashboardProps {
  activeTab: string;
}

const AdminDashboard = ({ activeTab }: AdminDashboardProps) => {
  if (activeTab === 'dashboard') {
    return (
      <div className="space-y-6">
        {/* Admin Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-red-100">
            Manage certificates and users across the SecureVault platform
          </p>
        </div>

        {/* Stats Grid */}
        <AdminStats />

        {/* Recent Activity */}
        <AdminActivity />
      </div>
    );
  }

  if (activeTab === 'upload') {
    return (
      <div className="space-y-6">
        <AdminUpload />
      </div>
    );
  }

  if (activeTab === 'manage-users') {
    return (
      <div className="space-y-6">
        <AdminUsers />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AdminDocuments />
    </div>
  );
};

export default AdminDashboard;
