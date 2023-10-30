import React, {useCallback, useMemo} from 'react';
import {Option} from '../../types/Question';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useQuestion} from '../../context/QuestionContext';
import {Icons} from '../../../assets/icons';

interface OptionItemProps {
  item: Option;
}

const OptionItem = ({item}: OptionItemProps) => {
  const {question, setAnswer, index} = useQuestion();

  const isSelected = useMemo(() => {
    return question?.selectedOption?.id === item?.id;
  }, [question, item]);

  const onSelect = useCallback(() => {
    if (!question?.selectedOption) {
      setAnswer(index, item);
    }
  }, [item, setAnswer, index, question]);

  const backgroundColor = useMemo(() => {
    if (question?.selectedOption) {
      if (item.id === question.correctOption?.id) {
        return 'rgba(40, 177, 143, 0.7)';
      }
      if (item.id === question.selectedOption?.id) {
        if (item.id !== question.correctOption?.id) {
          return 'rgba(220, 95, 95, 0.70)';
        }
      }
    }
    return 'rgba(255, 255, 255, 0.50)';
  }, [item, question]);

  return (
    <TouchableOpacity
      style={[
        styles.item,
        {
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={onSelect}>
      <Text style={styles.answer}>{item.answer}</Text>
      <View style={styles.imageContainer}>
        {isSelected && <Image source={Icons.selected} />}
      </View>
    </TouchableOpacity>
  );
};
const OptionsLayout = () => {
  const {question} = useQuestion();

  return (
    <View style={styles.container}>
      {question?.options?.map(item => {
        return <OptionItem item={item} key={item.id.toString()} />;
      })}
      <Text style={styles.username}>{question?.user?.name}</Text>
      <Text style={styles.description}>{question?.description}</Text>
    </View>
  );
};
export default OptionsLayout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginEnd: 32,
  },
  item: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    borderRadius: 4,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  answer: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '500',
    flex: 1,
  },
  username: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: '600',
    marginTop: 8,
  },
  description: {
    fontSize: 13,
    color: '#FFF',
    marginTop: 2,
  },
  imageContainer: {
    width: 45,
    height: 45,
    marginStart: 5,
  },
});
