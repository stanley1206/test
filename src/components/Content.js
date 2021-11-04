import React from 'react';
import './Content.scss';

import a from '../img/a.jpg';
import b from '../img/b.jpg';
import c from '../img/c.jpg';
import d from '../img/d.jpg';
import e from '../img/e.jpg';
import f from '../img/f.jpg';


const Content = () => {
    return (
        <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <img className="background-image" src={a} alt="" />
          <a href="./hats.html" className="content">
            <h1 className="title">蝴蝶結小公主洋裝</h1>
            <span className="subtitle">NT＄320</span>
          </a>
        </div>
        <div className="menu-item">
          <img className="background-image" src={b} alt="" />
          <a href="./jackets.html" className="content">
            <h1 className="title">經典學院風洋裝</h1>
            <span className="subtitle">NT＄290</span>
          </a>
        </div>
        <div className="menu-item">
          <img className="background-image" src={c} alt="" />
          <a href="./sneakers.html" className="content">
            <h1 className="title">狗狗刺繡條紋打底衫</h1>
            <span className="subtitle">NT＄290</span>
          </a>
        </div>
        <div className="large menu-item">
          <img className="background-image" src={d} alt="" />
          <a href="./womens.html" className="content">
            <h1 className="title">古典繡花漢服/2色</h1>
            <span className="subtitle">NT＄280</span>
          </a>
        </div>
        <div className="large menu-item">
          <img className="background-image" src={e} alt="" />
          <a href="./mens.html" className="content">
            <h1 className="title">少女僕雷絲洋裝</h1>
            <span className="subtitle">NT＄320</span>
          </a>
          </div>
        <div className="large menu-item">
          <img className="background-image" src={f} alt="" />
          <a href="./mens.html" className="content">
            <h1 className="title">夢幻玫瑰繡花短版上衣</h1>
            <span className="subtitle">NT＄330</span>
          </a>
        </div>
      </div>
    </div>
    )
}

export default Content;