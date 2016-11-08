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
		contiene.classList.toggle('mover');
		var nuevaLista=document.getElementById('ingresar-lista').value;
 		var nuevoSpan=document.createTextNode(nuevaLista);
 		var nuevaCol=document.getElementById('cont-tarea-new');
 		var divNuevo=document.createElement('div');
 		var nuevaTarea=document.createElement('a');
 		var textoNueva=document.createTextNode("Añadir nueva tarea");
 		nuevaTarea.classList.add("displayB");
 		divNuevo.classList.add('caja-blanca-tarea','text-center');
 		nuevaTarea.appendChild(textoNueva);
 		divNuevo.appendChild(nuevoSpan);
 		divNuevo.appendChild(nuevaTarea);
 		nuevaCol.appendChild(divNuevo);
 		var borrar=document.getElementById('ingresar-lista');
		var papaBorar=borrar.parentNode;
		papaBorar.parentNode.removeChild(papaBorar);
 		agregarLista();
 		divAna.classList.toggle('anadir-lista-borrar');
 		
	})
 		
 	
}



