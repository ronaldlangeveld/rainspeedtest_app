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
                <h1 className="title is-1">Rain Speedtest</h1>
                <Latest />
            </div>
              </div>
            </div>
            <div className="hero-body">
              <div className="container">
               <Chart />
              </div>
            </div>
          </section>
        </Layout>
        </FirebaseDatabaseProvider>
    </>
  );
}

export default App;
