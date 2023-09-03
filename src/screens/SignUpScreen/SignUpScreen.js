import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const registeredUsers = [];

const SignUpScreen = () => {
  {
    /* 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  */
  }

  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const navigation = useNavigation();

  const onHaveAccountPressed = () => {
    console.warn('I have an account');
    navigation.navigate('LogIn');
  };

  const onSignUpPressed = (data) => {
    console.warn('Sign Up');
    //navigation.navigate('LogIn');
    registeredUsers.push(data);
  };
  
  const onShowUsersPressed = (data) =>{
    console.log(registeredUsers);
  }

  return (
    <View style={style.root}>
      <Text style={style.title}>Create an account</Text>

      <Text>Username</Text>
      <CustomInput
        name="username"
        control={control}
        placeholder="Enter your username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be at least 3 characters long',
          },
          maxLength: {
            value: 25,
            message: 'Username should be max 25 characters long',
          },
        }}
      />

      <Text>Email</Text>
      <CustomInput
        name="email"
        control={control}
        placeholder="Enter your email"
        rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}, required:'Email is required'}}
      />
      <Text>Password</Text>
      <CustomInput
        name="password"
        control={control}
        placeholder="Enter your password"
        secureTextEntry={true}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be 8 characters long',
          },
          maxLength: {
            value: 8,
            message: 'Password should be 8 characters long',
          },
          validate: value => {
            return (
              [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(pattern =>
                pattern.test(value),
              ) || 'Must include lower, upper, number, and special chars'
            );
          },
        }}
      />
      <Text>Password Confirmation</Text>
      <CustomInput
        name="passwordConfirmation"
        control={control}
        placeholder="Confirm your password"
        secureTextEntry={true}
        rules={{
          validate: value => value == pwd || 'Password do not match',
        }}
      />
      <CustomButton text="Sign up" onPress={handleSubmit(onSignUpPressed)} />
      <CustomButton text="I have an account" onPress={onHaveAccountPressed} />
      {/*<CustomButton text={"Show user"} onPress={onShowUsersPressed}/>*/}
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
});

export default SignUpScreen;
export {registeredUsers}
