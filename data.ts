export const personalInfo = [
  { label: "Name", value: "Vyshak" },
  { label: "Location", value: "India" },
  // Add more items as needed
];

export const expertise = [
  {
    icon: require('lucide-react').Code,
    title: "Web Development",
    description: "React, Flutter, Full-Stack",
  },
  // Add more expertise items as needed
];

export type PersonalInfoItem = {
  label: string;
  value: string;
};