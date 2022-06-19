import {
  ButtonDiv,
  ButtonDivSelected,
  ButtonDivDisabled,
} from "../Styles/TimeSlot";
import TimeSlot from "../Types/TimeSlot";
import { useDispatch } from "react-redux";
import { addSlot, removeSlot } from "../Redux/selectedSlotsSlice";
import SelectedSlot from "../Types/SelectedSlot";
import DisplayTime from "./DisplayTime";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

interface TimeSlotProps {
  timeslot: TimeSlot;
  name: string;
  id: number;
  day: string;
}

export function checkIfBlocked(timeslot: TimeSlot, slot: SelectedSlot) {
    if (slot.day === timeslot.day) {
      const slotStart = new Date(timeslot.start_time);
      const slotEnd = new Date(timeslot.end_time);
      const selectedStart = new Date(slot.time_slot.start_time);
      const selectedEnd = new Date(slot.time_slot.end_time);
      if (
        slotStart.getTime() === selectedStart.getTime() &&
        slotEnd.getTime() === selectedEnd.getTime()
      ) {
        return true;
      } else if (
        (slotStart.getTime() < selectedEnd.getTime() &&
          slotStart.getTime() < selectedStart.getTime() &&
          slotEnd.getTime() > selectedStart.getTime()) ||
        (slotStart.getTime() > selectedStart.getTime() &&
          slotStart.getTime() < selectedEnd.getTime())
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
}

export default function TimeSlotItem({
  timeslot,
  name,
  id,
  day,
}: TimeSlotProps) {
  const dispatch = useDispatch();
  const { start_time } = timeslot;
  const reduxSlot: SelectedSlot = { name, id, time_slot: timeslot, day };
  const { selectedSlots } = useSelector((state: RootState) => state.slots);
  const isSlotSelected = selectedSlots.filter((item) => item.id === id);
  let blocked = false;
  for (const slot of selectedSlots) {
    if (!blocked) blocked = checkIfBlocked(timeslot, slot)
  }
  const slotSelected = function () {
    if (selectedSlots.length > 0) {
      if (isSlotSelected.length > 0) {
        if (
          isSlotSelected[0].time_slot.start_time === timeslot.start_time &&
          isSlotSelected[0].time_slot.end_time === timeslot.end_time
        ) {
          return (
            <div
              key={start_time}
              onClick={() => dispatch(removeSlot(reduxSlot))}
            >
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
        if (blocked) {
          return (
            <div key={start_time}>
              <ButtonDivDisabled>
                <DisplayTime timeslot={timeslot} />
              </ButtonDivDisabled>
            </div>
          );
        } else {
          return (
            <div key={start_time} onClick={() => dispatch(addSlot(reduxSlot))}>
              <ButtonDiv>
                <DisplayTime timeslot={timeslot} />
              </ButtonDiv>
            </div>
          );
        }
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
