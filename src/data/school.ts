export const school = {
  name: "The Vision School and Rehabilitation Centre",
  alt: "Jamia Abdullah Ibn Umme Maktum",
  trust: "Anware Hidayat Trust",
  trustReg: "E-7070",
  pan: "AAETA6522D",
  founded: 2013,
  founder: "Mufti Raees Khan",
  students: "200+",
  states: 17,
  address:
    "Survey No. 30/12, Jamia Nagar, Behind Bramha Emerald County, Kausar Baugh Road, Kondhwa Khurd, Pune, Maharashtra - 411048",
  phones: ["+91 82081 66006", "+91 81492 67567"],
  email: "visionbschool@gmail.com",
  hours: "Monday to Saturday, 7:15 AM - 4:00 PM (Sundays closed to visitors)",
  upi: "7276863845",
  banks: [
    {
      bank: "HDFC Bank",
      account: "50200035449265",        
      ifsc: "HDFC0000029",
      branch: "Kondhwa, Pune",
    },
    {
      bank: "Bank of Maharashtra",
      account: "60209828384",
      ifsc: "MAHB0001210",
      branch: "Salunkhe Vihar Road, Pune",
    },
  ],
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Academics" },
  { to: "/campus", label: "Campus Life" },
  { to: "/admissions", label: "Admissions" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact Us" },
] as const;
