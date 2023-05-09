import React, { useState } from "react";

function PuzzlePage() {
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  const puzzleAnswer = () => {
    return 1403;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(inputValue) === puzzleAnswer()) {
      setShowSuccess(true);
    } else {
      setShowError(true);
      setAttemptsLeft(attemptsLeft - 1);
      setInputValue("");
    }
  };

  const handleReset = () => {
    setInputValue("");
    setShowError(false);
    setShowSuccess(false);
    setAttemptsLeft(3);
  };

  return (
    <div className="puzzle-container">
      {showSuccess ? (
        <div className="success-message">
            ___

            <table style={{ border: "2px solid black", borderCollapse: "collapse", margin: "10px auto" }}>
  <thead>
    <tr style={{ border: "2px solid black" }}>
      <th style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}></th>
      <th style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}></th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ border: "2px solid black" }}>
      <td style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}>Prince</td>
      <td style={{ border: "2px solid black", padding: "10px" }}>-</td>
    </tr>
    <tr style={{ border: "2px solid black" }}>
      <td style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}>Vraj</td>
      <td style={{ border: "2px solid black", padding: "10px" }}>-</td>
    </tr>
    <tr style={{ border: "2px solid black" }}>
      <td style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}>Ut</td>
      <td style={{ border: "2px solid black", padding: "10px" }}>-</td>
    </tr>
    <tr style={{ border: "2px solid black" }}>
      <td style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}>Neha</td>
      <td style={{ border: "2px solid black", padding: "10px" }}>An enthusiastic, wonderful and cheerful person and an amazing friend.</td>
    </tr>
    <tr style={{ border: "2px solid black" }}>
      <td style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}>Ananya 😍</td>
      <td style={{ border: "2px solid black", padding: "10px" }}>Happy Birthday Manni, you have one of the purest heart and soul. You mean alot to all of us. Stay the same. 

Lots of love
Ananya</td>
    </tr>
    <tr style={{ border: "2px solid black" }}>
      <td style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}>Sammy</td>
      <td style={{ border: "2px solid black", padding: "10px" }}>Happy Birthday bhalu bhadwe bhoot

Tatta hai tu wo bhi boodhe lund ke neeche latakta hua 

Ek Sher hai aapke liye
Tujhe mujhse aur sid se prabh the legend ne milaya
Tujhe mujhe aur sid se prabh the legend ne milaya

Hum aaj Tak sochte hein ki tune 10sec mein kaise hilaya🤣


Mithila ko 2000, Athena ko sorry, 
Mithila ko 2000, Athena ko sorry
Ab aage mat badhna warna phirse kaat jaaegi koi nayi chhhhori

TMP nights were best 💦
Happy budddaayyy bhadwe💦</td>
    </tr>
    <tr style={{ border: "2px solid black" }}>
      <td style={{ border: "2px solid black", padding: "10px", fontWeight: "bold" }}>Me</td>
      <td style={{ border: "2px solid black", padding: "10px" }}>
       
      </td>
    </tr>
  </tbody>
</table>



          
        </div>
      ) : (
        <>
          <h1>Welcome to the Puzzle Page</h1>
          <p></p>
          <p>
          You , me , samyak . I'll cherish us for my whole life. We first met through one and only god prabh, and eventually four of us became inseparable. Those were the days when we spent all our time together. Matlab jo bhi problems thi , we gave zero fucks.  As we sat around a table reminiscing about the good old days, we couldn't help but feel nostalgic. It seemed like only yesterday that we were all in college, but now we were all grown up with problems of our own.

Despite the years that had passed, there was still a bond between us that could not be broken. We knew that no matter where life took us, we would always have each other to rely on. At last , we three will cherish forever. 
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="puzzle-input">Enter your answer:    </label>
            <input
              id="puzzle-input"
              type="number"
              min="0"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            {showError && (
              <p className="error-message">
                Sorry, that's not the correct answer. You have {attemptsLeft} attempts left.
              </p>
            )}
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default PuzzlePage;
