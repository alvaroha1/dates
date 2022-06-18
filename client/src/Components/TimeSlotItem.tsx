import { ButtonDiv, ButtonDivSelected, ButtonDivDisabled } from "../Styles/TimeSlot";
import TimeSlot from "../Types/TimeSlot";
import { useDispatch } from "react-redux";
import { addSlot } from "../Redux/selectedSlotsSlice";
import SelectedSlot from "../Types/SelectedSlot";
import DisplayTime from "./DisplayTime";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

interface TimeSlotProps {
  timeslot: TimeSlot;
  name: string;
  id: number;
}

export default function TimeSlotItem({ timeslot, name, id }: TimeSlotProps) {
  const dispatch = useDispatch();
  const { start_time } = timeslot;
  const reduxSlot: SelectedSlot = { name, id, time_slot: timeslot };
  const { selectedSlots } = useSelector((state: RootState) => state.slots);
  const isSlotSelected = selectedSlots.filter((item) => item.id === id);
  const slotSelected = function () {
    if (isSlotSelected.length > 0) {
      if (isSlotSelected[0].time_slot.start_time === timeslot.start_time && isSlotSelected[0].time_slot.end_time === timeslot.end_time) {
        return (
          <div key={start_time} onClick={() => console.log("unselect")}>
            <ButtonDivSelected>
              <DisplayTime timeslot={timeslot} />
            </ButtonDivSelected>
          </div>
        );
      } else {
        return (
          <div key={start_time}>
            <ButtonDivDisabled>
              <DisplayTime timeslot={timeslot} />
            </ButtonDivDisabled>
          </div>
        );
      }

    } else {
      return (
        <div key={start_time} onClick={() => dispatch(addSlot(reduxSlot))}>
          <ButtonDiv>
            <DisplayTime timeslot={timeslot} />
          </ButtonDiv>
        </div>
      );
    }
  };
  return <>{slotSelected()}</>;
}
