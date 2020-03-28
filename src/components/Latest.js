import React, { useEffect, useState, useContext } from 'react';
import { DataContext, DataContextProvider } from '../context/DataContext';
import { FirebaseDatabaseNode } from "@react-firebase/database"
import Moment from 'react-moment';
import ClipLoader from "react-spinners/ClipLoader";
const Latest = () => {



    return (
        <>

            <FirebaseDatabaseNode
                path="/results"
                limitToLast={1}
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
                        )
                    } else {
                    const keys = Object.keys(value);
                    const values = Object.values(value);
                    return values.map((val, i) => (
                        <div key={i}>
                        <p className="subtitle has-text-centered is-3">Latest Speedtest Results</p>
                        <nav className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Download</p>
                                    <p className="title has-text-success">{val.download.toFixed(2)} Mbps</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Upload</p>
                                    <p className="title has-text-danger">{val.upload.toFixed(2)} Mbps</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Latency</p>
                                    <p className="title has-text-success">{val.ping.toFixed(0)} ms</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Last Updated</p>
                                    <p className="title"><Moment interval={60000} fromNow>{val.timestamp}</Moment></p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    ));
                }}
            }
            </FirebaseDatabaseNode>

        </>
    )

}

export default Latest;