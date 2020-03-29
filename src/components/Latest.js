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
                        <nav className="level">
                        <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Latest Test</p>
                                    <p className="title is-5"><Moment interval={60000} fromNow>{val.timestamp}</Moment></p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Download</p>
                                    <p className={`title is-5 ${val.download > 5 ? `has-text-success` : `has-text-danger`} `}>{val.download.toFixed(2)} Mbps</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Upload</p>
                                    <p className={`title is-5 ${val.upload > 5 ? `has-text-success` : `has-text-danger`} `}>{val.upload.toFixed(2)} Mbps</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Latency</p>
                                    <p className={`title is-5 ${val.ping < 70 ? `has-text-success` : `has-text-danger`} `}>{val.ping.toFixed(0)} ms</p>
                                </div>
                            </div>
                        
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">ISP</p>
                            <p className="title is-5 is-capitalized has-text-link">{val.isp}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Connection Type</p>
                                    <p className="title is-5 has-text-primary">4G</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Cell ID</p>
                                    <p className="title is-5 has-text-warning">77616130</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Band</p>
                                    <p className="title is-5 has-text-link">1800 Mhz</p>
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