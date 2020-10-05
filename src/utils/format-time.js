export default (date) => {
  const hours = date.getHours();
  const hoursIsSingle = hours < 10;
  const formattedHours = hoursIsSingle === true ? `0${hours}` : hours;
  return `${formattedHours}:${date.getMinutes()}:${date.getSeconds()} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
};
