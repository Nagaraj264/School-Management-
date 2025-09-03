import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { School, MapPin, Phone, Mail, Upload } from "lucide-react";
import Navigation from "@/components/Navigation";

interface SchoolFormData {
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: FileList;
}

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SchoolFormData>();

  const onSubmit = async (data: SchoolFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email_id", data.email_id);

      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }

      // ✅ relative API path (no CORS issues)
      const res = await fetch("http://localhost:3000/api/testDB/addSchool", {
        method: "POST",
        body: formData,
      });

      // Clear form after submit
      reset();
    } catch (error) {
      console.error("Form submit error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
              <School className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Add New School
            </h1>
            <p className="text-muted-foreground">
              Fill in the school details to add it to our directory
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-card border-0 bg-gradient-card backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                School Information
              </CardTitle>
              <CardDescription className="text-center">
                Please provide accurate information about the school
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* School Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">School Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter school name"
                    {...register("name", { required: "School name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    placeholder="Enter full address"
                    {...register("address", { required: "Address is required" })}
                  />
                  {errors.address && (
                    <p className="text-sm text-destructive">{errors.address.message}</p>
                  )}
                </div>

                {/* City + State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="Enter city"
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive">{errors.city.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      placeholder="Enter state"
                      {...register("state", { required: "State is required" })}
                    />
                    {errors.state && (
                      <p className="text-sm text-destructive">{errors.state.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="Enter contact number"
                    {...register("contact", {
                      required: "Contact number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                  />
                  {errors.contact && (
                    <p className="text-sm text-destructive">{errors.contact.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email_id">Email Address *</Label>
                  <Input
                    id="email_id"
                    type="email"
                    placeholder="Enter email address"
                    {...register("email_id", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email_id && (
                    <p className="text-sm text-destructive">{errors.email_id.message}</p>
                  )}
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image">School Image</Label>
                  <Input id="image" type="file" accept="image/*" {...register("image")} />
                </div>

                {/* Submit */}
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Saving..." : "Add School"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddSchool;
