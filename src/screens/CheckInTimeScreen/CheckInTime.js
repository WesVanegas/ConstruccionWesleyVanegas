import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';

const CheckInList = [];

const CheckInTime = () => {
  
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState(new Date());
  const [amOrPM, setAmOrPm] = useState(false);
  const [outHour, setOutHour] = useState(new Date());
  const [openHour, setOpenHour] = useState(false);
  const [totalHours, setTotalHours] = useState(0);

  /*
  let date = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let hours = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  const time = hours + ':' + min + ':' + sec;
  const currentDate = date + '/' + month + '/' + year;

  const data = {time: time, currentDate: currentDate};
  
  
  const [formatDate, setFormatDate] = useState('')
  const [formatHour, setFormatHour] = useState('')

  
  const funtionformatDate = date =>{
    setDate(date);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setFormatDate(`${day}/${month}/${year}`)
  };
  */
  const onRegisterPressed = () => {
    const inHour = hour.getHours()> 12 ? hour.getHours()-12 : hour.getHours()
    //const amPmOut = outHour.getHours()> 12 ? outHour.getHours()-12 : outHour.getHours()
    const amPmOut = outHour.getHours()
    //const totalHours = amPmOut - (inHour + (amOrPM == true ? 0 : 12) )
    //const totalHours = amPmOut - inHour
    register = {day: date.getDate(), hour: inHour, period: amOrPM, outHour: amPmOut>12? amPmOut-12:amPmOut, total: totalHours, periodOut: outHour.getHours()>12? false : true}
    CheckInList.push(register);
    console.warn('Register Pressed');
  };

  const onShowRegisterPressed = () =>{
    console.log(CheckInList);
  }

  const onAmOrPmPressed = () =>{
    setAmOrPm(!amOrPM)
  }

  return (
    <View style={style.container}>
      <Button title="Select Date" onPress={() => setOpen(true)} />
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={(date)=>{
          setOpen(false)
          setDate(date)
          console.log(date.getDate())
          //funtionformatDate(date)
        }}
        onCancel={() =>{
          setOpen(false)
        }}
      />
      <Text style={style.text}>Fecha Seleccionada: {date.getDate()} / {date.getMonth()+1} / {date.getFullYear()}</Text>
      {/*
      <Button title='Select Hour' onPress={() => setOpenHour(true)}/>
      <DatePicker
        mode="time"
        modal
        open={openHour}
        date={hour}
        onConfirm={(hour)=>{
          setOpenHour(false)
          setHour(hour)
          console.log(hour)
          funtionformatHour(hour)
        }}
        onCancel={()=>{
          setOpenHour(false)
        }}
        />
      <Text style={style.text}>date: {currentDate}</Text>
      <Text style={style.text}>Time: {time}</Text>
    <Text>Hora Seleccionada: {formatHour}</Text>
  */}
      <Text style = {style.text}>Start time: {hour.getHours()> 12 ? hour.getHours()-12 : hour.getHours()} : {hour.getMinutes()} {amOrPM ? 'AM' : 'PM'}</Text>
      <CustomButton text="Change AM/PM" onPress={onAmOrPmPressed} />

      <Text style={style.title}>Ending time</Text>
      <Button title="Select Check-Out time" onPress={() => setOpenHour(true)} />
      <DatePicker
        mode="time"
        modal
        open={openHour}
        date={outHour}
        onConfirm={(outHour)=>{
          setOpenHour(false)
          setOutHour(outHour)
          console.log(outHour.getDate())
          //funtionformatDate(date)
          setTotalHours(outHour.getHours() - (hour.getHours()-(amOrPM == true ? 12 : 0)) )
        }}
        onCancel={() =>{
          setOpenHour(false)
        }}
      />

      <Text style={style.text}>Ending Time selected: {outHour.getHours()>12 ? outHour.getHours()-12 : outHour.getHours()} {outHour.getHours()>12 ? 'PM' : 'AM'}</Text>
      <Text style={style.text}>Total hours worked: {totalHours}</Text>

      <CustomButton text="Register" onPress={onRegisterPressed}/>
      <CustomButton text="Show Register" onPress={onShowRegisterPressed} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    margin: 20,
  },
  btn: {
    color:'red',
    margin: 20,
    padding: 20,
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
  title:{
    padding: 10,
    fontSize: 22,
  },
});

export default CheckInTime;
export {CheckInList}
