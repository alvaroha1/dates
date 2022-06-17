import Company from "../Types/Company";
import DayItem from "./DayItem";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { Item, Card, List } from "../Styles/CompanyItem"

interface CompanyItemProps {
  company: Company;
}

export default function CompanyItem({ company }: CompanyItemProps) {
  const { name, groupedByDay, id } = company;
  const { selectedSlots } = useSelector((state: RootState) => state.slots)
  console.log(selectedSlots)
  const isSlotSelected = selectedSlots.filter(item => item.id === id);
  console.log(isSlotSelected, "isSelected")
  return (
    <Card>
      <Item>{name}</Item>
      {isSlotSelected ? <Item>{"a"}</Item> : <Item>Nothing Selected Yet</Item>}
      <List>
        {Object.entries(groupedByDay).map(([day, value]) => <DayItem key={day} name={name} id={id} day={day} slots={value} />)}
      </List>
    </Card>
  );
}
