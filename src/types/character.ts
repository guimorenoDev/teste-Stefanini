export interface Character  {
  name: string;
  actor:string;
  dateOfBirth?:string;
  house?: string;
  patronus?: string;
  alive: boolean;
  image?: string;
};