import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator   } from 'react-native';
import axios from 'axios';
import Btn from './Btn';
import { btn1 } from './Constaint';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Loginform(props) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [validationErrors, setValidationErrors] = useState();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');




  const userdata = {
    email: email,
    password: password
  }

  const handleSubmit = async () => {
    try {
      // Check if a token is already stored
      
  
      const response = await axios.post(
        'http://admin.meandmyteam.org/api/login-api',
        userdata
      );
      
  
      if (response.data) {
        const { success, message, data } = response.data;
        const token = data.token;
  
        // Store the token
        await AsyncStorage.setItem('token', token);
  
        console.log('Stored sfgasfasdfToken:', token);
  
        if (success === true) {
          setSuccessMessage(message);
          setTimeout(() => {
            setLoading(false);
            if (token) {
              props.navigation.navigate('Home');
            }
          }, 2000);
        } else {
          setValidationErrors(message);
          // No need to remove the token here
        }
      } else {
        setErrorMessage('An error occurred: Unexpected response format');
      }
    } catch (error) {
      setErrorMessage(`An error occurred: ${error.message}`);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const existingToken = await AsyncStorage.getItem('token');
      if (existingToken) {
        // If a token is found, navigate to the 'Home' screen immediately
        props.navigation.navigate('Home');
      }
    };
  
    checkToken();
  }, []);
  


  
  return (
    
    <View style={styles.outer_div}> 
    <Image source={require('../imagess/logo.png')} style={{ width: 250, height: 250, marginHorizontal:45, alignItems:'center' }} />
      <View style={styles.registration_form}>
        <Text style={styles.heading}>Login Your Account</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setemail}
          error={!email.trim() ? 'Please enter your email' : ''}
        />
        {validationErrors && <Text style={styles.error}>{validationErrors}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={!password.trim() ? 'Please enter your password' : ''}
        />
       
        {validationErrors && <Text style={styles.error}>{validationErrors}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSubmit} >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        <TouchableOpacity   onPress={() => props.navigation.navigate("Register")} >
        
            <Text style={styles.newUserText}>New User?  Create an account</Text>
           
        </TouchableOpacity>
        
        {errorMessage && <Text>{errorMessage}</Text>}
      </View>
    </View>
  );
}

const styles = {
  outer_div: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#615AFD'
  },
  registration_form: {
   
    alignItems: 'center'
  },
  heading: {
    
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    color: 'white'
  },
  input: {
    backgroundColor: '#fff',
    color: 'black',
    borderRadius:  10,
    marginBottom: 10,
    padding: 8,
    width: 300,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#7dc4c1',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 300,
  
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  pt3: {
    paddingTop: 15,
  },
  newUserText: {
    flexDirection: 'row',
    color: 'white',
    padding: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
};

export default Loginform;





  // const handleSubmit = async () => {
  //   if (email.trim() === '' || password.trim() === '') {
  //     setValidationErrors('Please enter both email and password');
  //     return; // Do not proceed with login if validation fails
  //   }
  
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       'http://admin.meandmyteam.org/api/login-api',
  //       userdata
  //     );
  //     if (response.data) {
  //       const { success, message, data } = response.data;
  //       if (success) {
  //         const token = data.token;
  //         const setToken = await AsyncStorage.setItem('token', token);
  //         setSuccessMessage(message);
  
  //         setTimeout(() => {
  //           setLoading(false);
  //           props.navigation.navigate('Home');
  //         }, 2000);
  //       } else {
  //         setValidationErrors(message);
  //         await AsyncStorage.removeItem('token');
  //       }
  //     } else {
  //       setErrorMessage('An error occurred: Unexpected response format');
  //     }
  //   } catch (error) {
  //     setErrorMessage(`An error occurred: ${error.message}`);
  //   }
  // };
  

  



  