// import React, {Children, useState, createContext} from "react";
// import { create } from "react-test-renderer";
// import AsyncStorage from '@react-native-async-storage/async-storage';


// export const AuthContext = createContext();


// const [ userdata, setuserdata] = useState(null);


// const logout = () => {
//     setuserdata{null};
//     AsyncStorage.removeItem('usertoken')

// }

// const isloggedin {
//     try{
//         let userdata = await AsyncStorage.getItem('userdata')
//         setuserdata(userdata);
//     }
// }



// export const AuthProvider = ({Children}) => {
//     return(
//         <AuthContext.Provider value={logout}>
//             {Children}
//         </AuthContext.Provider>
//     )
// }