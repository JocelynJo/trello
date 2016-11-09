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
	inputTexto.setAttribute('onfocus','foco(this.id)');

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
		var entradaInput=document.getElementById('ingresar-lista').value;
		if(entradaInput== null|| entradaInput.length==0){
			inputTexto.setAttribute('onfocus','foco(this.id)');
			
		}else{

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

		}
		
		
		//crea area tarjetas
		nuevaTarea.addEventListener('click',function(){
			var divContiene=document.createElement('div');
			divContiene.setAttribute('id','box-tarjeta')
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

			botonGuardar.addEventListener('click',function(){
				var boxCont=document.getElementById('box-tarjeta');
				var contenidoTarjeta=document.querySelector('.ingresar').value;
				var listaHija=document.createElement('h4');
				var listaTexto=document.createTextNode(contenidoTarjeta);
				listaHija.classList.add('lista');
				listaHija.appendChild(listaTexto);
				boxCont.appendChild(listaHija);
				//document.getElementById('ingresar-lista').value=" ";

			})
		})

	

		
 		
 		
 		
	})


	

}

function foco(id){
	var buscaFoco=document.getElementById(id);
	buscaFoco.classList.add('enfoco');
}





