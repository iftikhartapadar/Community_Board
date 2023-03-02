import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <img className="topimage" src="./src/assets/images/crown.PNG" alt="crown" />
      <h1 className="title">Chess Openings Community Board</h1>
      <div className="cards">
        <Card
          name="Dutch Defense"
          image={'./src/assets/images/dutch_defense.jpg'}
          description="Creates imabalanced flexible positions"
          link="https://www.chess.com/openings/Dutch-Defense"
        />
        <Card
          name="French Defense"
          image={'./src/assets/images/french_defense.jpg'}
          description="Popular response to 1.e4"
          link="https://www.chess.com/openings/French-Defense"
        />
        <Card
          name="Italian Game"
          image={'./src/assets/images/italian_game.jpg'}
          description="Oldest opening in chess."
          link="https://www.chess.com/openings/Italian-Game"
        />
        <Card
          name="King's Gambit"
          image={'./src/assets/images/kings_gambit.jpg'}
          description="An age-old aggressive opening."
          link="https://www.chess.com/openings/Kings-Gambit"
        />
        <Card
          name="Queen's Gambit"
          image={'./src/assets/images/queens_gambit.jpg'}
          description="Most reputable 1.d4 opening for White."
          link="https://www.chess.com/openings/Queens-Gambit"
        />
        <Card
          name="London System"
          image={'./src/assets/images/london_system.jpg'}
          description="Popular 1.d4 opening for White"
          link="https://www.chess.com/openings/London-System"
        />
        <Card
          name="Scandinavian Defense"
          image={'./src/assets/images/scandinavian_defense.jpg'}
          description="Seventh most popular response to 1.e4."
          link="https://www.chess.com/openings/Scandinavian-Defense"
        />
        <Card
          name="Slav Defense"
          image={'./src/assets/images/slav_defense.jpg'}
          description="Response to White's Queen's Gambit."
          link="https://www.chess.com/openings/Slav-Defense"
        />
        <Card
          name="Vienna Game"
          image="./src/assets/images/vienna_game.jpg"
          description="A 1.e4 opening for White."
          link="https://www.chess.com/openings/Vienna-Game"
        />
        <Card
          name="Sicilian Defense"
          image="./src/assets/images/sicilian_defense.jpg"
          description="One of the oldest registered openings"
          link="https://www.chess.com/openings/Sicilian-Defense"
        />
      </div>
      
    </div>
  )
}

export default App