import React, { Component } from 'react';

import styles from './App.module.css';

class App extends Component {
  render() {
    console.log('styles', styles);
    return (
      <div className={styles.container}>
        <div className={styles.test0} style={{ color: 'lawngreen' }}>
          This should be green, set by direct style
        </div>
        <div className={styles.test1}>
          This should be green, set by definition in class of css module
        </div>
        <div className={styles.test2}>
          This should be green, set by local custom property
        </div>
        <div className={styles.test3}>
          This should be green, set by custom property from variables.css
        </div>
        <div>
          This should be the default black
        </div>
      </div>
    );
  }
}

export default App;
