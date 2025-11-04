export interface Biodata {
  personal: {
    name: string;
    tagline: string;
    dateOfBirth: string;
    age: number;
    height: string;
    // weight: string;
    religion: string;
    caste: string;
    education: string;
    occupation: string;
    company: string;
    // income: string;
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
    name: "Deepak Das",
    tagline: "Looking forward to a beautiful journey 💖",
    dateOfBirth: "17 May 2000",
    age: 25,
    height: "5'7\"",
    // weight: "55 kg",
    religion: "Hindu",
    caste: "Ravidasia",
    education: "Btech in Mechanical Engineering from NIT Warangal",
    occupation: "Software Developer",
    company: "Fenice energy Pvt. Ltd.",
    // income: "₹12-15 LPA",
    location: "Chennai, Tamilnadu, India",
    profileImage: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg"
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
    siblings: "One younger brother, Studying in 11th grade",
    background: "We are a close-knit, educated family with traditional values and modern outlook. Our family believes in mutual respect, love, and supporting each other's dreams. We celebrate all festivals together and maintain strong family bonds."
  },
  personalInfo: {
    hobbies: ["Reading novels", "Yoga & Meditation", "Cooking Indian cuisine", "Traveling", "Photography", "Listening music"],
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
    email: "deepakdasashutosh825318@gmail.com",
    phone: "+91 91287 53899",
    whatsapp: "+91 91287 53899"
  }
};