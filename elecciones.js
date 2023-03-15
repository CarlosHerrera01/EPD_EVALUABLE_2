// Obtener elementos del DOM
const select_este = document.getElementById('este');
const select_oeste = document.getElementById('oeste');

// Función para llenar la tabla con los datos correspondientes
function llenarTabla_este() {
const select_este = document.getElementById('este');
const select_oeste = document.getElementById('oeste');
var valor = select_este.value;
console.log(document.getElementById('base_lebron'));
if(document.getElementById('base_lebron').textContent == ""){
    document.getElementById('base_lebron').textContent = valor;
}else if(document.getElementById('base_giannis').textContent == ""){
    document.getElementById('base_giannis').textContent = valor;
}else if(document.getElementById('escolta_lebron').textContent == ""){
    document.getElementById('escolta_lebron').textContent = valor;
}else if(document.getElementById('escolta_giannis').textContent == ""){
    document.getElementById('escolta_giannis').textContent = valor;
}else if(document.getElementById('alero_lebron').textContent == ""){
    document.getElementById('alero_lebron').textContent = valor;
}else if(document.getElementById('alero_giannis').textContent == ""){
    document.getElementById('alero_giannis').textContent = valor;
}else if(document.getElementById('ala_lebron').textContent == ""){
    document.getElementById('ala_lebron').textContent = valor;
}else if(document.getElementById('ala_giannis').textContent == ""){
    document.getElementById('ala_giannis').textContent = valor;
}else if(document.getElementById('pivot_lebron').textContent == ""){
    document.getElementById('pivot_lebron').textContent = valor;
}else if(document.getElementById('pivot_giannis').textContent == ""){
    document.getElementById('pivot_giannis').textContent = valor;
}else{
    alerta();
}

}

function llenarTabla_oeste() {
    const select_este = document.getElementById('este');
    const select_oeste = document.getElementById('oeste');
    var valor = select_oeste.value;
    console.log(document.getElementById('base_lebron'));
    if(document.getElementById('base_lebron').textContent == ""){
        document.getElementById('base_lebron').textContent = valor;
    }else if(document.getElementById('base_giannis').textContent == ""){
        document.getElementById('base_giannis').textContent = valor;
    }else if(document.getElementById('escolta_lebron').textContent == ""){
        document.getElementById('escolta_lebron').textContent = valor;
    }else if(document.getElementById('escolta_giannis').textContent == ""){
        document.getElementById('escolta_giannis').textContent = valor;
    }else if(document.getElementById('alero_lebron').textContent == ""){
        document.getElementById('alero_lebron').textContent = valor;
    }else if(document.getElementById('alero_giannis').textContent == ""){
        document.getElementById('alero_giannis').textContent = valor;
    }else if(document.getElementById('ala_lebron').textContent == ""){
        document.getElementById('ala_lebron').textContent = valor;
    }else if(document.getElementById('ala_giannis').textContent == ""){
        document.getElementById('ala_giannis').textContent = valor;
    }else if(document.getElementById('pivot_lebron').textContent == ""){
        document.getElementById('pivot_lebron').textContent = valor;
    }else if(document.getElementById('pivot_giannis').textContent == ""){
        document.getElementById('pivot_giannis').textContent = valor;
    }else{
        alerta();
    }
    
    }



function alerta()
    {
    var mensaje;
    var opcion = confirm("Desea reiniciar?");
    if (opcion == true) {
        document.getElementById('base_lebron').textContent = "";
        document.getElementById('base_giannis').textContent = "";
        document.getElementById('escolta_lebron').textContent = "";
        document.getElementById('escolta_giannis').textContent = "";
        document.getElementById('alero_lebron').textContent = "";
        document.getElementById('alero_giannis').textContent = "";
        document.getElementById('ala_lebron').textContent = "";
        document.getElementById('ala_giannis').textContent = "";
        document.getElementById('pivot_lebron').textContent = "";
        document.getElementById('pivot_giannis').textContent = "";

        alert("!Comienza de nuevo¡")

	} else {
	    alert("!Gracias¡")
	}
	
}



