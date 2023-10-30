export interface Option {
  id: string;
  answer: string;
}

export interface User {
  name: string;
  avatar: string;
}

export interface Question {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: Option[];
  user: User;
  selectedOption?: Option;
  correctOption?: Option;
}
export interface Result {
  id: number;
  correct_options: Option[];
}
