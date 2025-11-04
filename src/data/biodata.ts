export interface Biodata {
  personal: {
    name: string;
    tagline: string;
    dateOfBirth: string;
    age: number;
    height: string;
    religion: string;
    caste: string;
    education: string;
    occupation: string;
    company: string;
    address: string;
    location: string;
    profileImage: string;
  };
  family: {
    father: {
      name: string;
      occupation: string;
    };
    mother: {
      name: string;
      occupation: string;
    };
    siblings: {
      brothers?: { name: string; age?: number; occupation?: string; status?: string }[];
      sisters?: { name: string; age?: number; occupation?: string; status?: string }[];
    };
    background: string;
  };
  personalInfo: {
    hobbies: string[];
    personality: string;
    partnerPreferences: string;
  };
  gallery: string[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
  };
}
import profileImage from "../assets/1.png"; // local image
import profileImage2 from "../assets/2.jpg";
import profileImage3 from "../assets/3.jpg";
import profileImage4 from "../assets/4.jpg";
import profileImage5 from "../assets/5.jpg";
import profileImage6 from "../assets/6.jpg";
import profileImage7 from "../assets/7.jpg";

export const biodata: Biodata = {
  personal: {
    name: "Deepak Das",
    tagline: "Looking forward to a beautiful journey 💖",
    dateOfBirth: "17 May 2000",
    age: 25,
    height: "5'7\"",
    religion: "Hindu",
    caste: "Ravidas",
    education: "Btech in Mechanical Engineering from NIT Warangal",
    occupation: "Software Developer ",
    company: "Fenice energy Pvt. Ltd.",
    address: "Barwadih, Markacho, Koderma, Jharkhand, India",
    location: "Chennai, Tamilnadu, India",
    profileImage
  },
  family: {
    father: {
      name: "Shri Chanderdeo Ravidas",
      occupation: "Govt. Employee in KMC (Working)"
    },
    mother: {
      name: "Rinki Devi",
      occupation: "Homemaker"
    },
    siblings: {
      brothers: [
        { name: "Vishal Kumar Das", age: 17, occupation: "Student (11th Grade)" }
      ],
      sisters: [
        { name: "Manish Kumari", age: 22, occupation: "Graduation" },
        { name: "Indu Kumari", age: 19, occupation: "4th sem" },
      ]
    },
    background: "We are a close-knit, educated family with traditional values and modern outlook. Our family believes in mutual respect, love, and supporting each other's dreams. We celebrate all festivals together and maintain strong family bonds."
  },
  personalInfo: {
    hobbies: ["Reading novels", "Teaching","Exercise","Playing volleyball", "Cooking Indian cuisine", "Traveling", "Photography", "Listening music"],
    personality: "I'm an optimistic, caring, and ambitious person who believes in maintaining a perfect work-life balance. I value honesty, integrity, and kindness. I love spending time with family and friends, and I'm passionate about personal growth and helping others.",
    partnerPreferences: "Looking for a well-educated, understanding, and caring life partner who values family and relationships. Someone who is ambitious yet grounded, with a good sense of humor and respect for traditions. Preferably from a similar cultural background, aged 20-24, with a stable career."
  },
  gallery: [
    profileImage6,
    profileImage2,
    profileImage5,
    profileImage4,
    profileImage7,
    profileImage3,
  ],
  contact: {
    email: "deepakdasashutosh825318@gmail.com",
    phone: "+91 91287 53899",
    whatsapp: "+91 91287 53899"
  }
};