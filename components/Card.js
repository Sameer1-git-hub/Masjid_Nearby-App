import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import Navtan from '../Navbtn'

export default function Card() {

    //get distanse 
    const optionArry = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1500", "2000"];

    const [openselect, setOpentselect] = useState(false);
    const [send, setsend] = useState('');
    console.log( "send ",send)

    const leagueInput = useRef();


    function selectvalue(item) {
        leagueInput.current.setNativeProps({ text: item });
        setOpentselect(false);
        setsend(item)

    }

    function opneOption() {
        setOpentselect(true);
    }

    function clearInput() {
        leagueInput.current.setNativeProps({ text: '' });
        setsend({ text: '' })  // Clear the input text
    }

    // const headndelchange = async () => {
       
    // }




    //print masjids 
    const [masjids, setMasjids] = useState(null);

    const userLocation = {
        latitude: '25.419537525711043',
        longitude: '77.65937886109198',
        distance: 3000,
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userLocation) {
                    const Distance = 500; // You can change this value as per the user's search preference
                    const response = await axios.post(
                        'https://admin.meandmyteam.org/api/masjid-nearby',
                        {
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude,
                            distance: userLocation.distance,
                        }
                    );
                    
                    setMasjids(response.data.results);
                    // You can set other state variables here if needed
                } else if (masjids === null) {
                    const response = await axios.post(
                        'http://admin.meandmyteam.org/api/dashboard/masjids'
                    );
                    setMasjids(response.data.data.masjids.data);

                    // You can set other state variables here if needed
                }
            } catch (error) {
                console.error('Error fetching masjids:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <View >
            <View style={{ margin: 15, marginTop: 20, }}>
                <TouchableOpacity
                    onPress={opneOption}
                    onBlur={() => {
                        setOpentselect(false);
                    }}
                    style={styles.inputContainer}
                >
                    <TextInput
                        ref={leagueInput}
                        style={styles.input}
                        placeholder="Select Your Distence"
                        editable={false}
                        

                    />
                    <Text style={styles.caret}>^</Text>
                </TouchableOpacity>

                {openselect && (
                    <View style={styles.optionsContainer}>
                        {optionArry.map((item, index) => (
                            <TouchableOpacity
                                onPress={() => selectvalue(item)}
                                key={index}
                                style={styles.option}
                            >
                                <Text style={{ color: '#fff' }}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                <TouchableOpacity onPress={clearInput}>
                    <Text style={styles.Clear}>Clear</Text>
                </TouchableOpacity>



            </View>
            <ScrollView style={{ flexGrow: 1, }} >
                <View>

                    {masjids && masjids.map((masjid) => (
                        <View style={{ margin: 15, }}>
                            <ImageBackground source={require("../imagess/masjid2.jpg")}>

                                <Text style={{ color: 'white', fontSize: 22, padding: 20, paddingBottom: 0 }}>
                                    {masjid.name}


                                </Text>
                                <Text style={{ color: 'white', width: 200, fontSize: 22, padding: 20, paddingTop: 5 }}>
                                    {masjid.city}
                                </Text>
                                <View >
                                    <Text style={{ color: 'white', fontSize: 35, alignSelf: 'flex-end', marginRight: 10 }}>                                        
                                        {masjid.distance_to_masjid < 1000 ? `${masjid.distance_to_masjid} Meters` : `${(masjid.distance_to_masjid / 1000).toFixed(1)} km`}

                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20, justifyContent: 'space-around', }}>
                                    <View style={[styles.prytimebox, { backgroundColor: `#483d8b`, }]} >
                                        <Text style={styles.text}>Fazar</Text>
                                        <Text style={styles.text}>{masjid.fajr}</Text>
                                    </View>
                                    <View style={[styles.prytimebox, { backgroundColor: `#ff7f50`, }]} >
                                        <Text style={styles.text} >Zuhar</Text>
                                        <Text style={styles.text} >{masjid.zuhar}</Text>
                                    </View>
                                    <View style={[styles.prytimebox, { backgroundColor: `#cd5c5c`, }]} >
                                        <Text style={styles.text} >Asar</Text>
                                        <Text style={styles.text} >{masjid.asar}</Text>
                                    </View>
                                    <View style={[styles.prytimebox, { backgroundColor: `#e9967a`, }]} >
                                        <Text style={styles.text} >Magrib</Text>
                                        <Text style={styles.text} >{masjid.maghrib}</Text>
                                    </View>
                                    <View style={[styles.prytimebox, { backgroundColor: `#008b8b`, }]} >
                                        <Text style={styles.text} >Isha</Text>
                                        <Text style={styles.text} >{masjid.isha}</Text>
                                    </View>
                                    <View style={[styles.prytimebox, { backgroundColor: `#008000`, }]}>
                                        <Text style={styles.text} >Juma</Text>
                                        <Text style={styles.text} >{masjid.juma}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    ))}
                </View>
                <Text style={{ height: 500 }}>

                </Text>



            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({

    prytimebox: {
        height: 45,
        padding: 5,
        borderColor: 'white',
        marginVertical: 3,
        borderRadius: 5,
    },
    text: {
        color: 'white',
        textAlign: "center",
        marginHorizontal: 2,


    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
    },
    Clear: {
        backgroundColor: '#1e517b',
        color: 'white',
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 15,
        width: 60,
        marginTop: 5,
    },
    input: {
        flex: 1,
        height: 40,
        width: '66%',
        color: 'black'
    },
    caret: {
        marginLeft: 10,
        fontSize: 22,
        color: 'black'
    },
    optionsContainer: {
        backgroundColor: '#263A94',
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    option: {
        padding: 10,
    },

});