import { formatDate } from "@/utils/dateUtils";

const DateCell = (props) => {
  const { dataItem, field } = props;
  const dateValue = dataItem[field];

  return <td>{formatDate(dateValue)}</td>;
};

export default DateCell;
