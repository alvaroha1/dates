import Company from "../Types/Company";
import DayItem from "./DayItem";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { Item, Card, List } from "../Styles/CompanyItem"

interface CompanyItemProps {
  company: Company;
}

export default function CompanyItem({ company }: CompanyItemProps) {
  const { name, groupedByDay } = company;
  const { selectedSlots } = useSelector((state: RootState) => state.slots)
  console.log(selectedSlots)
  return (
    <Card>
      <Item>{name}</Item>
      <Item>Time Slot Selected</Item>
      <List>
        {Object.entries(groupedByDay).map(([day, value]) => <DayItem key={day} day={day} slots={value} />)}
      </List>
    </Card>
  );
}
