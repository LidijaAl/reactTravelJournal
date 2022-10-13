import "./style.css";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";


export default function App() {
  
  const cards = data.map(item => {
    return (
     <Card
        key={item.id}
        {...item}
     />
    )
  })



  return (
    <div className="app">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
     </div>
  );
}
