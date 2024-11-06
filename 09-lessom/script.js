const favoriteBooks = [
	{
		id: 1,
		title: "Head First JavaScript Programming",
		author: "Eric Freeman",
		price: 29.99,
		genre: "Programming",
	},
	{
		id: 2,
		title: "You Don’t Know JS",
		author: "Kyle Simpson",
		price: 39.99,
		genre: "Programming",
	},
	{
		id: 3,
		title: "JavaScript: The Definitive Guide",
		author: "David Flanagan",
		price: 49.99,
		genre: "Programming",
	},
	{
		id: 4,
		title: "Lord of the Rings",
		author: "J.R.R. Tolkien",
		price: 29.99,
		genre: "Fantasy",
	},
	{
		id: 5,
		title: "The Witcher",
		author: "Andrzej Sapkowski",
		price: 19.99,
		genre: "Fantasy",
	},
];

favoriteBooks.forEach((book, index) => {
    console.log(book.author, index);
})
favoriteBooks.forEach((book) => {
    if (book.price < 30) {
        console.log(`${book.title} - ${book.price}`);
    }
})

const bookTitles = favoriteBooks.map((book) => book.title)
console.log(bookTitles);

const programmingBooks = favoriteBooks.filter((book) => book.genre === 'Programming')

// console.log(programmingBooks);


const processBook = (books, callback) => {
	for (let i = 0; i < books.length; i++) {
		const book = books[i];
		callback(book);
	}
};

const logAuthor = (book) => {
	console.log(book.author);
};

const logCheapBooks = (book) => {
    if (book.price < 30) {
        console.log(`${book.title} - ${book.price}`);
    }
};

numbers = [1, 43, 23, 3, 32]
numbers.sort((a, b) => a - b)
console.log(numbers);

favoriteBooks.sort((prev, next) => prev.price - next.price)
console.log(favoriteBooks);

// processBook(favoriteBooks, logAuthor)
// processBook(favoriteBooks, logCheapBooks)

// favoriteBooks.forEach(logAuthor)
// favoriteBooks.forEach(logCheapBooks)