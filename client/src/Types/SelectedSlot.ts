import TimeSlot from "./TimeSlot";

export default interface SelectedSlot {
  name: string;
  id: number;
  time_slot: TimeSlot;
  day: string;
}