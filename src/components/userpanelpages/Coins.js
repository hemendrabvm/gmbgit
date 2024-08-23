import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MyCoins from '../../components/coins/MyCoins';
import CoinsHistory from '../coins/CoinsHistory';
import ExchangeCoins from '../coins/ExchangeCoins';

const Coins = () => {


  return (
    <div id="site-content">
      <div className="container">
        <div className="page-heading">
          <h2>Account</h2>
        </div>
      </div>
      <section className="profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="dashboard-sidebar">
              <Sidebar/>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content">
                <div className="setting-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single-area">
                        <h5 className="mb-0">My Trip-Coins</h5>
                      </div>
                      <MyCoins />
                      <CoinsHistory />
                      <ExchangeCoins />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coins;
