"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  studentName: z.string().min(2, "Name is required"),
  fatherName: z.string().min(2, "Father's name is required"),
  motherName: z.string().min(2, "Mother's name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  className: z.string().min(1, "Class is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  address: z.string().min(5, "Address is required"),
  previousSchool: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const AdmissionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // In a real app, we would call an API route here
      // const response = await fetch("/api/admission", { method: "POST", body: JSON.stringify(data) });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Application submitted successfully! We will contact you soon.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-t-4 border-t-primary">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-primary">Admission Application Form</CardTitle>
        <CardDescription>
          Please fill in the details correctly. Fields marked with * are mandatory.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name *</Label>
              <Input id="studentName" {...register("studentName")} placeholder="Enter full name" />
              {errors.studentName && <p className="text-xs text-destructive">{errors.studentName.message}</p>}
            </div>

            {/* Class Applied For */}
            <div className="space-y-2">
              <Label htmlFor="className">Class Applied For *</Label>
              <Select onValueChange={(value: any) => setValue("className", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {["Nursery", "LKG", "UKG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"].map((cls) => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.className && <p className="text-xs text-destructive">{errors.className.message}</p>}
            </div>

            {/* Father's Name */}
            <div className="space-y-2">
              <Label htmlFor="fatherName">Father's Name *</Label>
              <Input id="fatherName" {...register("fatherName")} placeholder="Enter father's name" />
              {errors.fatherName && <p className="text-xs text-destructive">{errors.fatherName.message}</p>}
            </div>

            {/* Mother's Name */}
            <div className="space-y-2">
              <Label htmlFor="motherName">Mother's Name *</Label>
              <Input id="motherName" {...register("motherName")} placeholder="Enter mother's name" />
              {errors.motherName && <p className="text-xs text-destructive">{errors.motherName.message}</p>}
            </div>

            {/* DOB */}
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
              {errors.dateOfBirth && <p className="text-xs text-destructive">{errors.dateOfBirth.message}</p>}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender *</Label>
              <Select onValueChange={(value: any) => setValue("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-xs text-destructive">{errors.gender.message}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" {...register("phone")} placeholder="10-digit mobile number" />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" {...register("email")} placeholder="example@mail.com" />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Full Address *</Label>
            <Textarea id="address" {...register("address")} placeholder="Enter current residential address" />
            {errors.address && <p className="text-xs text-destructive">{errors.address.message}</p>}
          </div>

          {/* Previous School */}
          <div className="space-y-2">
            <Label htmlFor="previousSchool">Previous School (if any)</Label>
            <Input id="previousSchool" {...register("previousSchool")} placeholder="Name of previous school" />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-bold" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
