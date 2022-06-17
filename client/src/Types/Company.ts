import TimeSlot from "./TimeSlot";

export default interface Company {
  name: string;
  id: number;
  type: string;
  time_slots: TimeSlot[];
  groupedByDay: {};
}
