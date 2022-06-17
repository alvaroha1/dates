import { ButtonDiv, ButtonText } from "../Styles/TimeSlot";
import DateTimeFormatOptions from "../Types/DateTimeFormatOptions";
import TimeSlot from "../Types/TimeSlot";
import { useDispatch } from "react-redux";
import { addSlot } from "../Redux/selectedSlotsSlice";
import SelectedSlot from "../Types/SelectedSlot";
interface TimeSlotProps {
  timeslot: TimeSlot;
}

export default function TimeSlotItem({ timeslot }: TimeSlotProps) {
  const dispatch = useDispatch();
  const { end_time, start_time } = timeslot;
  const reduxSlot: SelectedSlot = {name: "test", id: 1, time_slot: timeslot}
  const options: DateTimeFormatOptions = { hour: "numeric", minute: "numeric"};
  const formatStart = new Intl.DateTimeFormat('en-US', options).format(new Date(start_time));
  const formatEnd = new Intl.DateTimeFormat('en-US', options).format(new Date(end_time));
  return (
    <div key={start_time} onClick={() => dispatch(addSlot(reduxSlot))}>
      <ButtonDiv>
        <ButtonText>{formatStart}-{formatEnd}</ButtonText>
        
      </ButtonDiv>
    </div>
  );
}
