// Mock data for healthcare SaaS admin portal

export const mockCustomers = [
  {
    id: 1,
    name: "Ali Hassan",
    gender: "Male",
    age: 34,
    phone: "+92-300-1234567",
    email: "ali.hassan@email.com",
    insurance: "Allianz Health",
    company: "Unilever Pakistan",
    status: "Active",
    joinDate: "2023-01-15"
  },
  {
    id: 2,
    name: "Shaalimar Ahmed",
    gender: "Female", 
    age: 28,
    phone: "+92-321-9876543",
    email: "shaalimar@email.com",
    insurance: "EFU Health",
    company: "10Pearls",
    status: "Active",
    joinDate: "2023-03-22"
  },
  {
    id: 3,
    name: "Antrikish Kumar",
    gender: "Male",
    age: 42,
    phone: "+92-333-5555666",
    email: "antrikish.k@email.com", 
    insurance: "Jubilee Insurance",
    company: "Independent",
    status: "Inactive",
    joinDate: "2022-11-08"
  }
];

export const mockDoctors = [
  {
    id: 1,
    name: "Dr. Rohit Sharma",
    specialty: "Cardiology",
    experience: "12 years",
    availability: "Mon-Fri 9AM-5PM",
    consultationFee: 2500,
    rating: 4.8,
    phone: "+92-300-7777888",
    email: "dr.rohit@mediq.com",
    status: "Available"
  },
  {
    id: 2,
    name: "Dr. Rashid Ali",
    specialty: "Dermatology", 
    experience: "8 years",
    availability: "Tue-Sat 10AM-6PM",
    consultationFee: 2000,
    rating: 4.6,
    phone: "+92-321-9999000",
    email: "dr.rashid@mediq.com",
    status: "Busy"
  },
  {
    id: 3,
    name: "Dr. Sarah Khan",
    specialty: "Pediatrics",
    experience: "15 years", 
    availability: "Mon-Wed 8AM-4PM",
    consultationFee: 2200,
    rating: 4.9,
    phone: "+92-333-1111222",
    email: "dr.sarah@mediq.com",
    status: "Available"
  }
];

export const mockOrders = [
  {
    id: "ORD-001",
    customer: "Ali Hassan",
    service: "Video Consultation",
    doctor: "Dr. Rohit Sharma",
    date: "2024-01-20",
    city: "Karachi",
    amount: 2500,
    status: "Completed",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card"
  },
  {
    id: "ORD-002", 
    customer: "Shaalimar Ahmed",
    service: "Home Visit",
    doctor: "Dr. Sarah Khan",
    date: "2024-01-21",
    city: "Lahore",
    amount: 3500,
    status: "Pending",
    paymentStatus: "Pending",
    paymentMethod: "Cash on delivery"
  },
  {
    id: "ORD-003",
    customer: "Antrikish Kumar", 
    service: "Lab Test",
    doctor: "N/A",
    date: "2024-01-19",
    city: "Islamabad",
    amount: 1500,
    status: "Cancelled",
    paymentStatus: "Refunded", 
    paymentMethod: "Insurance"
  }
];

export const mockProducts = [
  {
    id: 1,
    name: "Panadol",
    category: "Pain Relief",
    price: 15,
    stock: 500,
    manufacturer: "GSK",
    status: "Available"
  },
  {
    id: 2,
    name: "Surbex-Z",
    category: "Vitamins",
    price: 45,
    stock: 200,
    manufacturer: "Abbott",
    status: "Available"
  },
  {
    id: 3,
    name: "Sofin",
    category: "Antibiotics", 
    price: 120,
    stock: 0,
    manufacturer: "Hilton Pharma",
    status: "Out of Stock"
  }
];

export const mockRequests = [
  {
    id: "REQ-001",
    type: "Pharmacy",
    customer: "Ali Hassan",
    description: "Prescription medicines",
    status: "Pending",
    date: "2024-01-20",
    priority: "Medium"
  },
  {
    id: "REQ-002",
    type: "Lab Test", 
    customer: "Shaalimar Ahmed",
    description: "Complete Blood Count",
    status: "Confirmed",
    date: "2024-01-21",
    priority: "High"
  },
  {
    id: "REQ-003",
    type: "Doctor Visit",
    customer: "Antrikish Kumar",
    description: "Cardiology consultation",
    status: "Completed",
    date: "2024-01-19", 
    priority: "Low"
  }
];

export const mockLaboratories = [
  {
    id: 1,
    name: "Dow Lab Karachi",
    contactPerson: "Shaheem ur rehman",
    phone: "+92-321-2020222",
    email: "shaheem.lab@gmail.com",
    city: "Karachi",
    address: "SB 45, Gulshan 13-B Block 13 B Gulshan-e-Iqbal",
    status: "Enabled",
    validTill: "30/09/2023"
  },
  {
    id: 2,
    name: "Agha Khan Laboratory",
    contactPerson: "Agha lab Admin", 
    phone: "+92-345-9999998",
    email: "agha@mediq.com",
    city: "Karachi",
    address: "Stadium Road, Karachi",
    status: "Enabled",
    validTill: "07/06/2024"
  }
];

export const mockPromotions = [
  {
    id: 1,
    name: "Eid Offer 2024",
    type: "Seasonal",
    discount: "20%",
    validFrom: "2024-04-01",
    validTo: "2024-04-15",
    status: "Active",
    usageCount: 150
  },
  {
    id: 2,
    name: "Welcome Offer",
    type: "New Customer",
    discount: "Free consultation",
    validFrom: "2024-01-01", 
    validTo: "2024-12-31",
    status: "Active",
    usageCount: 89
  },
  {
    id: 3,
    name: "Azadi Discount", 
    type: "National",
    discount: "14%",
    validFrom: "2024-08-10",
    validTo: "2024-08-20",
    status: "Expired",
    usageCount: 245
  }
];

export const mockUsers = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed@mediq.com",
    role: "Administrator",
    phone: "+92-300-1111111",
    status: "Active",
    lastLogin: "2024-01-20 10:30 AM"
  },
  {
    id: 2,
    name: "Sara Khan", 
    email: "sara@mediq.com",
    role: "Manager",
    phone: "+92-321-2222222",
    status: "Active",
    lastLogin: "2024-01-20 09:15 AM"
  },
  {
    id: 3,
    name: "Hassan Sheikh",
    email: "hassan@mediq.com",
    role: "Operator",
    phone: "+92-333-3333333", 
    status: "Inactive",
    lastLogin: "2024-01-18 02:45 PM"
  }
];

export const dashboardStats = {
  activeDoctors: 25,
  pendingRequests: 12,
  ordersToday: 47,
  monthlyRevenue: 750000,
  totalCustomers: 1250,
  completedOrders: 890
};