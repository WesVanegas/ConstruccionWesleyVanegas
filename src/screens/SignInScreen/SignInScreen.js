import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {registeredUsers} from '../SignUpScreen/SignUpScreen';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onLogInPressed = data => {
    const username = data.username;
    const password = data.password;
    const user = registeredUsers.find(user => user.username === username);

    if (user) {
      if (user.password == password) {
        console.warn('Successful Login', {username});
        navigation.navigate('Home');
      } else {
        console.warn('Password Error.');
      }
    } else {
      console.log(user);
      console.warn('User not found.');
    }
  };

  const onSignUpPressed = () => {
    console.warn('Sign Up');
    navigation.navigate('SignUp');
  };

  const onShowUsersPressed = () => {
    console.log(registeredUsers);
  };

  const onLogInPressedNotData = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={style.root}>
      <Image
        source={Logo}
        style={[style.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      {/*<Text>Username</Text>*/}

      <CustomInput
        name="username"
        placeholder="Enter your username"
        value={username}
        onChangeText={text => setUsername(text)}
        control={control}
        rules={{required: 'Username is required'}}
      />

      {/*<Text>Password</Text>*/}

      <CustomInput
        name="password"
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be minimum 8 characters long',
          },
        }}
      />

      {/*<Controller 
        control={control}
        name="username"
        render={({field: {value, onChange, onBlur}}) =>(
          <TextInput value={value} onChangeText={onChange} onBlur placeholder={'username'}/>
        )}
        />*/}


      <CustomButton text="Log in" onPress={handleSubmit(onLogInPressed)} />
      {/*<CustomButton text="Log in Not Data" onPress={onLogInPressedNotData} />*/}
      <CustomButton text="Sign up" onPress={onSignUpPressed} />
      {/*<CustomButton text={"Show user"} onPress={onShowUsersPressed}/>*/}
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 100,
    marginBottom: 20,
  },
});

export default SignInScreen;
