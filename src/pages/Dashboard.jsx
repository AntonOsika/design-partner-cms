import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([
    { id: 1, name: "Partner 1", contact: "contact1@example.com", status: "Active" },
    { id: 2, name: "Partner 2", contact: "contact2@example.com", status: "Inactive" },
  ]);

  const handleEdit = (id) => {
    navigate(`/partners/edit/${id}`);
  };

  const handleDelete = (id) => {
    setPartners(partners.filter(partner => partner.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={() => navigate("/partners/new")}>Add New Partner</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners.map(partner => (
            <TableRow key={partner.id}>
              <TableCell>{partner.name}</TableCell>
              <TableCell>{partner.contact}</TableCell>
              <TableCell>{partner.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => handleEdit(partner.id)}>Edit</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(partner.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;