
import moment from "moment";


export const formatDateDMYTime = (date, format = "D-MM-YYYY HH:mm") => {
  const m = moment(date);
  if (!m.isValid()) {
    throw new Error("Invalid date");
  }
  return m.format(format);
};
