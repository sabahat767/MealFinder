
function searchRecipe(){
    var search  =  document.getElementById('search');
    //console.log(search.value) 
    var searchValue=search.value
   if(search.value==''){
       alert("please enter a search value")
   }
else{
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api2)
    /// api call
    
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
    .then(res => res.json())
    .then(function(data) {
       var row2  =  document.getElementById('row2');
       row2.innerHTML=''
       var row  =  document.getElementById('row');
        row.innerHTML=''
        // Your code for handling the data you get from the API
       // console.log(data.meals)
        const recipesArr = data.meals; //data ko ek variable m rhkwadia
    //    var SearchResult=document.createElement('h2')
    //    SearchResult.style.color='white'
    //    SearchResult.style.margin='auto'
       
    //    SearchResult.innerHTML="your result is:"
    //    row.appendChild(SearchResult)
      
        for(let i = 0; i< recipesArr.length; i++){
           
            var div = document.createElement('div')
      
        var img=document.createElement('img');
        // div.className = 'box';
        img.className='box'
        //img.onclick='detail()';
        img.setAttribute('src',recipesArr[i].strMealThumb)
      //var text=  img.setAttribute('title',recipesArr[i].strMeal)
       var text=document.createElement('p')
      text.style.position='fixed'
       text.innerHTML=recipesArr[i].strMeal
      
         img.appendChild(text)
        div.appendChild(img);
        
        row.appendChild(div);
       
    
        }
    
    
    
    
    })
   
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });

    search.value = '';
}
    }
   



    function randomRecipies(){
       
    var api = "https://www.themealdb.com/api/json/v1/1/random.php";
    console.log(api)
    

    fetch(api)
    .then(res1 => res1.json())
    .then((data1) => {
        console.log(data1)
        var row1=document.getElementById('row')
        row1.innerHTML='' //khali krdia take phle jo b ho search m wo clear hojae screen s

        var row2=document.getElementById('row2')
        row2.innerHTML='' //khali krdia take phle jo b ho random search m wo clear hojae screen s
    var heading=document.createElement('h1')
    var imageDiv=document.createElement('div')
    var image=document.createElement('img')

    const recipeArr = data1.meals

    image.className='box';
    image.className='img';
    image.setAttribute('src',recipeArr[0].strMealThumb)  
   imageDiv.appendChild(image)

    heading.innerHTML=recipeArr[0].strMeal
    heading.style.color='white';

    row2.appendChild(heading)
    row2.appendChild(imageDiv)

      var category =  document.createElement('div')
      category.className='categ';
     category.innerHTML=recipeArr[0].strCategory +"<br>"+recipeArr[0].strArea
     row2.appendChild(category)

     var method =  document.createElement('div')
     method.innerHTML=recipeArr[0].strInstructions
     method.style.color='white'
     method.style.margin='auto'
     method.style.width='500px'
     row2.appendChild(method)

     var ingred =  document.createElement('h1')
     ingred.innerHTML='Ingredients';
     ingred.style.color='white'
     row2.appendChild(ingred)
    //  for(var i=1;i<=20;i++){

     var ingredientsDiv=document.createElement('div')
     ingredientsDiv.style.width='50%'
     ingredientsDiv.style.margin='auto'
     var ingredients=document.createElement('div')
     ingredients.style.display='inline-block'
     ingredients.className='ing'
     ingredients.innerHTML=recipeArr[0].strIngredient1
     ingredientsDiv.appendChild(ingredients)
     row2.appendChild(ingredientsDiv)
  
     var ingredients2=document.createElement('div')
     ingredients2.style.display='inline-block'
     ingredients2.className='ing'
     ingredients2.innerHTML=recipeArr[0].strIngredient2
     ingredientsDiv.appendChild(ingredients2)
     row2.appendChild(ingredientsDiv)
    //  }
    

   

    

    })
    

    }