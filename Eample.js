import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, } from "react-native";


const GeoCodingExample = () => {
  const [address, setAddress] = useState('');
  console.log(address)

  useEffect(() => {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
    const latitude = 25.419537525711043;
    const longitude = 77.65937886109198;

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      )
      .then((response) => {
        if (response.data.results.length > 0) {
          const formattedAddress = response.data.results[0].formatted_address;
          setAddress(formattedAddress);
        }
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
      });
  }, []);

  return (
    <View>
      <Text>latisfftude: {address.latitude}</Text>
      <Text>Longitude: {address.longitude}</Text>
      <Text>Address: {address.address}</Text>
    </View>
  );
};

export default GeoCodingExample;
