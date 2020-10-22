import React, { Component } from 'react';
import css from './Header.module.css';
export default class Header extends Component {
  render() {
    return (
      <div className={css.header}>
        <h4>Cálculo de desconto de INSS + IRPF</h4>
        <h1>React Salário</h1>
      </div>
    );
  }
}
