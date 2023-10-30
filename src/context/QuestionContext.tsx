import {createContext, useContext} from 'react';
import {Option, Question} from '../types/Question';

export interface QuestionContextType {
  question: Question;
  index: number;
  setAnswer: (index: number, option: Option) => void;
}

export const QuestionContext = createContext<QuestionContextType>(
  {} as QuestionContextType,
);

export const useQuestion = () => useContext(QuestionContext);
