import React, {useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const renderIt = (choice) => {
  return (
    <View
      style={{
        //backgroundColor: constants.RED,
        backgroundColor: 'rgb(0,122,255)',
        borderRadius: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 4,
      }}>
      <Text
        style={{
          color: 'white',
          //fontFamily: 'Nunito-Light',
          borderRadius: 5,
        }}>
        {choice}
      </Text>
    </View>
  );
};

const BubbleInput = ({
  data,
  renderItem = renderIt,
  addData = (item) => {
    return item;
  },
  placeholder = 'Add choices here',
}) => {
  const [dummyState, setDummyState] = useState(false);
  const ref = useRef(null);

  const renderChoices = (data) => {
    return data.map(renderItem);
  };
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
      {renderChoices(data)}
      <TextInput
        ref={ref}
        onChange={(event) => {
          ref.current.textInputValue = event.nativeEvent.text;
        }}
        blurOnSubmit={false}
        placeholder={data.length > 0 ? '' : placeholder}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace') {
            //console.log(item.ref.current.textInputValue);
            if (
              ref.current.textInputValue === '' ||
              ref.current.textInputValue === undefined
            ) {
              data.pop();
              setDummyState(!dummyState);
            }
          }
        }}
        onBlur={(event) => {
          if (event.nativeEvent.text.trim() !== '') {
            data.push(addData(event.nativeEvent.text));
            setDummyState(!dummyState);
            ref.current.clear();
            ref.current.textInputValue = '';
          }
        }}
        onSubmitEditing={(event) => {
          //console.log(event.nativeEvent.text);
          if (event.nativeEvent.text.trim() === '') {
            ref.current.clear();
            ref.current.textInputValue = '';
            return;
          }
          data.push(addData(event.nativeEvent.text));

          ref.current.clear();
          setTimeout(() => {
            setDummyState(!dummyState);
          }, 100);
          ref.current.textInputValue = '';
        }}
        style={{
          flex: 1,
          paddingTop: 2,
          paddingBottom: 2,
          marginTop: 4,
          backgroundColor: 'transparent',
        }}></TextInput>
    </View>
  );
};

module.exports = BubbleInput;
