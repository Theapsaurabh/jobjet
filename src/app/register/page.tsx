"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail, User, UserCheck, Building, Briefcase } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

interface RegistrationFormData {
  name: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "applicant" | "employer";
  agreeToTerms: boolean;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "applicant",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md transform transition-all duration-500 hover:scale-[1.01]">
        {/* Animated Header */}
        <div className="text-center mb-8 animate-slide-down">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 hover:scale-110">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
            Join JobJet
          </h1>
          <p className="text-slate-600 text-lg">Start your career journey today</p>
        </div>

        <Card className="w-full shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-slide-up">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-semibold text-slate-800">
              Create Account
            </CardTitle>
            <CardDescription className="text-slate-500 text-base">
              Fill in your details to get started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-3">
                <Label className="text-slate-700 font-medium text-sm">I am a *</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleInputChange("role", "applicant")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-3 group ${
                      formData.role === "applicant" 
                        ? "border-blue-500 bg-blue-50 shadow-lg scale-105 ring-2 ring-blue-200" 
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${
                      formData.role === "applicant" ? "bg-blue-100" : "bg-slate-100 group-hover:bg-slate-200"
                    }`}>
                      <Briefcase className={`w-5 h-5 ${
                        formData.role === "applicant" ? "text-blue-600" : "text-slate-400"
                      }`} />
                    </div>
                    <span className={`font-medium text-sm ${
                      formData.role === "applicant" ? "text-blue-700" : "text-slate-600"
                    }`}>
                      Job Seeker
                    </span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleInputChange("role", "employer")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-3 group ${
                      formData.role === "employer" 
                        ? "border-green-500 bg-green-50 shadow-lg scale-105 ring-2 ring-green-200" 
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${
                      formData.role === "employer" ? "bg-green-100" : "bg-slate-100 group-hover:bg-slate-200"
                    }`}>
                      <Building className={`w-5 h-5 ${
                        formData.role === "employer" ? "text-green-600" : "text-slate-400"
                      }`} />
                    </div>
                    <span className={`font-medium text-sm ${
                      formData.role === "employer" ? "text-green-700" : "text-slate-600"
                    }`}>
                      Employer
                    </span>
                  </button>
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-medium text-sm">
                  Full Name *
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-4 h-4 text-slate-400 transition-colors group-focus-within:text-blue-500" />
                  </div>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("name", e.target.value)
                    }
                    className="pl-10 pr-4 py-3 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 rounded-lg bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Username Field */}
              <div className="space-y-2">
                <Label htmlFor="userName" className="text-slate-700 font-medium text-sm">
                  Username *
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <UserCheck className="w-4 h-4 text-slate-400 transition-colors group-focus-within:text-blue-500" />
                  </div>
                  <Input
                    id="userName"
                    type="text"
                    placeholder="Choose a username"
                    required
                    value={formData.userName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("userName", e.target.value)
                    }
                    className="pl-10 pr-4 py-3 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 rounded-lg bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium text-sm">
                  Email Address *
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-4 h-4 text-slate-400 transition-colors group-focus-within:text-blue-500" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("email", e.target.value)
                    }
                    className="pl-10 pr-4 py-3 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 rounded-lg bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 font-medium text-sm">
                  Password *
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-4 h-4 text-slate-400 transition-colors group-focus-within:text-blue-500" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    required
                    value={formData.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="pl-10 pr-12 py-3 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 rounded-lg bg-white/50 backdrop-blur-sm"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-slate-100 rounded-md transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-slate-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-700 font-medium text-sm">
                  Confirm Password *
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-4 h-4 text-slate-400 transition-colors group-focus-within:text-blue-500" />
                  </div>
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="pl-10 pr-12 py-3 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 rounded-lg bg-white/50 backdrop-blur-sm"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-slate-100 rounded-md transition-colors"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-slate-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg border border-slate-200 transition-colors hover:bg-slate-100">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 transition-colors"
                />
                <Label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer leading-tight">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium underline-offset-2 hover:underline transition-colors">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium underline-offset-2 hover:underline transition-colors">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isLoading || !formData.agreeToTerms}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>

              {/* Login Link */}
              <div className="text-center pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-blue-600 hover:text-blue-700 font-semibold underline-offset-2 hover:underline transition-colors"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;