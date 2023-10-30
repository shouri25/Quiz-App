import React from 'react';
import {FlatList} from 'react-native';
import {Option, Question} from '../../types/Question';
import QuestionItem from './QuestionItem';

interface HomeLayoutProps {
  questions: Question[];
  onEndReached: () => void;
  setAnswer: (index: number, option: Option) => void;
  currentIndex?: number;
}

export const HomeLayout = ({
  questions,
  onEndReached,
  setAnswer,
  currentIndex,
}: HomeLayoutProps) => {
  return (
    <FlatList
      data={questions}
      maxToRenderPerBatch={1}
      keyExtractor={(item, index) => index.toString()}
      pagingEnabled={true}
      extraData={currentIndex}
      bounces={false}
      windowSize={1}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({item, index}) => {
        return <QuestionItem item={item} index={index} setAnswer={setAnswer} />;
      }}
    />
  );
};
export default HomeLayout;
