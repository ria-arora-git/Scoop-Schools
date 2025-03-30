export interface School {
    id: string;
    name: string;
    address: string;
    city: string;
    facilities: string;
    contact?: string;
    email?: string;
    website?: string;
    description?: string;
  }
  
  export type UserType = {
    id: string;
    email: string;
    contact?: string;
    password: string;
    childName: string;
    dob: Date;
    gender: string;
    photo?: string;
    parentsName: string[];
    address: string;
    occupation: string[];
    curriculum: string;
    schools: string[];
    grade: string;
  };
  