import Company from "../Types/Company";
import DayItem from "./DayItem";
import TimeSlotItem from "./TimeSlotItem"

interface CompanyItemProps {
  company: Company;
}

export default function CompanyItem({ company }: CompanyItemProps) {
  const { name, time_slots, groupedByDay } = company;
  
  return (
    <div>
      <div>{name}</div>
      <div>Time Slot Selected</div>
      <div>
        {Object.entries(groupedByDay).map(([day, value]) => <DayItem key={day} day={day} slots={value} />)}
      </div>
    </div>
  );
}
