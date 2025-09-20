import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const CreatePromotion = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const steps = [
    { number: 1, title: "Basic Details", description: "Promotion information and settings" },
    { number: 2, title: "Profile Criteria", description: "Target customer criteria" },
    { number: 3, title: "Service Criteria", description: "Service and discount settings" },
    { number: 4, title: "Promo Code", description: "Generate and configure promo codes" }
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/promotions">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Promotions
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create Promotion</h1>
            <p className="text-muted-foreground">4-step wizard to create promotional offers and discounts</p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <Card className="shadow-md">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            
            <div className="grid grid-cols-4 gap-4 mt-6">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2 ${
                    step.number === currentStep 
                      ? 'bg-primary text-primary-foreground' 
                      : step.number < currentStep
                      ? 'bg-success text-success-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.number < currentStep ? <Check className="h-4 w-4" /> : step.number}
                  </div>
                  <div className="space-y-1">
                    <p className={`text-xs font-medium ${
                      step.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            {steps[currentStep - 1].title}
          </CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step 1: Basic Details */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Promotion Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select promotion type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                      <SelectItem value="new-customer">New Customer</SelectItem>
                      <SelectItem value="loyalty">Loyalty Program</SelectItem>
                      <SelectItem value="referral">Referral Bonus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Promotion Name *</Label>
                <Input id="name" placeholder="e.g., Eid Special Offer 2024" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your promotion..." />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Valid From *</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Valid To *</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Applicable Days</Label>
                <div className="flex flex-wrap gap-3">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox id={day} />
                      <Label htmlFor={day} className="text-sm">{day}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pakistan">Pakistan</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="karachi">Karachi</SelectItem>
                      <SelectItem value="lahore">Lahore</SelectItem>
                      <SelectItem value="islamabad">Islamabad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Profile Criteria */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-3">
                <Label>Gender</Label>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="all-genders" />
                    <Label htmlFor="all-genders">All Genders</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Family Relation</Label>
                <div className="flex flex-wrap gap-3">
                  {['Self', 'Parent', 'Sibling', 'Child', 'Spouse'].map((relation) => (
                    <div key={relation} className="flex items-center space-x-2">
                      <Checkbox id={relation} />
                      <Label htmlFor={relation} className="text-sm">{relation}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minAge">Minimum Age</Label>
                  <Input id="minAge" type="number" placeholder="18" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxAge">Maximum Age</Label>
                  <Input id="maxAge" type="number" placeholder="65" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="linkedCustomers">Linked Customers</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select customer category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Customers</SelectItem>
                    <SelectItem value="new">New Customers Only</SelectItem>
                    <SelectItem value="existing">Existing Customers</SelectItem>
                    <SelectItem value="premium">Premium Members</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="corporate">Corporate Affiliation</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Companies</SelectItem>
                    <SelectItem value="unilever">Unilever</SelectItem>
                    <SelectItem value="10pearls">10Pearls</SelectItem>
                    <SelectItem value="none">No Corporate Link</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="insurance">Insurance Provider</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Providers</SelectItem>
                    <SelectItem value="allianz">Allianz</SelectItem>
                    <SelectItem value="efu">EFU</SelectItem>
                    <SelectItem value="jubilee">Jubilee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 3: Service Criteria */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="space-y-3">
                <Label>Applicable Services</Label>
                <div className="grid grid-cols-2 gap-3">
                  {['Video Consultation', 'Home Visit', 'Lab Test', 'Pharmacy', 'Homecare', 'Emergency'].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox id={service} />
                      <Label htmlFor={service} className="text-sm">{service}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="doctors">Applicable Doctors</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select doctors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Doctors</SelectItem>
                    <SelectItem value="dr-rohit">Dr. Rohit Sharma</SelectItem>
                    <SelectItem value="dr-rashid">Dr. Rashid Ali</SelectItem>
                    <SelectItem value="dr-sarah">Dr. Sarah Khan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label>Medical Specialties</Label>
                <div className="flex flex-wrap gap-3">
                  {['Cardiology', 'Dermatology', 'Pediatrics', 'General Medicine', 'Orthopedics'].map((specialty) => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <Checkbox id={specialty} />
                      <Label htmlFor={specialty} className="text-sm">{specialty}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discountType">Discount Type *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select discount type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="fixed">Fixed Amount</SelectItem>
                    <SelectItem value="free">Free Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="discountValue">Discount Value *</Label>
                  <Input id="discountValue" placeholder="e.g., 20 (for 20%)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minInvoice">Minimum Invoice Amount</Label>
                  <Input id="minInvoice" type="number" placeholder="500" />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Promo Code */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="promoCode">Promo Code *</Label>
                <div className="flex gap-2">
                  <Input id="promoCode" placeholder="e.g., EID2024" className="flex-1" />
                  <Button variant="outline">Generate</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Code must be unique and contain 4-15 characters
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maxTransactions">Maximum Transactions</Label>
                <Input id="maxTransactions" type="number" placeholder="100" />
                <p className="text-xs text-muted-foreground">
                  Total number of times this promo code can be used
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="perUserLimit">Per User Limit</Label>
                <Input id="perUserLimit" type="number" placeholder="1" />
                <p className="text-xs text-muted-foreground">
                  Maximum times a single user can use this code
                </p>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                <h4 className="font-semibold text-foreground">Promotion Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <Badge variant="outline">Seasonal</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount:</span>
                    <span className="font-medium text-success">20% Off</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valid Period:</span>
                    <span>Apr 1 - Apr 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target:</span>
                    <span>All Services</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card className="shadow-md">
        <CardContent className="pt-6">
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button 
                onClick={nextStep}
                className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                className="bg-success hover:bg-success/90 text-success-foreground"
              >
                <Check className="h-4 w-4 mr-2" />
                Create Promotion
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePromotion;