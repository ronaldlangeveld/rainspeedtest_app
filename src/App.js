import React, { useEffect, useState } from 'react';
import './App.css'
import config from './config';
import Layout from './components/Layout';
import Latest from './components/Latest';
import Chart from './components/Chart';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Firebase from 'firebase';


const App = () => {



  return (
    <>
    <FirebaseDatabaseProvider firebase={Firebase} {...config}>
        <Layout>
          <section className="hero is-dark">
            <div className="hero-body">
            <div className="container">
              <div>
                <h1 className="title is-2">🌧 Rain Speedtest</h1>
                <Latest />
            </div>
              </div>
            </div>
          </section>
          <div>
                <div style={canvasContainer}>
                <Chart />
                </div>
               </div>
        </Layout>
        </FirebaseDatabaseProvider>
    </>
  );
}

const canvasContainer = {
  height: "60vh",
  width: "100%"
}

export default App;
