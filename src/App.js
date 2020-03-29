import React, { useEffect, useState } from 'react';
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
          <section className="hero is-fullheight is-dark">
          <div className="hero-head">
              <div className="container">
              <div>
                <br />
                <h1 className="title is-2">🌧 Rain Speedtest</h1>
                <Latest />
            </div>
              </div>
            </div>
            <div className="hero-body">
              <div className="container">
               <div style={canvasContainer}>
               <Chart />
               </div>
              </div>
            </div>
          </section>
        </Layout>
        </FirebaseDatabaseProvider>
    </>
  );
}

const canvasContainer = {
  height: "60vh"
}

export default App;
