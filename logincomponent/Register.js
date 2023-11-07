import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Field from './Field';
import Btn from './Btn';
import { btn1 } from './Constaint';
import axios from 'axios';

const Register = (props) => {
  const [name, setName] = useState('');
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setc_password] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleRegister = async () => {

    try {
      if (password !== c_password) {
        alert("Passwords don't match");
        return;
      }

      const response = await axios.post('http://admin.meandmyteam.org/api/register-api', {
        name,
        username,
        email,
        password,
        c_password,
      });

      // Handle the response from the server, e.g., show success message, redirect, etc.
      console.log('Registration response:', response.data);

      if (response.data.success) {
        // Navigate to the Home page
        props.navigation.navigate('Home');
      } else {
        // Handle registration failure, e.g., show an error message
        console.log('Registration failed:', response.data.error);
      }
    
    } catch (error) {
      // Handle errors, e.g., show error message to the user
      console.error('Registration error:', error);
    }
    




    // Basic validation to check if all fields are filled out
    // if (
    //   Name.trim() === '' ||
    //   username.trim() === '' ||
    //   email.trim() === '' ||
    //   password.trim() === '' ||
    //   confirmPassword.trim() === ''
    // ) {
    //   alert('Please fill out all fields.');
    //   return;
    // }

    // Check if passwords match
    if (password !== c_password) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);

    // If all validations pass, proceed with account creation
    // alert('Account created successfully!');
    // You can add logic to actually create the account here, e.g., API call, etc.
  };

  return (
    <View style={{ backgroundColor: '#615AFD', height: '100%' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../imagess/logo.png')} style={{ width: 180, height: 180 }} />
        <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}> Register Here</Text>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Field
          placeholder='Name'
          value={name}
          onChangeText={setName}
          error={!name.trim() ? 'Please enter your first name' : ''}
        />
        <Field
          placeholder='User Name'
          value={username}
          onChangeText={setusername}
          error={!username.trim() ? 'Please enter your last name' : ''}
        />
        
        <Field
          placeholder='Email '
          KeyboardType={'email-address'}
          value={email}
          onChangeText={setEmail}
          error={!email.trim() ? 'Please enter your email' : ''}
        />
        <Field
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          error={!password.trim() ? 'Please enter your password' : ''}
        />
        <Field
          placeholder='Confirm Password'
          secureTextEntry={true}
          value={c_password}
          onChangeText={setc_password}
          error={password !== c_password ? 'Passwords do not match' : ''}
        />

        <Btn btnLabel='Register' bgcolor={btn1} textcolor='white' press={handleRegister}  />
        {!passwordsMatch && <Text style={{ color: 'red' }}>Passwords do not match</Text>}
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>  Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Register;
