// 時間を1時間ベースに変換する関数
const convertToHours = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return (hours + minutes / 60 + seconds / 3600).toFixed(2); // 小数点2桁まで
};

export { convertToHours };
