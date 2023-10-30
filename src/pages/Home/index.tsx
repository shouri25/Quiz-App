import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {getAnswer, getQuestion} from '../../service/questions.service';
import {Option, Question} from '../../types/Question';
import HomeLayout from './HomeLayout';
import Footer from '../../components/Footer';
import {styles} from './styles';

const HomePage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>();
  const getNextQuestion = useCallback(async () => {
    try {
      const result = await getQuestion();
      const answer = await getAnswer(result.id);
      const newData: Question = {
        ...result,
        correctOption: answer.correct_options?.[0],
      };
      setQuestions(que => [...que, newData]);
    } catch (e) {
      // TODO
    }
  }, []);

  useEffect(() => {
    if (questions.length < 2) {
      getNextQuestion();
    }
  }, [questions, getNextQuestion]);

  const setAnswer = useCallback(
    (index: number, option: Option) => {
      const data = [...questions];
      data[index] = {
        ...data[index],
        selectedOption: option,
      };
      setQuestions([...data]);
      setCurrentIndex(index);
    },
    [questions],
  );

  return (
    <View style={styles.container}>
      <HomeLayout
        questions={questions}
        onEndReached={getNextQuestion}
        setAnswer={setAnswer}
        currentIndex={currentIndex}
      />
      <Footer />
    </View>
  );
};
export default HomePage;
