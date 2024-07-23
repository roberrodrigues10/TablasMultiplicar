document.addEventListener('DOMContentLoaded', function(){
   //alert('Hola')
   let tabla = [];
   let multiplo = [];
   let  resultado;
   let  numerotabla;
   let  numeromultiplo;
   let  iteracionTabla;
   let  iteracionMultiplo;
   let printResultado="";


   for(iteracionTabla=0;iteracionTabla<1;iteracionTabla++){
    numerotabla = iteracionTabla + 2;
    multiplo=[];

    for(iteracionMultiplo=0;iteracionMultiplo<25;iteracionMultiplo++){
        numeromultiplo = iteracionMultiplo + 1;
        resultado = numerotabla * numeromultiplo;
        multiplo.push(resultado);
       }
       tabla.push(multiplo);    
   }

   for(iteracionTabla=0;iteracionTabla<1;iteracionTabla++){
    numerotabla = iteracionTabla + 2;
    printResultado+= '    <div class="card" style="width: 14rem; margin-left: 5px;">'
    printResultado+= '    <div class="card-body">'

    printResultado+= '    <table class="table">' 
    
    for(iteracionMultiplo=0;iteracionMultiplo<25;iteracionMultiplo++){
        numeromultiplo = iteracionMultiplo + 1;
        printResultado+= '<tr><td>'+numerotabla+' X '+numeromultiplo+' = </td><td>' +tabla[iteracionTabla][iteracionMultiplo]+'</td></tr>';

       }
       printResultado+= '    </table>'
       printResultado+= '    </div>'
       printResultado+= '    </div>'
   }
    document.getElementById('tabla').innerHTML = printResultado 

});