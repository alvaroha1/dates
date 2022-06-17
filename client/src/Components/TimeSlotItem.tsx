import { ButtonDiv, ButtonText } from "../Styles/TimeSlot";
import DateTimeFormatOptions from "../Types/DateTimeFormatOptions";
import TimeSlot from "../Types/TimeSlot";
interface TimeSlotProps {
  timeslot: TimeSlot;
}

export default function TimeSlotItem({ timeslot }: TimeSlotProps) {
  const { end_time, start_time } = timeslot;
  const options: DateTimeFormatOptions = { hour: "numeric", minute: "numeric"};
  const formatStart = new Intl.DateTimeFormat('en-US', options).format(new Date(start_time));
  const formatEnd = new Intl.DateTimeFormat('en-US', options).format(new Date(end_time));
  return (
    <div key={start_time}>
      <ButtonDiv>
        <ButtonText>{formatStart}-{formatEnd}</ButtonText>
        
      </ButtonDiv>
    </div>
  );
}
