let band=0;
function change()
{
    let input=document.getElementById("input").value;
    
    switch(input)
    {
        case "vista1":
            window.open("index.html","_self");
            break;
        case "vista2":
            window.open("vista2.html","_self");
            break;
        case "vista3":
            window.open("vista3.html","_self");
            break;

        default:

            if(band!=1)
            {
            
            document.getElementById("input").style.backgroundColor="red";
           document.getElementById("error").innerHTML+="<p>Error,la vista no existe.Favor de remitirse al combobox y visualizar las posibles inputs</p>";
           document.getElementById("button-error").innerHTML+="<button>eliminar mensaje de error </button>";
            }
           band=1; 
           break;
                
        
    }


};
function delete_()
{
    document.getElementById("input").style.backgroundColor="white";
   let error= document.getElementById("error");
    error.removeChild(error.childNodes[0]);
    error=document.getElementById("button-error");
    error.removeChild(error.childNodes[0]);
    band=0;
};
