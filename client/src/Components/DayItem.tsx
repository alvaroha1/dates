import TimeSlot from "../Types/TimeSlot";
import TimeSlotItem from "./TimeSlotItem";
interface DayItemProps {
  day: any;
  slots: any;
}

export default function DayItem({ day, slots}: DayItemProps) {
  return (
    <div>
      <div>{day}</div>
      {slots.map((slot: TimeSlot) => <TimeSlotItem key={slot.start_time} timeslot={slot} />)}
    </div>
  );
}
