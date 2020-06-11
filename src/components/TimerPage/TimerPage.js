import React from 'react';

import styles from './TimerPage.module.scss';

// const timeline = [
//   {
//     step: 1,
//     time: 30,
//     weight: 60,
//     instructions: `Start timer and gently pour ${this.weight}g of water to bloom. Swirl it to mix up ground. Wait.`,
//   },
//   {
//     step: 2,
//     time: 45,
//     weight: 300,
//   },
// ];

const TimerPage = () => {
  return (
    <div className={styles.timerHolder}>
      <div className={styles.timeline}>Timeline</div>
      <div className={styles.instructions}>Instructions</div>
    </div>
  );
};

export default TimerPage;
