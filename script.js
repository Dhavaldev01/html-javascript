var arr = [
    {name : "Petals of roses",image : "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Animals of town",image:"https://plus.unsplash.com/premium_photo-1694475119892-c5ee387ccdb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW5pbWFscyUyMG9mJTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"the croed of city",image:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlJTIwY3JvZWQlMjBvZiUyMGNpdHl8ZW58MHx8MHx8fDA%3D"},
    {name:"fruits of planet",image:"https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwb2YlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D"},
    {name:"orange peeled",image:"https://images.unsplash.com/photo-1484519018027-b0d71526f074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww"},
    {name:"web design",image:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"}
]


function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class= "box">
        <img class = ""cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })
    document.querySelector(".container").innerHTML =clutter;
}

function handleSearchFunctionality(){
    var input =document.querySelector("#searchinput");

    input
   .addEventListener("focus" , function(){
        document.querySelector(".overlay").style.display = "block";
    })
    input
    .addEventListener("blur" , function(){
        document.querySelector(".overlay").style.display = "none";
    })
    input
    .addEventListener("input" , function(){
        const filteredArray= arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class= "ri-search-line font-semibold mr-5"></i>
            <h3 class = "font-semibold">${obj.name}</h3>
            </div>`
        })
    document.querySelector(".searchdata").style.display ="block";
    document.querySelector(".searchdata").innerHTML = clutter;
   
    })
    
    input
    .addEventListener("blur" , function(){
        document.querySelector(".searchdata").style.display = "none";
    })
}

showTheCards();
handleSearchFunctionality();

