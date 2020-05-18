import moment from "moment";


export const formatTime = (date) => {
  return moment(date).format(`hh:mm`);
};

export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

export const getRandomInt = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};
