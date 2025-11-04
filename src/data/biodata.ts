export interface Biodata {
  personal: {
    name: string;
    tagline: string;
    dateOfBirth: string;
    age: number;
    height: string;
    weight: string;
    religion: string;
    caste: string;
    education: string;
    occupation: string;
    company: string;
    income: string;
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
    siblings: string;
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

export const biodata: Biodata = {
  personal: {
    name: "Priya Sharma",
    tagline: "Looking forward to a beautiful journey 💖",
    dateOfBirth: "15 March 1995",
    age: 29,
    height: "5'4\"",
    weight: "55 kg",
    religion: "Hindu",
    caste: "Brahmin",
    education: "MBA in Marketing",
    occupation: "Marketing Manager",
    company: "Tech Innovations Pvt. Ltd.",
    income: "₹12-15 LPA",
    location: "Mumbai, Maharashtra",
    profileImage: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg"
  },
  family: {
    father: {
      name: "Rajesh Sharma",
      occupation: "Senior Bank Manager (Retired)"
    },
    mother: {
      name: "Sunita Sharma",
      occupation: "Homemaker"
    },
    siblings: "One younger brother, Software Engineer in Bangalore",
    background: "We are a close-knit, educated family with traditional values and modern outlook. Our family believes in mutual respect, love, and supporting each other's dreams. We celebrate all festivals together and maintain strong family bonds."
  },
  personalInfo: {
    hobbies: ["Reading novels", "Yoga & Meditation", "Cooking Indian cuisine", "Traveling", "Photography", "Classical dancing"],
    personality: "I'm an optimistic, caring, and ambitious person who believes in maintaining a perfect work-life balance. I value honesty, integrity, and kindness. I love spending time with family and friends, and I'm passionate about personal growth and helping others.",
    partnerPreferences: "Looking for a well-educated, understanding, and caring life partner who values family and relationships. Someone who is ambitious yet grounded, with a good sense of humor and respect for traditions. Preferably from a similar cultural background, aged 28-34, with a stable career."
  },
  gallery: [
    "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg",
    "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
    "https://img.freepik.com/free-photo/close-up-portrait-young-woman-with-praying-hands_171337-11089.jpg",
    "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    "https://img.freepik.com/free-photo/positive-human-reactions-emotions-charming-young-female-with-fair-hair-broad-smile_176420-15184.jpg"
  ],
  contact: {
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210"
  }
};