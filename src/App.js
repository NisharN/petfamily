import one from './assets/images/dog-1.jfif'
import two from './assets/images/dog-2.jfif'
import three from './assets/images/dog-3.jfif'
import four from './assets/images/dog-4.jfif'
import five from './assets/images/dog-5.jfif'
import six from './assets/images/dog-6.jfif'
import seven from './assets/images/dog-7.jfif'
import eight from './assets/images/dog-8.jfif'
import './App.css';
function App(props) {
  const pets=[
  {
    id:1,
    img:one,
    caption:"feeling good",
    height:"200px",
    width:"250px",
  },
  {
    id:2,
    img:two,
    caption:"cutest pet",
    height:"200px",
    width:"250px",

  },
  {
    id:3,
    img:three,
    caption:"tired",
    height:"200px",
    width:"250px",
  },
  {
    id:4,
    img:four,
    caption:"hii bro!",
    height:"200px",
    width:"250px",
  },
  {
    id:5,
    img:five,
    caption:"happy",
    height:"200px",
    width:"250px",
  },
  {
    id:6,
    img:six,
    caption:"little one",
    height:"200px",
    width:"250px",
  },
  {
    id:7,
    img:seven,
    caption:"having fun",
    height:"200px",
    width:"250px",
  },
  {
    id:8,
    img:eight,
    caption:"bye!",
    height:"200px",
    width:"250px",
    
  }
  ]
  return (
    <div className="App">
      <div className="app-header">
        <h1>Pet Family</h1>
      </div>

      <div className="container" style={{display:"grid",gap:"5px",gridTemplateColumns:"auto auto auto auto",margin:"0px 120px"}}>
        {
        pets.map((pet) => {
            return (
              <div className="row" key={pet.id} styles={{}}>
                <img src={pet.img} alt="dog" height={pet.height} width={pet.width} styles={{marginBottom:"2px"}}/>
                <h3 className="cap">{pet.caption}</h3>
              </div>
            );
        })}
      
        </div>

    </div>
  );
}

export default App;
