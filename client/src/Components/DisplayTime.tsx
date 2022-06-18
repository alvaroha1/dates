import { Text } from "../Styles/DisplayTime";
import DateTimeFormatOptions from "../Types/DateTimeFormatOptions";
import TimeSlot from "../Types/TimeSlot";
interface DisplayTimeProps {
  timeslot: TimeSlot;
}

export default function DisplayTime({ timeslot }: DisplayTimeProps) {
  const { end_time, start_time } = timeslot;
  const options: DateTimeFormatOptions = { hour: "numeric", minute: "numeric" };
  const formatStart = new Intl.DateTimeFormat("en-US", options).format(
    new Date(start_time)
  );
  const formatEnd = new Intl.DateTimeFormat("en-US", options).format(
    new Date(end_time)
  );
  return (
    <Text>
      {formatStart}-{formatEnd}
    </Text>
  );
}
