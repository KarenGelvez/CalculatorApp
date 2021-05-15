import { useRef, useState } from 'react';

enum Operators {
  sum,
  subtraction,
  multiplication,
  division,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const [previousNumber, setPreviousNumber] = useState('0');

  const refOperator = useRef<Operators>();

  const buildNumber = (numberText: string) => {
    //Don't accept double point
    if (number.includes('.') && numberText == '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      //First decimal point
      if (numberText == '.') {
        setNumber(number + numberText);

        //Evaluate if it is another zero and there is a point
      } else if (numberText == '0' && number.includes('.')) {
        setNumber(number + numberText);

        //Evaluate if it is different zero and there is not a point
      } else if (numberText != '0' && !number.includes('.')) {
        setNumber(numberText);

        //Avoid 0000.0
      } else if (numberText == '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const del = () => {
    if (number.length == 1 || (number.length == 2 && number.includes('-'))) {
      //clear();
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const changeNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    //clear();
    setNumber('0');
  };

  const div = () => {
    changeNumber();
    refOperator.current = Operators.division;
  };
  const mul = () => {
    changeNumber();
    refOperator.current = Operators.multiplication;
  };
  const sum = () => {
    changeNumber();
    refOperator.current = Operators.sum;
  };
  const sub = () => {
    changeNumber();
    refOperator.current = Operators.subtraction;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);
    switch (refOperator.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtraction:
        setNumber(`${num2 - num1}`);

        break;
      case Operators.multiplication:
        setNumber(`${num1 * num2}`);

        break;
      case Operators.division:
        setNumber(`${num2 / num1}`);

        break;
    }
    setPreviousNumber('0');
  };

  return {
    number,
    previousNumber,
    buildNumber,
    clear,
    positiveNegative,
    del,
    sum,
    sub,
    mul,
    div,
    calculate,
  };
};
