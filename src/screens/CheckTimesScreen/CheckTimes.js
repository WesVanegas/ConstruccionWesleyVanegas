import {View, Text, FlatList,} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {CheckInList} from '../CheckInTimeScreen/CheckInTime';

/*
TiemposEntrada = [
  {FechaInicio: '27/08', HoraInicio: '8:00'},
  {FechaInicio: '28/08', HoraInicio: '8:00'},
  {FechaInicio: '29/08', HoraInicio: '8:00'},
  {FechaInicio: '30/08', HoraInicio: '8:00'},
  {FechaInicio: '31/08', HoraInicio: '8:00'},
];

TiemposSalida = [
  {FechaFin: '27/08', HoraFin: '4:00'},
  {FechaFin: '28/08', HoraFin: '4:00'},
  {FechaFin: '29/08', HoraFin: '4:00'},
  {FechaFin: '30/08', HoraFin: '4:00'},
  {FechaFin: '31/08', HoraFin: '4:00'},
];

const suma = [];
const number = [];

for (let i = 0; i < TiemposEntrada.length; i++) {
  suma.push({
    FechaInicio: TiemposEntrada[i].FechaInicio,
    HoraInicio: TiemposEntrada[i].HoraInicio,
    FechaFin: TiemposSalida[i].FechaFin,
    HoraFin: TiemposSalida[i].HoraFin,
    HorasTrabajadas:
      parseInt(TiemposEntrada[i].HoraInicio) -
      parseInt(TiemposSalida[i].HoraFin),
  });
  number.push(parseInt(TiemposEntrada[i].HoraInicio));
}

*/

const CheckTimes = () => {

  const onShowRegisterPressed = () => {
    console.log(CheckInList);
  };

  return (
    <View>
      <Text>CheckTimes</Text>
      <FlatList
        data={CheckInList}
        renderItem={({item}) => (
          <Text>
            dia: {item.day}, Hora Inicio: {item.hour} {item.period ? 'AM':'PM'} Hora fin:{item.outHour} {item.periodOut ? 'AM' :'PM'} Total horas: {item.total}
          </Text>
          /* 
          <Text>
          FechaInicio: {item.FechaInicio}, FechaFin:{item.FechaFin}, HoraInicio: {item.HoraInicio}, HoraFin:{item.HoraFin}, HorasTrabajadas: {item.HorasTrabajadas}
          </Text>
          */
          
        )}
      />
      <CustomButton text="Show register" onPress={onShowRegisterPressed} />
    </View>
  );
};

export default CheckTimes;
