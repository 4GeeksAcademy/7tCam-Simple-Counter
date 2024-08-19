import React, {useState} from "react";



//create your first component
const Home = (props) => {
	// funcion para pintar cada segundo lo que esta en su bloque(tiene un bucle interno)
	



	return (
		<div>
			<div className="px-4 contenido my-3 mx-auto d-flex flex-row justify-content-center align-items-center w-75 gap-3 py-2 vh-25 ">
				<div className="card rounded-5 d-flex align-items-center  w-25">
				<span class="text-white material-symbols-outlined mx-auto">alarm</span>
				</div>
				<div className="card rounded-5  d-flex align-items-center">0</div>
				<div className="card  rounded-5  d-flex align-items-center">0</div>
				<div className="card rounded-5  d-flex align-items-center">0</div>
				<div className="card rounded-5  d-flex align-items-center">0</div>
				<div className="card rounded-5  d-flex align-items-center">0</div>
				<div className="card rounded-5  d-flex align-items-center">{props.digito1}</div>
			
			</div>
		</div>
			
	);
};

export default Home;
