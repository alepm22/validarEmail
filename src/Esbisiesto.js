function Esbisiesto(numero) {
    let resul = false
    if(numero % 100 == 0 && numero % 400 != 0)
    {
        resul = false
    }else{
        resul = true
    }
    if(numero % 4 == 0 && (numero % 100 != 0 || numero % 400 == 0))
    {
        resul = true
    }else{
        resul = false
    }
    
    return resul
  }
  
  export default Esbisiesto;
  