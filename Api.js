let imgIconSearch = document.getElementById("imgIconSearch");
let mainSearchBar = document.querySelector("#mainSearchBar")
let image4dot = document.getElementById("image4dot");
let timeRelated = document.querySelector("#timeRelated")
let main = document.querySelector("#main")
let form = document.getElementById("form");
let menu = document.querySelector("#menu");
let searchBar = document.querySelector("#searchBar")
let btn_for_search = document.querySelectorAll(".btn_for_search");

let contData = document.getElementById("contData");
// here api 
const api_key = "AIzaSyBKdZAKB0UhsKpGhaGuhdhvSK7E20dRI1g";
const cx = "6012b95f04c67305b"


// end

// this is for hidding toggle the 4 dot 
// google.js hide show btn card
if (image4dot) {
    image4dot.addEventListener("click", () => {

        menu.classList.toggle("hide_menu_show")
    })
}
// end
if (imgIconSearch) {
    let mas = "ashif"
    imgIconSearch.addEventListener("click", fun1)
}
else {
    console.log("No it is does not worked here btn of icon line of imageIcon")
}

function fun1(tempVal) {
    let Query = mainSearchBar.value;

    console.log(Query)
    // mainSearchBar.setAttribute("value", searchBar.value);
    let url = `http://www.googleapis.com?key=${api_key}&cx=${cx}&q=${Query}`;
    url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cx}&q=${Query}`
    console.log(url)
    fetch(url).then(res => res.json()).then((data) => {
        console.log(data)
        let str = '';
        item = data.items;
        timedata = data.searchInformation;
        console.log(timedata)
        timeRelated.innerHTML = ` <p>About ${timedata.totalResults} results (${timedata.searchTime} seconds)
        </p><br>
        <h3>Did you mean:${Query}</h3>`;
        item.forEach((element, index) => {
            str += `
            <br>
                <a id="link_tag" href=${element.link}>${element.displayLink}</a>
                <h1>
                    <a href=${element.link}> ${element.title}</a>
                </h1>
                <p id="desc">
                   ${element.snippet}
                </p>
                <p>
                    <a href=${element.displayLink}>more result from see</a>
                </p>`
        });

        timeRelated.insertAdjacentHTML("afterend", str);
    })

}

// here we going redierect page 

if (btn_for_search[0]) {
    btn_for_search[0].addEventListener("click", () => {
        let Query = searchBar.value;
        console.log(Query)
        fun1(Query)
    })
}
