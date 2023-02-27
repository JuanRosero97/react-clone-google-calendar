import moment from "moment/dist/moment";

export default function createMatrix({ date, rows, cols }) {
  const firstDay = moment(date).startOf("month").day();
  let count = 0 - (firstDay + 1);

  const createMatrix = new Array(rows).fill([]).map(() => {
    return new Array(cols).fill().map(() => {
      count++;
      return moment(date).startOf("month").add(count, "day");
    });
  });

  return createMatrix;
}
