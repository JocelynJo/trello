function agregarLista() {
	//guardar input uno
	var divAna=document.getElementById('anadir-lista');
	divAna.classList.toggle('anadir-lista-borrar');
	//conteneder de tareas
	var contiene=document.getElementById('contiene-tareas');
	//crear div para contener nuevo menu
	var contieneNuevo=document.createElement('div');
	contieneNuevo.classList.add('caja-blanca');
	

	//crear textarea y sus atributos
	var inputTexto = document.createElement('textarea');
	inputTexto.cols =30;
	inputTexto.rows =1;
	inputTexto.setAttribute("placeholder","Añadir una lista");
	inputTexto.classList.add("ingresar","form-control");
	inputTexto.setAttribute('id','ingresar-lista');

	//crear boton guardar
	var botonAgregar=document.createElement('button');
	botonAgregar.classList.add("btn","btn-success","bto-guardar");
	var texto=document.createTextNode('Guardar');
	
	botonAgregar.appendChild(texto);
	//asignar hijos a contenedor
	contieneNuevo.appendChild(inputTexto);
	contieneNuevo.appendChild(botonAgregar);
	contiene.appendChild(contieneNuevo);

	botonAgregar.addEventListener('click', function(){
		//contiene.classList.toggle('mover');
		var nuevaLista=document.getElementById('ingresar-lista').value;
		var textoH3=document.createElement('h5');
 		var nuevoSpan=document.createTextNode(nuevaLista);
 		textoH3.appendChild(nuevoSpan)
 		var nuevaCol=document.getElementById('cont-tarea-new');
 		nuevaCol.classList.add('text-center');
 		var divNuevo=document.createElement('div');
 		var nuevaTarea=document.createElement('a');
 		nuevaTarea.setAttribute('id','linkTarjeta');
 		var textoNueva=document.createTextNode("Añadir nueva tarjeta");
 		nuevaTarea.classList.add("displayB");
 		divNuevo.classList.add('caja-blanca-tarea','col-md-3','col-xs-3','col-sm-3');
 		nuevaTarea.appendChild(textoNueva);
 		divNuevo.appendChild(textoH3);
 		divNuevo.appendChild(nuevaTarea);
 		nuevaCol.appendChild(divNuevo);
 		//nuevaCol.classList.add();
 		var borrar=document.getElementById('ingresar-lista');
		var papaBorar=borrar.parentNode;
		papaBorar.parentNode.removeChild(papaBorar);
		divAna.classList.toggle('anadir-lista-borrar');
		//crea area tarjetas
		nuevaTarea.addEventListener('click',function(){
			var divContiene=document.createElement('div');
			var areaTarj=document.createElement('textarea');
			areaTarj.cols =30;
			areaTarj.rows =5;
			areaTarj.classList.add("ingresar","form-control");
			var botonGuardar=document.createElement('button');
			botonGuardar.classList.add("btn","btn-success","bto-guardar");
			var textoBto=document.createTextNode('Añadir');
			botonGuardar.appendChild(textoBto);
			divContiene.appendChild(areaTarj);
			divContiene.appendChild(botonGuardar);
			divNuevo.appendChild(divContiene);
			divNuevo.classList.toggle('caja-contiene-tarea');
			nuevaTarea.classList.toggle('borrar');	
		})

		
 		
 		
 		
	})


	

}





