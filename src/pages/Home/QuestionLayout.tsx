import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useQuestion} from '../../context/QuestionContext';
import OptionsLayout from './OptionsLayout';
import ButtonsLayout from './components/ButtonsLayout';

const QuestionLayout = () => {
  const {question: data} = useQuestion();
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{data?.question}</Text>
      </View>
      <View style={styles.bottom}>
        <OptionsLayout />
        <ButtonsLayout />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  questionContainer: {
    flex: 1,
    marginTop: 16,
    marginEnd: 77,
  },
  question: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
    backgroundColor: '#000',
    opacity: 0.6,
    padding: 8,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default QuestionLayout;
