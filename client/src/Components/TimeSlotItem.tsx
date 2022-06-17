import TimeSlot from "../Types/TimeSlot";
interface TimeSlotProps {
  timeslot: TimeSlot;
}

export default function TimeSlotItem({ timeslot }: TimeSlotProps) {
  const { end_time,start_time } = timeslot;
  return (
    <div>
      <div>{end_time}-{ start_time}</div>
    </div>
  );
}
