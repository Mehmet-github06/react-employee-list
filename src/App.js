import Liste from "./components/Liste";
import data from "./helper/data";



function App() {
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>(Employee 1 to 5)</h5>
      <Liste data={data}/>
      <div className="btns">
        <button onClick={prevList}>Prev</button>
        <button onClick={nextList}>Next</button>
      </div>
      </section>
     
    </main>
  );
}

export default App;
