// instrucciones 
/*1. Staircase
- Write a function that prints a staircase according to the specs bellow
- Input: n Where 0 < n <= 100
- Output: A staircase of any special symbol (#, @, *, &, !, etc) 
    right aligned composed of height n and width n

4 
     #
    ##
   ###
  ####
  */ 

// imprimir una escalera al cielo xD

function imprimirEscalera(altura, ancho) {
    // Verificar si la altura está dentro del rango
    if (altura <= 0 || altura > 100) {
      console.log("La altura debe estar entre 1 y 100.");
      return;
    }
  
    // Verificar si el ancho está dentro del rango
    if (ancho <= 0 || ancho > 100) {
      console.log("El ancho debe estar entre 1 y 100.");
      return;
    }
  
    // Imprimir la escalera al cielo xD
    for (let i = 0; i < altura; i++) {
      let escalon = "";
      for (let arrobas = 0; arrobas < ancho; arrobas++) {
        if (arrobas >= ancho - i - 1) {
          escalon += "@";
        } else {
          escalon += " ";
        }
      }
     console.log(escalon);
    }
  }
  imprimirEscalera(10, 20);


  // Libro de hechizos 
  /* 
  2. Book
- You are reading a book and want to get to a certain page number inside that book since you forgot where you left it, count how many page turns you have to do untill you reach the desired page.
    - Take note that opening the book doesn't count as a page turn, and when opened, the right side of the page is always page 1.
    - When flipped, page 2 and 3 are in view, so that's pageTurns = 1, when flipped again pages 4 and 5 are in view, so that's pageTurns = 2
    - Every page, except first and last are always printed on both sides.
    2. The book is n pages long and you want to turn to page p
    3. Input: 
        - n: number of pages in book
        - p: page you want to get to
        - Constraints: 1 <= n <= 10^5, 1 <= p <= n
    4. Output: number of page turns

Sample input 
6, 2

Sample output
1
  */

function turnsPages(pageTotal, pagesNumber) {
    
    if(pageTotal >= 1 || pageTotal < 150){
        console.log("El numero total de paginas debe estar entre 1 y 150 ");
        return;        
    }
    if (pagesNumber >= 2 || pagesNumber < 75){
        console.log("El numero de paginas vistas esta entre 2 y 75");
        return;
    }
    for (let pages = 0; pages < pageTotal; pages++){
        let pagina = "";
    for (let n = 0; n < pagesNumber; n++){
    if (pages >= pageTotal) {
        if (pages >= pagesNumber - pages - 1) {
        } else {
          pagina += " ";
        }
        
    }
    }
    console.log(pagina);
    }
}
turnsPages(150,85); 



/* EJERCICIO 3
3. Birds in migration
- You are watching birds migrate in the country, taking notes on the different types of birds you encounter by setting their ID on an array. If more than 1 type has been spotted that maximum amount, return the smallest of their IDs.
    - Input: ```arr[4,4,2,2,3]``` 
        - Constrints: 2 < arr <= 2x10^5, where ```n``` inside the array is 0 < n <= 5
    - Output: Type: 2
        - Type 9 and 2 have two ocurrences (the maximum in the array), but 2 is the smallest of their IDs, so return 'Type: 2'


Sample input:

[1,4,4,2,1,1,1]

Sample output:

Type: 1
*/ 