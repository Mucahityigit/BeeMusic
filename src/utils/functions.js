import { format } from "date-fns";
import { useDispatch } from "react-redux";

export const formatDate = (dateStr) => {
  return format(new Date(dateStr), "MMMM dd, yyyy");
};

export function millisecondToFormat(millisecond) {
  // Dışarıdan gelen milisaniyeyi kullanarak bir Date nesnesi oluştur
  var time = new Date(millisecond);

  // Saati ve dakikayı al
  var minute = time.getMinutes();
  var second = time.getSeconds();

  // Saat ve dakika iki haneli olarak gösterilsin
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  // Formatı oluştur
  var format = minute + ":" + second;
  return format;
}
