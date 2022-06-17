import DateTimeFormatOptions from "../Types/DateTimeFormatOptions";
import TimeSlot from "../Types/TimeSlot";
import TimeSlotItem from "./TimeSlotItem";
interface DayItemProps {
  day: any;
  slots: any;
}

export default function DayItem({ day, slots }: DayItemProps) {
  const options: DateTimeFormatOptions = { weekday: "long" };
  let date = new Intl.DateTimeFormat('en-US', options).format(new Date(day))

  return (
    <div key={date}>
      <div >{date}</div>
      {slots.map((slot: TimeSlot) => (
        <TimeSlotItem key={slot.start_time} timeslot={slot} />
      ))}
    </div>
  );
}
