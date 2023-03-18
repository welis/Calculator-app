import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {
  const theme1 = "hsl(222, 26%, 31%)";
  const theme2 = "hsl(0, 0%, 90%)";
  const theme3 = "hsl(268, 75%, 9%)";

  const [numero, setNumero] = useState(0);
  const [oldNumero, setOldNumero] = useState(0);
  const [operador, setOperador] = useState();

  // criar objeto com os temas
  const theme1Button = {
    backgroundColor: "hsl(223, 31%, 20%)",
    button : {
      backgroundColor: "hsl(30, 25%, 89%)",
      color: "hsl(221, 14%, 31%)",
    },
    buttonDel: {
      backgroundColor: "hsl(225, 21%, 49%)",
      color: "hsl(0, 0%, 100%)"
    },
    buttonReset: {
      backgroundColor: "hsl(225, 21%, 49%)",
      color: "hsl(0, 0%, 100%)",
      gridColumn: "1 / span 2",
      width: "91%",
    },
    buttonEqual: {
      backgroundColor: "hsl(6, 63%, 50%)",
      color: "hsl(0, 0%, 100%)",
      gridColumn: "3 / span 2",
      width: "91%"
    }
  }

  const theme2Button = {
    backgroundColor: "hsl(0, 5%, 81%)",
    button : {
      backgroundColor: "hsl(30, 25%, 89%)",
      color: "hsl(221, 14%, 31%)", 
    },
    buttonDel: {
      backgroundColor: "hsl(185, 58%, 25%)",
      color: "hsl(0, 0%, 100%)"
    },
    buttonReset: {
      backgroundColor: "hsl(185, 58%, 25%)",
      color: "hsl(0, 0%, 100%)",
      gridColumn: "1 / span 2",
      width: "91%",
    },
    buttonEqual: {
      backgroundColor: "hsl(25, 98%, 40%)",
      color: "hsl(0, 0%, 100%)",
      gridColumn: "3 / span 2",
      width: "91%"
    }
  }

  const theme3Button = {
    backgroundColor: "hsl(268, 71%, 12%)",
    button : {
      backgroundColor: "hsl(281, 89%, 26%)",
      color: "hsl(52, 100%, 62%)", 
    },
    buttonDel: {
      backgroundColor: "hsl(290, 70%, 36%)",
      color: "hsl(0, 0%, 100%)"
    },
    buttonReset: {
      backgroundColor: "hsl(290, 70%, 36%)",
      color: "hsl(0, 0%, 100%)",
      gridColumn: "1 / span 2",
      width: "91%",
    },
    buttonEqual: {
      backgroundColor: "hsl(176, 100%, 44%)",
      color: "hsl(0, 0%, 100%)",
      gridColumn: "3 / span 2",
      width: "91%"
    }
  }

  const DisplayTheme1 = {
    backgroundColor: "hsl(0, 0%, 93%)",
    color: "black"
  }

  const DisplayTheme2 = {
    backgroundColor: "hsl(268, 71%, 12%)",
    color: "#FFE53D"
  }

  const DisplayTheme3 = {
    backgroundColor: "hsl(224, 36%, 15%)",
    color: "white"
  }

  const [theme, setTheme] = useState(theme1);
  const [themeDisplay, setThemeDisplay] = useState(DisplayTheme3);
  const [themeButton, setThemeButton] = useState(theme1Button);

  const changeTheme = () => {
    if (theme === theme1) {
      setTheme(theme2);
      setThemeDisplay(DisplayTheme1);
      setThemeButton(theme2Button);
    }
    else if (theme === theme2) {
      setTheme(theme3);
      setThemeDisplay(DisplayTheme2);
      setThemeButton(theme3Button);
    }
    else if (theme === theme3) {
      setTheme(theme1);
      setThemeDisplay(DisplayTheme3);
      setThemeButton(theme1Button);
    }
  }

  const inputNumber = (e) => {
      if(e.target.value === "reset") {
        setNumero(0);
        return;
      }else if(e.target.value === "del") {
        setNumero(numero.slice(0, -1));
        return;
      }
      if(numero === 0) {
        setNumero(e.target.value);
      }else{
        setNumero(numero + e.target.value);
      }
      if(e.target.value === "+" || e.target.value === "-" || e.target.value === "*" || e.target.value === "/") {
        setOperador(e.target.value);
        setOldNumero(numero);
        setNumero(0);

      }
      if(e.target.value === "=") {
        if(operador === "+") {
          setNumero(Number(oldNumero) + Number(numero));
        }else if(operador === "-") {
          setNumero(Number(oldNumero) - Number(numero));
        }else if(operador === "*") {
          setNumero(Number(oldNumero) * Number(numero));
        }else if(operador === "/") {
          setNumero(Number(oldNumero) / Number(numero));
        }
      }
    }

  return (
    <div className="App" style={{backgroundColor: theme, height: "100vh", width: "100vw", transition: "all 0.4s ease-out"}}>
      <button className="btnTheme" onClick={changeTheme}>Change Theme</button>
      <Display theme={themeDisplay} numero={numero} />
      <Buttons theme={themeButton} onClick={inputNumber}/>
    </div>
  );
}

export default App;
