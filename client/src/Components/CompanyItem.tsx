import Company from "../Types/Company";
import DayItem from "./DayItem";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { Item, Card, List } from "../Styles/CompanyItem"
import DisplayTime from "./DisplayTime";

interface CompanyItemProps {
  company: Company;
}

export default function CompanyItem({ company }: CompanyItemProps) {
  const { name, groupedByDay, id } = company;
  const { selectedSlots } = useSelector((state: RootState) => state.slots)
  const isSlotSelected = selectedSlots.filter(item => item.id === id);
  const slotSelected = function () {
    if (isSlotSelected.length > 0) {
      return <Item><DisplayTime timeslot={isSlotSelected[0].time_slot} /></Item>;
    } else {
      return <Item>Nothing Selected Yet</Item>;
    }
  }
  return (
    <Card>
      <Item>{name}</Item>
      {slotSelected()}
      <List>
        {Object.entries(groupedByDay).map(([day, value]) => <DayItem key={day} name={name} id={id} day={day} slots={value} />)}
      </List>
    </Card>
  );
}
