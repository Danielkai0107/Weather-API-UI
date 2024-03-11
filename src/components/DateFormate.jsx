import React from 'react';

const DateFormate = ({ dateString }) => {
  const date = new Date(dateString);
  const weekDay = date.toLocaleDateString('zh-TW', { weekday: 'long' });

  return <span>{weekDay}</span>;
};

export default DateFormate;
