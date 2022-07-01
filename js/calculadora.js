function montanteComposto(n1, n2, n2){
   
    n1 = document.getElementById("n1").value; /* valor inicial */
    n2 = document.getElementById("n2").value;/* quantidade de meses */
    n3 = document.getElementById("n3").value;  /* taxa de juros */
    const result = document.getElementById("resultado");

    let soma  = (n1 * (1 + (parseInt(n2) / 100)) ** n3).toFixed(2);
   /*let soma  = parseInt(n1) + parseInt(n2) + parseInt(n3);*/
   result.innerHTML = `Com o investimento inicial de R$ ${n1} em ${n2} meses, taxa de juros ${n3} ao mês o montante será de R$ ${soma}.`



   console.log(soma);
}


