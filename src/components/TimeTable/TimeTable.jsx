import React from 'react';
import styles from './TimeTable.module.scss';

export const TimeTable = () => {
  const timetable = [
    { head: '№ урока' },
    { head: 'Начало урока' },
    { head: 'Конец урока' },
    { head: 'Длительность перемены' },
  ];
  const times = [
    { firstTime: '1' },
    { firstTime: '8.00' },
    { firstTime: '8.45' },
    { firstTime: '5' },
  ];
  const secondTime = [
    { secondTime: '2' },
    { secondTime: '8.50' },
    { secondTime: '9.35' },
    { secondTime: '10' },
  ];
  const thirdTime = [
    { thirdTime: '3' },
    { thirdTime: '9.45' },
    { thirdTime: '10.30' },
    { thirdTime: '15' },
  ];
  const fourthTime = [
    { fourthTime: '4' },
    { fourthTime: '10.45' },
    { fourthTime: '11.30' },
    { fourthTime: '5' },
  ];
  const fifthTime = [
    { fifthTime: '5' },
    { fifthTime: '11.35' },
    { fifthTime: '12.20' },
    { fifthTime: '5' },
  ];
  const sixthTime = [
    { sixthTime: '6' },
    { sixthTime: '12.25' },
    { sixthTime: '13.10' },
    { sixthTime: '' },
  ];
  const times2 = [
    { firstTime: '1' },
    { firstTime: '13.30' },
    { firstTime: '14.15' },
    { firstTime: '10' },
  ];
  const secondTime2 = [
    { secondTime: '2' },
    { secondTime: '14.25' },
    { secondTime: '15.10' },
    { secondTime: '10' },
  ];
  const thirdTime2 = [
    { thirdTime: '3' },
    { thirdTime: '15.20' },
    { thirdTime: '16.05' },
    { thirdTime: '5' },
  ];
  const fourthTime2 = [
    { fourthTime: '4' },
    { fourthTime: '16.10' },
    { fourthTime: '16.55' },
    { fourthTime: '5' },
  ];
  const fifthTime2 = [
    { fifthTime: '5' },
    { fifthTime: '17.00' },
    { fifthTime: '17.45' },
    { fifthTime: '5' },
  ];
  const sixthTime2 = [
    { sixthTime: '6' },
    { sixthTime: '17.50' },
    { sixthTime: '18.35' },
    { sixthTime: '' },
  ];
  return (
    <div className={styles.timetable}>
      <h1>РАСПИСАНИЕ</h1>
      <p>Расписание звонков</p>
      <div className={styles.timetable__call_schedules}>
        <h3>I смена</h3>
        <div className={styles.timetable__call_schedule}>
          {timetable.map((item, index) => (
            <div key={index}>{item.head}</div>
          ))}
          {times.map((time, index) => (
            <div key={index}>{time.firstTime}</div>
          ))}
          {secondTime.map((time, index) => (
            <div key={index}>{time.secondTime}</div>
          ))}
          {thirdTime.map((time, index) => (
            <div key={index}>{time.thirdTime}</div>
          ))}
          {fourthTime.map((time, index) => (
            <div key={index}>{time.fourthTime}</div>
          ))}
          {fifthTime.map((time, index) => (
            <div key={index}>{time.fifthTime}</div>
          ))}
          {sixthTime.map((time, index) => (
            <div key={index}>{time.sixthTime}</div>
          ))}
        </div>
        <h3>II смена</h3>
        <div className={styles.timetable__call_schedule}>
          {timetable.map((item, index) => (
            <div key={index}>{item.head}</div>
          ))}
          {times2.map((time, index) => (
            <div key={index}>{time.firstTime}</div>
          ))}
          {secondTime2.map((time, index) => (
            <div key={index}>{time.secondTime}</div>
          ))}
          {thirdTime2.map((time, index) => (
            <div key={index}>{time.thirdTime}</div>
          ))}
          {fourthTime2.map((time, index) => (
            <div key={index}>{time.fourthTime}</div>
          ))}
          {fifthTime2.map((time, index) => (
            <div key={index}>{time.fifthTime}</div>
          ))}
          {sixthTime2.map((time, index) => (
            <div key={index}>{time.sixthTime}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
