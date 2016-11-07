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
	inputTexto.classList.add("ingresar");
	//crear boton guardar
	var botonAgregar=document.createElement('button');
	botonAgregar.classList.add("btn","btn-primary","bto-guardar");
	var texto=document.createTextNode('Guardar');
	botonAgregar.appendChild(texto);

	contieneNuevo.appendChild(inputTexto);
	contieneNuevo.appendChild(botonAgregar);
	contiene.appendChild(contieneNuevo);
	//asignar hijos a contenedor
	//contiene.appendChild(inputTexto);
	//contiene.appendChild(botonAgregar);

	
}

 