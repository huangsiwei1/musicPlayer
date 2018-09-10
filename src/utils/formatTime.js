export default (num)=>{
  let m = parseInt(num % 3600 / 60);
  let s = parseInt(num % 60);
  s=s < 10 ? `0${s}` : s;
  return `${m}:${s}`
}
