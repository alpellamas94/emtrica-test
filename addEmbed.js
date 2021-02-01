
//Creation of the element
let elemento = document.createElement('div');

//Introducing child with embed video to the element
elemento.innerHTML = '<iframe width="200" height="300" src="https://www.youtube.com/embed/6RKd94duc4c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

//Styling the element
elemento.className = 'jagger';
elemento.style.width = '200';
elemento.style.height = '300';
elemento.style.borderTop = '1px solid #68b9c9';
elemento.style.position = 'fixed';
elemento.style.right = '2%';
elemento.style.bottom = '2%';
elemento.style.zIndex = '3';


//Adding the element to document
document.getElementsByTagName('body')[0].appendChild(elemento);
