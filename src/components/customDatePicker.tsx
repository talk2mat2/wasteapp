import React, {useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';

interface props {
  placeholder?: string;
  title: string;
  value: string;
  onChangeDate: (txt: string) => void;
}
type AndroidMode = 'date' | 'time';
type IOSMode = 'date' | 'time' | 'datetime' | 'countdown';

const CustomDatePicker: React.FC<props> = ({
  placeholder = '',
  title,
  value,
  onChangeDate,
}) => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState<AndroidMode | IOSMode>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    let newDate = currentDate.toDateString();
    onChangeDate(newDate);
  };

  const showMode = (
    currentMode: React.SetStateAction<AndroidMode | IOSMode>,
  ) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          // is24Hour={true}
          onChange={onChange}
        />
      )}
      <Pressable style={{flex: 1}} onPress={showDatepicker}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <Text
            style={[
              styles.input,
              styles.subtitle,
              {color: colors.neutral[150]},
            ]}
            // placeholder={placeholder}
            // value={date.toLocaleString()}
          >
            {value || 'Enter your preffered schedule date'}
            {/* {date.toDateString()} */}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '50@vs',
    borderRadius: '8@s',
    paddingHorizontal: '20@s',
    paddingTop: 9,
    borderWidth: '1@s',
    borderColor: colors.brand[100],
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    marginTop: 'auto',
    padding: 0,
    paddingBottom: 7,
    fontFamily: 'Raleway',
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: '11@s',
    color: colors.brand[100],
    fontStyle: 'normal',
  },
  subtitle: {
    fontWeight: '400',
    fontFamily: 'Raleway',
    // color: colors.neutral[150],
    fontSize: '15@s',
  },
});
export default CustomDatePicker;
