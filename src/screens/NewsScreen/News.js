import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'
import CustomInput from '../../components/CustomInput/CustomInput'
import {useForm, Controller} from 'react-hook-form';
import CustomButton from '../../components/CustomButton/CustomButton';

const News = () => {
  const [date, setDate] = useState(new Date())
  const [dateEnd, setDateEnd] = useState(new Date())
  const [openFirst, setOpenFirst] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  const [license, setLicense] = useState('')
  const [vacation, setVacation] = useState('')

  const incapacityList = []
  const licenseList = []
  const vacationList = [] 

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onIncapacityPressed = () =>{
    incapacityList.push({startDate: date.getDate(), endDate: dateEnd.getDate(), totaldays: date.getDate()-dateEnd.getDate()})
    console.log(incapacityList)
  }

  const onLicensePressed = ()=>{
    licenseList.push(license)
    console.log(licenseList)
  }

  const onVacationPressed = ()=>{
    vacationList.push(vacation)
    console.log(vacationList)
  }



  return (
    <View style={{padding:30, alignContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20, padding:5}}>Enter incapacity</Text>
      <Text>Start date: {date.getDate()} / {date.getMonth()+1} / {date.getFullYear()}</Text>
      <Button title="Select beginning date" onPress={() => setOpenFirst(true)} />
      <DatePicker
        mode="date"
        modal
        open={openFirst}
        date={date}
        onConfirm={(date)=>{
          setOpenFirst(false)
          setDate(date)
          console.log(date.getDate())
          //funtionformatDate(date)
        }}
        onCancel={() =>{
          setOpenFirst(false)
        }}
      />
      <Text>end date: {dateEnd.getDate()} / {dateEnd.getMonth()+1} / {dateEnd.getFullYear()}</Text>
      <Button title="Select ending date" onPress={() => setOpenSecond(true)} />
      <DatePicker
        mode="date"
        modal
        open={openSecond}
        date={dateEnd}
        onConfirm={(dateEnd)=>{
          setOpenSecond(false)
          setDateEnd(dateEnd)
          console.log(dateEnd.getDate())
          //funtionformatDate(date)
        }}
        onCancel={() =>{
          setOpenSecond(false)
        }}
      />

      <Text>Days of incapacity: {dateEnd.getDate()-date.getDate()}</Text>
      <CustomButton text="Register incapacity" onPress={onIncapacityPressed}/>


      <Text style={{paddingTop:25, fontSize:20,}}>Licenses (8 hour max)</Text>
      <CustomInput
        name="license"
        onChangeText={setLicense}
        value={license}
        keyboardType='numeric'
        control={control}
        placeholder="Enter time of your license"
        rules={{
          validate: value => value < 9 || 'Should be minimun 8 hours',
        }}
      />

      <CustomButton text="Register licencia" onPress={onLicensePressed}/>

      <Text style={{paddingTop:25, fontSize:20,}} >Vacations (min 1 - max 15 days)</Text>


      <CustomInput
        name="vacation"
        onChangeText={text => setVacation(text)}
        value={vacation}
        keyboardType='numeric'
        control={control}
        placeholder="Enter time of your vacations"
        rules={{
          validate: value => value < 15 && value > 1 || 'Should be in the range of 1 to 15',
        }}
      />
      <CustomButton text="Register Vacations" onPress={onVacationPressed}/>

    </View>
  )
}

export default News;