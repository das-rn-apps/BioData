import profileImage from "../assets/1.png";
import me2 from "../assets/2.jpg";
import me3 from "../assets/3.jpg";
import me4 from "../assets/4.jpg";
import me5 from "../assets/5.jpg";
import me6 from "../assets/6.jpg";
import me7 from "../assets/7.jpg";
import mummy from "../assets/mummy.png";
import papa from "../assets/papa.png";
import dadaji from "../assets/dadaji.png";
import dadi from "../assets/dadi.png";
import manisha from "../assets/manisha.png";
import indu from "../assets/indu.png";
import vishal from "../assets/vishal.png";

export interface FamilyMember {
  name: string;
  age?: number;
  relation?: string;
  occupation?: string;
  education?: string;
  image?: string;
  location?: string;
}

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
    father: FamilyMember;
    mother: FamilyMember;
    grandfather: FamilyMember;
    grandmother: FamilyMember;
    me: FamilyMember;
    sister1: FamilyMember;
    sister2: FamilyMember;
    brother: FamilyMember;
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
    grandfather: {
      name: "Late Shri Ramkeshwar Ravidas",
      relation: "Grandfather",
      occupation: "Former Govt. Employee",
      image: dadaji,
    },
    grandmother: {
      name: "Smt. Koshila Devi",
      relation: "Grandmother",
      occupation: "Homemaker",
      image: dadi,

    },
    father: {
      name: "Shri Chanderdeo Ravidas",
      relation: "Father",
      occupation: "Govt. Employee",
      image: papa,

    },
    mother: {
      name: "Smt. Rinki Devi",
      relation: "Mother",
      occupation: "Homemaker",
      image: mummy,
    },
    me: {
      name: "Deepak Das",
      relation: "Self",
      occupation: "Software Developer",
      image: profileImage,
    },
    sister1: {
      name: "Manisha Kumari",
      relation: "Younger Sister",
      occupation: "Graduation",
      image: manisha,
    },
    sister2: {
      name: "Indu Kumari",
      relation: "Younger Sister",
      occupation: "VIth semester",
      image: indu,
    },
    brother: {
      name: "Vishal Kumar Das",
      relation: "Younger Brother",
      occupation: "XIth Standard",
      image: vishal,
    },
  }
  ,
  personalInfo: {
    hobbies: ["Reading & Teaching", "Exercise", "Playing volleyball", "Exploring AI", "Cooking Indian cuisine", "Traveling", "Photography", "Listening music"],
    personality: "I'm an optimistic, caring, and ambitious person who believes in maintaining a perfect work-life balance. I value honesty, integrity, and kindness. I love spending time with family and friends, and I'm passionate about personal growth and helping others.",
    partnerPreferences: "Looking for a well-educated, understanding, and caring life partner who values family and relationships. Someone who is ambitious yet grounded, with a good sense of humor and respect for traditions. Preferably from a similar cultural background, aged 20-24, with a stable career."
  },
  gallery: [
    me6,
    me2,
    me5,
    me4,
    me7,
    me3,
  ],
  contact: {
    email: "deepakdasashutosh825318@gmail.com",
    phone: "+91 91287 53899",
    whatsapp: "+91 91287 53899"
  }
};

export interface Position {
  x: number;
  y: number;
}

export interface ResponsivePosition {
  desktop: Position;
  mobile: Position;
}

export const basePositions: Record<string, ResponsivePosition> = {
  grandfather: {
    desktop: { x: 33, y: 20 },
    mobile: { x: 30, y: 25 },
  },
  grandmother: {
    desktop: { x: 66, y: 20 },
    mobile: { x: 67, y: 25 },
  },
  father: {
    desktop: { x: 40, y: 45 },
    mobile: { x: 30, y: 50 },
  },
  mother: {
    desktop: { x: 60, y: 45 },
    mobile: { x: 70, y: 50 },
  },
  me: {
    desktop: { x: 20, y: 70 },
    mobile: { x: 14, y: 75 },
  },
  sister1: {
    desktop: { x: 40, y: 70 },
    mobile: { x: 38, y: 75 },
  },
  sister2: {
    desktop: { x: 60, y: 70 },
    mobile: { x: 63, y: 75 },
  },
  brother: {
    desktop: { x: 80, y: 70 },
    mobile: { x: 86, y: 75 },
  },
};

export const getResponsivePositions = (): Record<string, Position> => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const responsivePositions: Record<string, Position> = {};

  Object.keys(basePositions).forEach((key) => {
    const deviceType = isMobile ? "mobile" : "desktop";
    responsivePositions[key] = basePositions[key][deviceType];
  });

  return responsivePositions;
};
