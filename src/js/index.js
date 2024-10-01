//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let number = 0;

	setInterval(() => {
		const digitoUno = Math.floor(( number/1 ) % 10)
		const digitoDos = Math.floor(( number/10 ) % 10)
		const digitoTres = Math.floor(( number/100 ) % 10)
		const digitoCuatro = Math.floor(( number/1000 ) % 10)
		const digitoCinco = Math.floor(( number/10000 ) % 10)
		const digitoSeis = Math.floor(( number/100000 ) % 10)


		number += 1;
			
//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home digito1={digitoUno} digito2={digitoDos} digito3={digitoTres} digito4={digitoCuatro} digito5={digitoCinco} digito6={digitoSeis}  />);
}, 1000);

