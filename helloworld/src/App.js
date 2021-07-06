import Other from "./components/Home"

function App() {
  const data=["vue","react","nodejs","expressjs"]
  const data1=["kannada","english","hindi"]
  return (
    <div>
      <Other  content={data} name="kiran"/>
      <Other content={data1} name="ram"/> 
    </div>
  );
}

export default App;
