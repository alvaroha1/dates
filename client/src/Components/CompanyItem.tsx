import Company from "../Types/Company";
import DayItem from "./DayItem";
import { Item, Card, List } from "../Styles/CompanyItem"

interface CompanyItemProps {
  company: Company;
}

export default function CompanyItem({ company }: CompanyItemProps) {
  const { name, groupedByDay } = company;
  
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
