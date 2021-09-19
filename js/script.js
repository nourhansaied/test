
// JSON
// API ... URL  https://jsonplaceholder.typicode.com/posts

// var myHttp = new XMLHttpRequest()
// var posts = []
// myHttp.open("GET", 'https://jsonplaceholder.typicode.com/posts')

// myHttp.send()

// 
// myHttp.status = 200  suc 
// myHttp.status = 500 server down
// myHttp.status = 422


// myHttp.onreadystatechange = function () {
//     // console.log(myHttp.readyState);
//     if (myHttp.status == 200 && myHttp.readyState == 4) {
//         posts = JSON.parse(myHttp.response)
//         displayPosts()
//     }
// }



// function displayPosts() {
//     var cartona = ``;
//     for (var i = 0; i < posts.length; i++) {
//         cartona +=`      <div class="col-md-4">
//                 <h2>${posts[i].title}</h2>
//                 <p>${posts[i].body}</p>
//             </div>`
//     }

//     document.getElementById("rowBody").innerHTML = cartona
// }
// myHttp.readyState = 0
// myHttp.readyState = 1
// myHttp.readyState = 2
// myHttp.readyState = 3
// myHttp.readyState = 4



// GET
// POST
// PATCH
// PUT
// DELETE






var APIKEY = 'bdd10d2b8f52bc0a5320d5c9d88bd1ff';


var myHttp = new XMLHttpRequest();
var myHttp2 = new XMLHttpRequest();

var allMovies = []
var allTV = []

myHttp.open("GET", "https://api.themoviedb.org/3/trending/movie/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff");
myHttp2.open("GET", "https://api.themoviedb.org/3/trending/tv/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff");

myHttp.send();
myHttp2.send();




myHttp.onreadystatechange = function () {
    if (myHttp.status == 200 && myHttp.readyState == 4) {
        allMovies = JSON.parse(myHttp.response).results.splice(0,7)
        displayMovies(allMovies,'m')
    }
}


myHttp2.onreadystatechange = function () {
    if (myHttp2.status == 200 && myHttp2.readyState == 4) {
        allTV = JSON.parse(myHttp2.response).results.splice(0, 7)
        displayMovies(allTV,'t')
    }
}

function displayMovies(item, flag) {
    var cartona = ` <div class="col-md-3 align-self-center"><h2>Trending movies </h2></div>`;
    for (var i = 0; i < item.length; i++) {
        cartona += ` <div class="col-md-3">
          <div class="item" >
                <img src="https://image.tmdb.org/t/p/w500${item[i].poster_path}" alt="" class="w-100">
                <h2>${item[i].name ? item[i].name : item[i].title}</h2>
                <p>${item[i].overview.split(" ").splice(0,10).join(" ")}...</p>
                <span>${item[i].vote_average} </span>
                </div>
            </div>`
    }
    var item = ''
    item = flag == 'm' ? 'rowBody' : 'tvBody';
    document.getElementById(`${item}`).innerHTML = cartona

}

var myText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum fugiat recusandae distinctio cum vitae qui minima, tempora quisquam, corrupti harum impedit ad illo beatae? Sapiente soluta cumque doloribus nesciunt deleniti quisquam, sint itaque minus facilis ad consectetur laborum ex recusandae officiis tempora vitae molestias atque quasi! Quas in doloribus officia perspiciatis reprehenderit earum minima. Dolore officiis beatae fugit accusamus tempore sed repellendus iure architecto aliquid possimus quidem eos, adipisci alias voluptatem minus eius omnis facilis quaerat vitae deserunt ipsam hic maxime rem atque. Aperiam, suscipit dolorum, maiores praesentium optio, corrupti aspernatur pariatur ut voluptatibus fuga impedit similique minus consectetur!";


console.log(myText.substr(2,20));
