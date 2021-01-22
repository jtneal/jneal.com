export interface Project {
  company: string;
  date: number;
  description: string;
  id: number;
  image: string;
  location: string;
  skills: string[];
  title: string;
  uri: string;
  url: string;
}

export const nullProject: Project = {
  company: '',
  date: 0,
  description: '',
  id: 0,
  image: '',
  location: '',
  skills: [],
  title: '',
  uri: '',
  url: '',
};
