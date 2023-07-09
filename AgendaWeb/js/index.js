let id = 0;



/* Funcion para agregar, y la creacion del boton eliminar y editar */
function ramdom(){
 

    /* Aumento del id */
    id += 1



    let comp1 = document.getElementById('dato1').value
    let comp2 = document.getElementById('dato2').value

    if((comp1 == '') && (comp2 == '')){

        alert('Debes ingresar valores')

    }else{

        /* Boton eliminar */
        let eliminar = document.createElement('input')
        eliminar.setAttribute('type','button');
        eliminar.setAttribute('value','Eliminar')/* Atributos de los botones */
        eliminar.setAttribute('id',`${id}`)
        eliminar.setAttribute('onclick',`eliminar(this)`)
        eliminar.setAttribute('class','btn btn-danger')

                    
        
        
        /* Boton editar */
        let editar = document.createElement('input')
        editar.setAttribute('type','button');
        editar.setAttribute('value','editar')
        editar.setAttribute('id',`${id}`) 
        editar.setAttribute('onclick','editar(this)')
        editar.setAttribute('class','btn btn-warning')


        /* Creador de la nueva fila */
        let tab = document.getElementById('agregar').insertRow(-1);
        tab.setAttribute('id',`${id}`)
        tab.setAttribute('class','table table-borderless')

        let col = tab.insertCell(0);
        let col2 = tab.insertCell(1) 


        tab.insertCell(2).appendChild(eliminar);   
        tab.insertCell(3).appendChild(editar);  

        col.innerHTML = document.getElementById('dato1').value
        col2.innerHTML = document.getElementById('dato2').value


        

        limpiar()


    }

    
}

/* Funcio limpiar */

function limpiar(){
    dato1.value = ''
    dato2.value = ''
}


/* Funcio Eliminar */

function eliminar(input){
    let id = input.id
    let rwo = document.getElementById(id)
    rwo.remove()
}



/* Funcion Editar */
function editar(input){
  let id = input.id
  let celda = document.getElementById(id)

  let ingreso = prompt('Ingresa 1 para Prioridades, y 2 para Importancia')
  if(ingreso == '1'){


    let mensaje1 = celda.cells[0]
    mensaje1.innerHTML = prompt(`ingresa el nuevo dato`)

  }else if(ingreso == '2'){

    let mensaje2 = celda.cells[1]
    mensaje2.innerHTML = prompt('Ingresa el nuevo dato')

  }else{

    alert('No es un valor valido')
  }

}



