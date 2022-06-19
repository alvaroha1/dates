import { checkIfBlocked } from "../Components/TimeSlotItem";
import SelectedSlot from "../Types/SelectedSlot";
import TimeSlot from "../Types/TimeSlot";

const timeSlot1: TimeSlot = {
  start_time: "2018-07-09T08:00:00.000+02:00",
  end_time: "2018-07-09T09:30:00.000+02:00",
  day: "2018-07-09",
};
const timeSlot2: TimeSlot = {
  start_time: "2018-07-10T11:00:00.000+02:00",
  end_time: "2018-07-10T12:30:00.000+02:00",
  day: "2018-07-10",
};
const selectedSlot: SelectedSlot = {
  name: "Company 1",
  id: 1,
  time_slot: {
    start_time: "2018-07-09T08:00:00.000+02:00",
    end_time: "2018-07-09T09:30:00.000+02:00",
    day: "2018-07-09",
  },
  day: "2018-07-09",
};

describe("Test checkIfBlocked function", () => {
  it("when the timeslot is among the slots selected", () => {
    
    const checkIfBlockedFlag = checkIfBlocked(timeSlot1, selectedSlot);

    expect(checkIfBlockedFlag).toEqual(true);
  });

  it("when the timeslot is not among the slots selected", () => {
    
    const checkIfBlockedFlag = checkIfBlocked(timeSlot2, selectedSlot);

    expect(checkIfBlockedFlag).toEqual(false);
  });
});