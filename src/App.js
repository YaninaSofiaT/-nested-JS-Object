import React from "react";

const nestedObjected = {
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
};

function App() {
  return (
    <div
      style={{
        margin: "auto",
        top: 100,
        padding: 20,
        width: 400,
        backgroundColor: "#f55353",
        position: "relative",
        fontWeight: "bold",
      }}
    >
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    <>
      {Object.entries(nestedObjected).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <div key={key}>
              <p>{`${key}: `}</p>
              <div
                style={{
                  paddingLeft: 50,
                }}
              >
                <DisplayNested nestedObjected={value} />
              </div>
            </div>
          );
        } else {
          return <p>{`${key}: ${value}`}</p>;
        }
      })}
    </>
  );
};
console.log("I DID IT!!🎉 🎉 🎉 ");

export default App;
