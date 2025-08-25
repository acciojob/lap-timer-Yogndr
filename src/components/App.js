
import React, { useEffect, useRef, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[time,setTime]=useState(0);
  const[laps,setLaps]=useState([]);
  const[isRunning,setIsRunning]=useState(false);
  const timerRef = useRef(null);

  const formatTime = (t) => {
    const minutes = Math.floor(t / 6000);
    const seconds = Math.floor((t % 6000) / 100);
    const centiseconds = t % 100;

    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
  };
 
  const recordLap = () => {
    if (isRunning) {
      setLaps([...laps, time]);
    }
  };

   const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };
   
    const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  
   useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
        <h2>{formatTime(time)}</h2>
    

      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      <button onClick={recordLap} disabled={!isRunning}>Lap</button>
      <button onClick={resetTimer} >Reset</button>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
          {formatTime(lap)}
          </li>
        ))}
      </ul>
        
    </div>
  )
}

export default App;

// import React, { useEffect, useRef, useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   const [time, setTime] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//   const formatTime = (t) => {
//     const minutes = Math.floor(t / 6000);
//     const seconds = Math.floor((t % 6000) / 100);
//     const centiseconds = t % 100;

//     const pad = (num) => String(num).padStart(2, "0");
//     return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
//   };

//   const startTimer = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       timerRef.current = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 10);
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//     setIsRunning(false);
//   };

//   const recordLap = () => {
//     if (isRunning) {
//       setLaps([...laps, time]);
//     }
//   };

//   const resetTimer = () => {
//     clearInterval(timerRef.current);
//     setIsRunning(false);
//     setTime(0);
//     setLaps([]);
//   };

//   useEffect(() => {
//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {/* <h1>Lap Timer</h1> */}
//       <h2>{formatTime(time)}</h2>

//       <div>
//         <button onClick={startTimer} disabled={isRunning}>Start</button>
//         <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
//         <button onClick={recordLap} disabled={!isRunning}>Lap</button>
//         <button onClick={resetTimer}>Reset</button>
//       </div>

      
//       <ul>
//         {laps.map((lap, index) => (
//           <li key={index}>
//           {formatTime(lap)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
