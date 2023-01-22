import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView
} from 'react-native';

import Nav from './src/Nav';
import Generate from './src/Generate';
import NumberItem from './src/NumberItem';
import Inputs from './Inputs';

const App = () => {
  const [hello, setHello] = useState("im a state lol");
  const [numbers, setNumbers] = useState([20, 55]);
  const [inputsValue, setinputsValue] = useState(null)
  onAddRandom = (text) => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    const newState = [...numbers, newNumber]
    setNumbers(newState)
  }

  deleteNumber = (i) => {
    const newNumbers = numbers.filter((item, ii) => i !== ii )
    setNumbers(newNumbers);
  } 

  getTextInputValue = (text) => {
    setinputsValue(text)
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
      <Inputs enterValues={(text) => getTextInputValue(text)} />
      <Text>Input from TextInput is:</Text>
      <Text>{inputsValue}</Text>
    </ScrollView>
  )
}

export default App;