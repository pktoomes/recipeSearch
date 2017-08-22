var bttn = document.getElementById('searchBttn');

function clearResults(){
  let results = document.getElementById('results');
  results.innerHTML = "";
}

bttn.addEventListener("click", function(){
  console.log('click');
  let search = document.getElementById('mySearch').value;
  let url = "http://crossorigin.me/http://www.recipepuppy.com/api/?q=" + search;

  clearResults();

    fetch(url)
    .then(function (response){
      return response.json();
        //
    })
    .then(function(response){
      for(let i = 0; i < response.length; i++){
        let result = document.getElementById('results');
        let food = response.results[i];
        if(food.thubmnail ===""){
          let templ = `
          <div class = "foodResult">
          <img src = "http://via.placeholder.com/350x150" class ="image">
          <div class = "foodText">
            <a href = "${food.href}"><p>${food.title}</p></a>
            </div>
            </div>`;
            result.innerHtml += tmpl
        }
        else{
          let templ = `
          <div class = "foodResult">
          <img src = "${food.thumbnail}" class ="image">
          <div class = "foodText">
            <a href = "${food.href}"><p>${food.title}</p></a>
            </div>
            </div>`;
            result.innerHtml += tmpl
        }



      }

    })
  });
  //  .catch(function(err){
    //  console.log("fetch error", err);
//    });
  //}
//}
//, false);
