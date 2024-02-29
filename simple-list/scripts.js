const books = [ {
    "title": "Without Women",
    "author": "Haruki Murakami",
    "summary-text": "The stories are about men who have lost women in their lives, usually to other men or death.",
    "genre": "Anthology",
    "bookCover":"https://upload.wikimedia.org/wikipedia/en/e/e1/Onna_no_inai_otokotachi_%28Murakami_book%29.png",  
    "publishData": {
        "name":"Bungeishunjū",
        "year": 2014,
    },
    "rating": 4,
    "readingDate":{
        "start": "02-08-2024",
        "end": "02-28-24"
    }
},
{
    "title": "Another Book",
    "author": "Haruki Murakami",
    "summary": "in their lives, The s lost women  usually to other men or death.",
    "genre": "sportsMemoir",
    "bookCover":"https://images.bwbcovers.com/030/What-I-Talk-about-When-I-Talk-about-Running-Murakami-Haruki-9780307269195.jpg",  
    "publishData": {
        "name":"Random House",
        "year": 2004,
    },
    "rating": 5,
    "readingDate":{
        "start": "01-03-2024",
        "end": "03-06-24"
    }
} 
];


window.addEventListener('load', ()=>{
    init();
})

const init = function(){
    const bookShelf = document.getElementById("bookshelf");

    books.map(function(book){
        const bookItem = buildBookItem(book);
        bookShelf.innerHTML = bookShelf.innerHTML + bookItem;
    })
}


const buildBookItem = function(book){
    return `<div class="book-item">
        <img src=${book.bookCover}>
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        <p class="rating">${book.rating}</p>
        <div class="reading-date">
            <p>${book.readingDate.start}</p> 
            <p>${book.readingDate.end}</p>
        </div>
    </div>`
}