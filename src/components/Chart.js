import React, { useEffect, useState, useContext } from 'react';
import { DataContext, DataContextProvider } from '../context/DataContext';
import { FirebaseDatabaseNode } from "@react-firebase/database"
import ClipLoader from "react-spinners/ClipLoader";
import {Line} from 'react-chartjs-2';
var moment = require('moment')

const Chart = () => {

    const [labels, setLabels] = useState(null);
    const [downloads, setDownloads] = useState(null);

    const [chartLimit, setChartLimit] = useState(50);

    const handleChange = (e) => {
      setChartLimit(parseInt(e.target.value));
    }


    return (
        <>
            <FirebaseDatabaseNode
                path="/results"
                limitToLast={chartLimit}
                
            >
                {({isLoading, value}) => {
                    if((value === null || typeof value === "undefined")){
                       return (
                        <>
                        
                        </>
                       )
                    } else {
                        const keys = Object.keys(value);
                    const values = Object.values(value);
                    console.log(values)
                    
                        let lbls = values.map((val, i) => {
                          return moment(val.timestamp).format('LT')
                        });
                        let dwnld = values.map((val, i) => {
                            return val.download
                        });
                        let upld = values.map((val, i) => {
                            return val.upload
                        });
                        console.log(lbls);
                        console.log(dwnld);

                        const options = {
                            maintainAspectRatio: false,
                            
                          }

                    const bardata = {
                        labels: lbls,
                        datasets: [
                          {
                            label: 'Download Speed in Mbps',
                            // backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(36, 199, 79)',
                            borderWidth: 1,
                            // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(36, 199, 79)',
                            data: dwnld
                          },
                          {
                            label: 'Upload Speed in Mbps',
                            color: 'rgba(255, 255, 255)',
                            // backgroundColor: 'rgba(123,99,132,0.2)',
                            borderColor: 'rgba(202, 93, 252)',
                            borderWidth: 1,
                            // hoverBackgroundColor: 'rgba(123,99,132,0.4)',
                            hoverBorderColor: 'rgba(202, 93, 252)',
                            data: upld
                          },

                        ]
                      };
                    
                    return (
                        <>
                        <div className="field has-text-centered">
  <label className="label has-text-centered has-text-white">Performance past </label>
  <div className="control has-text-centered">
    <div className="select">
      <select value={chartLimit} onChange={handleChange}>
        <option value="14">6 hours</option>
        <option value="26">12 hours</option>
        <option value="50">24 hours</option>
        <option value="100">48 hours</option>
        <option value="146">72 hours</option>
      </select>
    </div>
  </div>
</div>

                          <br />

                          <Line 
                          options={options}
                          data={bardata} />
                          <br />
                        </>
                    )
                    }
                }}
               
           
            </FirebaseDatabaseNode>

        </>
    )

}

export default Chart;