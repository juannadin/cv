
export type Data = {
  header: Header;
  skills: Skills;
  experiences: Experiences;
  educations: Educations;
  extraMiles: ExtraMiles;
  interests: Interests;
};

export type Header = {
  title: string;
  subtitle: string;
  about: string;
  motto: string;
  personalInfo: Array<PersonalInfo>;
}

export type Skills = {
  soft: Array<Skill>;
  technical: Array<Skill>;
  languajes: Array<Skill>;
}

export type Experiences = Array<Experience>

export type Educations = Array<Education>

export type ExtraMiles = Array<string>

export type Interests = Array<string>

type PersonalInfo = {
  type: string;
  value: string;
};

type Skill = {
  name: string;
  ammount: number;
};

type Experience = {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
};

type Education = {
  institution: string;
  title: string;
  degree: string;
  startDate: string;
  endDate: string;
};

const data: Data = {
  header: {
    title: 'Juan Ignacio Nadin.',
    subtitle: '[ Product Owner & Full Stack Developer ]',
    about: 'I\'m a data-driven, product-oriented and results-focused person, with +10 years of experience in the software industry. I understand that technology is no limitation for product design.',
    motto: 'There\'s always a way.',
    personalInfo: [
      {
        type: 'Address',
        value: 'Martinez, Buenos Aires, ARG',
      },
      {
        type: 'Email',
        value: 'juan.ignacio.nadin@gmail.com',
      },
      {
        type: 'Cell',
        value: '+54 11 6332-2736',
      },
    ],
  },
  skills: {
    soft: [
      {
        name: 'Leadership',
        ammount: 90,
      },
      {
        name: 'Team Work',
        ammount: 85,
      },
      {
        name: 'Decision-making',
        ammount: 90,
      },
      {
        name: 'Time Management',
        ammount: 80,
      },
      {
        name: 'Communication',
        ammount: 95,
      },
      {
        name: 'Agile Development',
        ammount: 80,
      },
    ],
    technical: [
      {
        name: 'Node.js',
        ammount: 95,
      },
      {
        name: 'Express.js',
        ammount: 90,
      },
      {
        name: 'React.js',
        ammount: 90,
      },
      {
        name: 'Typescript',
        ammount: 80,
      },
      {
        name: 'AWS',
        ammount: 75,
      },
      {
        name: 'Unit & e2e testing',
        ammount: 95,
      },
    ],
    languajes: [
      {
        name: 'Spanish',
        ammount: 100,
      },
      {
        name: 'English',
        ammount: 90,
      },
      {
        name: 'Portuguesse',
        ammount: 20,
      },
    ],
  },
  experiences: [
    {
      company: 'Mercado Libre',
      jobTitle: 'Senior Full Stack Developer',
      startDate: 'Nov 2016',
      endDate: 'Present',
    },
    {
      company: 'Wunderman',
      jobTitle: 'Technical Leader',
      startDate: 'Sep 2015',
      endDate: 'Nov 2016',
    },
    {
      company: 'Wunderman',
      jobTitle: 'Senior Front End Developer',
      startDate: 'Jun 2012',
      endDate: 'Aug 2015',
    },
    {
      company: 'IBM',
      jobTitle: 'Senior Full Stack Developer',
      startDate: 'Dec 2010',
      endDate: 'May 2012',
    },
  ],
  educations: [
    {
      institution: 'Escuela de Arte Multimedial Da Vinci',
      title: 'Web Design & Programming',
      degree: 'Technical degree',
      startDate: '2009',
      endDate: '2012',
    },
    {
      institution: 'Escuela San Ladislao',
      title: 'Economy and Management',
      degree: 'High School degree',
      startDate: '2002',
      endDate: '2004',
    },
  ],
  extraMiles: [
    'User Experience',
    'Jira, Trello',
    'Adobe Illustrator & Photoshop',
    'Zeplin',
    'SQL, AEM, PHP, jQuery',
  ],
  interests: [
    'Music production',
    'Composition',
    'Guitar and Piano',
    'Parenthood',
    'Volleyball',
  ],
};

export default data;
