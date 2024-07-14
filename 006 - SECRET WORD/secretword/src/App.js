//CSS
import './App.css';

//REACT
import { useCallback, useEffect, useState } from 'react';

//DATA
import {wordsList} from "./data/words";

//COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1 , name: "start"},
  {id:2 , name: "game"},
  {id:3 , name: "end"}
]

const guessesQty = 3;


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //pegar uma categoria aleatoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    // console.log(category);

    //pegar uma palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    // console.log(word)

    return {word, category}
  }, [words]);


  //starts the secret word game
  const startGame =useCallback(() => {
    // clear all states
    clearLetterStates()


    const {word, category} = pickWordAndCategory();

    //criar um array de letras
    // utilizar o split = dividir ou separar, ou seja vai separar a palavra em si
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //preencher status
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //processar o letter input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    // checar se a letra ja foi utilizada
    if(
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // colocar a letra adivinhada ou remover uma chance
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);

    }


  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);

  }

    useEffect(() => {


      if(guesses <= 0) {
        // reset all states
        clearLetterStates()

        setGameStage(stages[2].name);
      }

    }, [guesses])

  
    //checar a condição de vitoria
    useEffect (() => {

      const uniqueLetters = [... new Set(letters)];

      // condição de vitoria
      if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
        // adicionar score
        setScore((actualScore) => actualScore += 100);

        //restart game
        startGame();
      }

    }, [guessedLetters, letters, startGame])
  

  //processar o letter input
  const retry =() => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
