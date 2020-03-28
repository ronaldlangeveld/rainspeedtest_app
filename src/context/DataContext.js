import React, { createContext, useState, useEffect } from 'react';
import Firebase from 'firebase';
import config from '../config';

export const DataContext = createContext();

export const DataContextProvider = (props) => {

const [tests, setTests] = useState(null)


    const Database = () => {
        Firebase.initializeApp(config);
        let ref = Firebase.database().ref('/results');
       let get = ref.on('value', snapshot => {
          const dataDb = snapshot.val();
          setTests(dataDb)
        })
      };

    useEffect(() => {

        Database();

    },[])

    let payload = {
        tests
    }

    return <DataContext.Provider value={payload}>

        {props.children}

    </DataContext.Provider>

};
