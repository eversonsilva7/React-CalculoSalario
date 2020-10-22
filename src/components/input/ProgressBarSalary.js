import React, { Component } from 'react';

export default class ProgressBarSalary extends Component {
  render() {
    //let percentSalaryLiquid = 0;
    let percentINSS = 0;
    let percentIRPF = 0;
    //let percentIRPFReal = 0;
    const { baseINSS, discountINSS, discountIRPF } = this.props.fullSalary;
    percentINSS = (discountINSS / baseINSS) * 100;
    percentIRPF = percentINSS + (discountIRPF / baseINSS) * 100;
    //valor real do irpf, pois o de cima está somado com inss para poder ficar na posição correta na progressbar
    //percentIRPFReal = (discountIRPF / baseINSS) * 100;
    //percentSalaryLiquid = 100 - percentINSS - percentIRPFReal;

    if (!baseINSS) {
      percentINSS = 0;
      percentIRPF = 0;
    }

    const box = {
      position: 'relative',
      padding: '10, 0, 0, 10',
    };

    const totalStyles = {
      height: 20,
      width: '100%',
      backgroundColor: '#16a085',
      //borderRadius: 50,
      position: 'absolute',
      zIndex: 1,
    };

    const discountINSSBarStyles = {
      height: 20,
      width: `${percentINSS}%`,
      backgroundColor: '#e67e22',
      //borderRadius: 50,
      //textAlign: 'left',
      position: 'absolute',
      zIndex: 10,
    };

    const discountIRPFBaStyles = {
      height: 20,
      width: `${percentIRPF}%`,
      backgroundColor: '#c0392b',
      //borderRadius: 50,
      textAlign: 'right',
      position: 'absolute',
      zIndex: 2,
    };

    // const totalSalaryLiquid = {
    //   height: 20,
    //   width: `${percentSalaryLiquid}%`,
    //   backgroundColor: '#16a085',
    //   //borderRadius: 50,
    //   textAlign: 'right',
    //   position: 'absolute',
    //   zIndex: 1,
    // };

    return (
      <div style={box}>
        <div style={totalStyles}></div>
        <div style={discountINSSBarStyles}></div>
        <div style={discountIRPFBaStyles}></div>
      </div>
    );
  }
}
