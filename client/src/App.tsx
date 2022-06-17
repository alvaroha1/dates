import React, { useEffect, useState } from "react";
import CompanyItem from "./Components/CompanyItem";
import { groupBy } from "./helpers";
import Company from "./Types/Company";
import { Main} from "./Styles/App"

function prepareData(json: Company[]) {
  for (const company of json) {
    company.time_slots.map(item => item.day = item.start_time.slice(0,10))
    const groupByDay = groupBy(['day']);
    const timeslotsGroupped = groupByDay(company.time_slots);
    company.groupedByDay = timeslotsGroupped;
  }
  return json;
}

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const fetchData = async () => {
    const data = await fetch(`http://localhost:4000/api/`);
    const json = await data.json();
    prepareData(json);
    console.log(json)
    setCompanies(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Main>
        {companies.map((company) => (
          <CompanyItem key={company.id} company={company} />
        ))}
      </Main>
    </div>
  );
}

export default App;
