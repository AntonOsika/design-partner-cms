import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PartnerForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [partner, setPartner] = useState({ name: "", contact: "", status: "Active", notes: "" });

  useEffect(() => {
    if (isEdit) {
      // Fetch partner data by id and set it to state
      // This is a placeholder, replace with actual data fetching logic
      setPartner({ name: "Partner 1", contact: "contact1@example.com", status: "Active", notes: "Some notes" });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartner(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    navigate("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{isEdit ? "Edit Partner" : "Add New Partner"}</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" value={partner.name} onChange={handleChange} placeholder="Name" required />
        <Input name="contact" value={partner.contact} onChange={handleChange} placeholder="Contact Information" required />
        <div>
          <label>Status</label>
          <select name="status" value={partner.status} onChange={handleChange} className="block w-full mt-1">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <Textarea name="notes" value={partner.notes} onChange={handleChange} placeholder="Notes" />
        <div className="flex space-x-4">
          <Button type="submit">Save</Button>
          <Button type="button" variant="outline" onClick={() => navigate("/dashboard")}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;