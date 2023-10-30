import {Question, Result} from '../types/Question';
import {HTTPService} from './HttpService';
import {axiosCient} from './client';

export const getQuestion = async () => {
  try {
    const data = await axiosCient.get(HTTPService.NEXT_QUESTION);
    return data.data as Question;
  } catch (e) {
    throw e;
  }
};
export const getAnswer = async (id: number) => {
  try {
    const data = await axiosCient.get(HTTPService.GET_ANSWER, {
      params: {
        id: id,
      },
    });
    return data.data as Result;
  } catch (e) {
    throw e;
  }
};
