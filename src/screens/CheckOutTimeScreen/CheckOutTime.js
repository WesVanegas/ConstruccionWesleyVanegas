import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {CheckInList} from '../CheckInTimeScreen/CheckInTime';

const CheckOutList= []

const CheckOutTime = () => {
  const [hour, setHour] = useState(new Date());
  const [checkOutHour, setCheckOutHour] = useState('');
  return (
    <View>
      <TextInput placeholder='Enter get out hour' value={checkOutHour} onChangeText={text=>setCheckOutHour(text)}></TextInput>
      <Text>
        Actual hour: {hour.getHours() - 12} : {hour.getMinutes()}{' '}
        {hour.getHours() > 12 ? 'PM' : 'AM'}
      </Text>
    </View>
  );
};

export default CheckOutTime;
