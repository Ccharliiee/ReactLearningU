import Expenses from "./component/Expenses";

function App() {
  const expenses = [
    {
      id: "id1",
      title: "Toilet Paper",
      amount: 46.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "id2",
      title: "New Earphone",
      amount: 499.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "id3",
      title: "Internet Bill",
      amount: 259.95,
      date: new Date(2021, 2, 28),
    },
    {
      id: "id4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2020, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
