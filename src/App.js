import { Container, Content, Row } from "./styles";
import Input from './components/Input';
import Button from './components/Button';
import { useState } from "react";

function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0')
    setOperation('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => { 
      if (prev === "0") {
        return number
      } else {
        return `${prev}${number}`
      }
    })
    console.log(currentNumber)
  }

  const handleSumNumbers= () => {
    if(firstNumber === '0' || firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('')
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('*');
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
        break;
        case '-':
          handleMinusNumbers();
        break;
        case '*':
          handleMultNumbers();
        break;
        case '/':
          handleDivisionNumbers();
        break;
        default: break;
      }
  }
}

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
