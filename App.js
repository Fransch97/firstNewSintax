import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView
} from 'react-native';

import Nav from './src/nav';
import Generate from './src/generate';
import NumberItem from './src/NumberItem';

const App = () => {
  const [hello, setHello] = useState("im a state lol");
  const [numbers, setNumbers] = useState([20, 55]);
  
  onAddRandom = (text) => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    const newState = [...numbers, newNumber]
    setNumbers(newState)
  }

  deleteNumber = (i) => {
    const newNumbers = numbers.filter((item, ii) => i !== ii )
    setNumbers(newNumbers);
  } 

  useEffect(() => {
    setTimeout(() => {
      setHello("now i am changed")
    }, 2000)
  }, [])

  return (
    <ScrollView>
      <Text>
        hello
      </Text>
      <Nav name={hello}/>
      <Generate passFunc={(text) => onAddRandom(text)}/>
      
      <NumberItem numbers={numbers} deletes={(i) => deleteNumber(i)}/>
    </ScrollView>
  )
}

export default App;