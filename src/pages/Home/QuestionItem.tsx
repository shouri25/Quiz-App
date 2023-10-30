import React, {useMemo} from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
import {Option, Question} from '../../types/Question';
import HomeHeader from '../../components/HomeHeader';
import {
  QuestionContext,
  QuestionContextType,
} from '../../context/QuestionContext';
import QuestionLayout from './QuestionLayout';
import Footer from './components/Footer';
import {styles} from './styles';

interface QuestionItemProps {
  item: Question;
  index: number;
  setAnswer: (index: number, option: Option) => void;
}

const QuestionItem = ({item, index, setAnswer}: QuestionItemProps) => {
  const {height, width} = useMemo(() => {
    return {
      height: Dimensions.get('window').height - 55,
      width: Dimensions.get('screen').width,
    };
  }, []);

  const value = useMemo(() => {
    return {
      question: {...item},
      index: index,
      setAnswer: setAnswer,
    } as QuestionContextType;
  }, [item, index, setAnswer]);

  return (
    <ImageBackground
      source={{
        uri: item?.image,
      }}
      style={[
        styles.container,
        {
          height: height,
          width: width,
        },
      ]}>
      <QuestionContext.Provider value={value}>
        <HomeHeader />

        <View style={styles.container}>
          <QuestionLayout />
          <Footer />
        </View>
      </QuestionContext.Provider>
    </ImageBackground>
  );
};
export default QuestionItem;
