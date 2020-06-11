import React, { useState, useEffect } from 'react';

import moment from 'moment';

import styles from './TimerPage.module.scss';
import Calculator from '../Calculator/Calculator';

function fancyTimeFormat(time) {
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
}

const TimerPage = () => {
  const [amount, setAmount] = useState({});
  const [totalTime, setTotalTime] = useState(0);
  const [stage, setStage] = useState(1);
  const [stageTime, setStageTime] = useState(10);

  useEffect(() => {
    let handler;
    if (totalTime < 210) {
      handler = setInterval(() => {
        setTotalTime(totalTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(handler);
    };
  }, [totalTime]);

  useEffect(() => {
    let handler;
    if (stage > 6) {
      return;
    }
    if (stageTime < 1) {
      setStage(stage + 1);

      switch (stage) {
        case 1:
          setStageTime(5);
          break;
        case 2:
          setStageTime(40);
          break;
        case 3:
          setStageTime(20);
          break;
        case 4:
          setStageTime(30);
          break;
        case 5:
          setStageTime(10);
          break;
        default:
          break;
      }
    } else {
      handler = setInterval(() => {
        setStageTime(stageTime - 1);
        console.log('tick');
      }, 1000);
    }
    return () => {
      clearInterval(handler);
    };
  }, [stage, stageTime]);

  return (
    <>
      <Calculator setRatio={setAmount} />
      <div>Time Elapsed: {fancyTimeFormat(totalTime)}</div>
      <div>Stage Time: {fancyTimeFormat(stageTime)}</div>
      <div className={styles.timerHolder}>
        <div className={styles.timeline}>
          <ol>
            <li>Pour {amount.grounds}g of coffee in the filter. Make a small well in the middle using your finger.</li>
            <li className={stage === 1 ? styles.bold : null}>Start the timer and gently pour {amount.grounds * 2}g of water onto the grounds.</li>
            <li className={stage === 2 ? styles.bold : null}>Swirl the coffee to mix the water and grounds</li>
            <li className={stage === 3 ? styles.bold : null}>Wait ~40 seconds</li>
            <li className={stage === 4 ? styles.bold : null}>Pour to {amount.water * 0.6}g of water until 1:15</li>
            <li className={stage === 5 ? styles.bold : null}>Keep it topped off, pouring to {amount.water}g by 1:45</li>
            <li className={stage === 6 ? styles.bold : null}>With a spoon, give the coffee 1 spin in either direction</li>
            <li className={stage === 6 ? styles.bold : null}>Once the coffee has drained a little bit, swirl the coffee again.</li>
            <li className={stage === 6 ? styles.bold : null}>Wait for the coffee to completely drain.</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default TimerPage;
