# React Coding Challenge

30 React Coding Challenge 👩‍💻 (mid-level 💪 )

## nested JS object

This is the first Coding Challenge (mid-level) of the series.

## specification

Write a functional component that accepts an arbitrarily nested object as a prop. Each key/property of the object is a word and its associated value is either (1) an object of the same format or (2) a definition string. An example of one such object is below.

## given code

```js
import React, { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    // YOUR CODE HERE
  );
};

export default App;
```

## command line tools used

For creating a new React application

```bash
create-react-app
```

## reference

[challenge link](https://medium.com/@justin.sherman/react-coding-interview-challenge-1-4b19bce85b0a)
