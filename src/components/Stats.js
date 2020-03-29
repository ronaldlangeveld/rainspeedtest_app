import React, { useEffect, useState, useContext } from 'react';
import { DataContext, DataContextProvider } from '../context/DataContext';
import { FirebaseDatabaseNode } from "@react-firebase/database"
import Moment from 'react-moment';
import ClipLoader from "react-spinners/ClipLoader";


const Stats = () => {



    return (
        <>

            <FirebaseDatabaseNode
                path="/results"
            >

{({isLoading, value }) => {
                    console.log(isLoading)
                    if (value === null || typeof value === "undefined"){
                        return (
                            <div className="has-text-centered">
                                <ClipLoader
                                size={50}
                                color={"#123abc"}
                                loading={true}
                                />
                            </div>
                        )} else {
                            const keys = Object.keys(value);
                            const values = Object.values(value);
                            const total = values.length;

                            // const totalDown = 0;
                            // values.map((val, i) => {
                            //     const totalDown = 0;
                            //     totaldown = totalDown + val.download;
                            // })
                            
                            // const avgDown = totalDown / total;
                            // console.log(avgDown);
                            return (
                                <>
                                </>
                            )

                        }
}
}
               
                
            </FirebaseDatabaseNode>

        </>
    )

}

export default Stats;