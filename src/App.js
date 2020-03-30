import React, { useEffect, useState } from 'react';
import './App.css'
import config from './config';
import Layout from './components/Layout';
import Latest from './components/Latest';
import Chart from './components/Chart';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Firebase from 'firebase';
import Stats from './components/Stats';
import 'firebase/analytics';

const App = () => {

  Firebase.initializeApp(config);
  Firebase.analytics();


  return (
    <>
      <FirebaseDatabaseProvider firebase={Firebase} {...config}>
        <Layout>
          <section className="hero is-dark">
            <div className="hero-body">
              <div className="container">
              <h1 className="title is-1 has-text-centered">Rain Speedtest</h1>
                <div>
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

          <section className="hero is-dark">
            <div className="hero-body">
              <div className="container">
              <div className="notification is-black">
                    <div className="has-text-centered has-text-weight-bold">
                      <p>Hi, I'm <a href="https://twitter.com/ronaldlangeveld" target="_blank">Ronald</a>. I made this on the evening of 27 March 2020 to keep track of the performance of my home broadband connection.</p>
                      <p>Every 30 minutes a Speed Test is automatically performed on my home server and results are stored onto a cloud based database.</p>
                      <p>For those interested, I'm on the Rain Fixed LTE package, via Afrihost. I pay R1349 (± $80 USD) per month for 440 GB Data. <br /> I'm no more than 350 metres away from the LTE Tower.</p>
                      {/* <p>I've had numerous issues in the past, which you can real all about <a href="https://mybroadband.co.za/forum/threads/slow-rain-lte-speeds-and-communication-from-rain-and-afrihost.1069406/" target="_blank">here</a>. Due to lack of competition in my area and no FTTH, I haven't been able to move to a different ISP.</p> */}
                    </div>
                 
                </div>
                <div>
                  <p className="has-text-centered help">This site is non-commercial and not affiliated with Afrihost and Rain.</p>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="hero is-dark">
            <div className="hero-body">
            <div className="container">
              <Stats />
              </div>
            </div>
          </section> */}


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
