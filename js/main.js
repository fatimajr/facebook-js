window.addEventListener("load", cargaPagina);

	function cargaPagina(){
		var boton = document.getElementById("boton");
		boton.addEventListener("click", publicar);
	};

	function publicar(e){
		e.preventDefault();
		var areaTexto = document.getElementById("areatexto");
		var contenedor = document.getElementById ("contenedor");
		txt = areaTexto.value;
		var div = document.createElement("div");
		div.textContent = txt;
		contenedor.appendChild(div);
		areaTexto.value = "";
	};