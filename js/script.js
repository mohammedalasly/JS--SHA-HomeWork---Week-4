//We include everything inside an anonymous function so all this
//code will exist in the function's local scope (ie. NOT in the
//global scope).

document.getElementsByTagName("body")[0].onload = function () {

    //Step 1. // Declaring an array that contains 10 strings.. 

    let booksIds = [
        "great_expectations",

        "our_mutual_friend",

        "david_copperfield",

        "bleak_house",

        "little_dorrit",

        "oliver_twist",

        "nicholas_nickleby",

        "dombey_and_son",

        "the_pickwick_papers",

        "the_selected_letters_of_charles_dickens"
    ]

    //Step 2.//Create a basic html file called index.html
    // and use it to load the js file, confirm the console.log show the array. 
    //(This is for debugging and making sure everything is in order. Delete it later when you're done :))

    // console.log(booksIds);



    //Step 3.//create a function that generate a (ul) with (li) elements,
    //for each book ID in the array using a for loop.

    let ulElement = document.createElement("ul");

    document.getElementsByTagName("body")[0].appendChild(ulElement);

    let displayBookIds = function (bookIdsArray) {
        for (let i = 0; i < bookIdsArray.length; i++) {

            let element = document.createElement("li");

            element.innerHTML = bookIdsArray[i];

            ulElement.appendChild(element);

        }
    };


    displayBookIds(booksIds);

    //Step 4.//Create an Object containing / information / for each book.
    //Each item (object) in this object should have the book ID you thought up in point 1 as a key,
    // and it should have at least the following fields: title, language and author.
    let books = {
        "great_expectations": {
            title: "Great Expectations",
            language: "English",
            author: ["Charles Dickens"]
        },
        "our_mutual_friend": {
            title: "Our Mutual Friend",
            language: "English",
            author: ["Charles Dickens"]
        },
        "david_copperfield": {
            title: "David Copperfield",
            language: "English",
            author: ["Charles Dickens"]
        },
        "bleak_house": {
            title: "Bleak House",
            language: "English",
            author: ["Charles Dickens"]
        },
        "little_dorrit": {
            title: "Little Dorrit",
            language: "English",
            author: ["Charles Dickens"]
        },
        "oliver_twist": {
            title: "Oliver Twist",
            language: "English",
            author: ["Charles Dickens"]
        },
        "nicholas_nickleby": {
            title: "Nicholas Nickleby",
            language: "English",
            author: ["Charles Dickens"]
        },
        "dombey_and_son": {
            title: "Dombey And Son",
            language: "English",
            author: ["Charles Dickens"]
        },
        "the_pickwick_papers": {
            title: "The PickWick Papers",
            language: "English",
            author: ["Charles Dickens"]
        },
        "the_selected_letters_of_charles_dickens": {
            title: "The Selected Letters Of Charles Dickens",
            language: "English",
            author: ["Charles Dickens"]
        }
    };




    //Stp 5.// Now change the function you used to display the book ID's in a list
    // to take the actual information about the book from the object and display that.
    //let displayBooks = function (booksObject)....
    //Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

    let displayBooks = function (booksObject) {

        let liElements = ulElement.getElementsByTagName("li");
        for (let i = 0; i < liElements.length; i++) {

            let id = liElements[i].innerHTML;
            let book = booksObject[id];
            let title = book["title"];
            let language = book["language"];
            let author = book["author"];
            let titleElement = document.createElement("h2");
            titleElement.innerHTML = title;
            titleElement.setAttribute("class", "title");
            let languageElement = document.createElement("p");
            languageElement.innerHTML = "Language: " + language;
            languageElement.setAttribute("class", "language");
            let authorElement = document.createElement("p");
            authorElement.setAttribute("class", "author");
            authorElement.innerHTML = "by " + author.join(", ");

            liElements[i].innerHTML = "";
            liElements[i].appendChild(titleElement);
            liElements[i].appendChild(languageElement);
            liElements[i].appendChild(authorElement);

            liElements[i].setAttribute("id", id);
        }
    };

    displayBooks(books);


    //Step 6.// don't forget to create 3 folders which are /css-js-images/ 
    //and linke all of them with your index.html file


    //Step 7.//construct a new Object which has as keys the bookId's again,
    // and as value the ( Path ) to the image source...
    //**//Note: first of all (Download book covers for each book)
    let imagePaths = {
        "great_expectations": "./images/great_expectations.jpg",

        "our_mutual_friend": "./images/our_mutual_friend.jpg",

        "david_copperfield": "./images/david_copperfield.jpg",

        "bleak_house": "./images/bleak_house.jpg",

        "little_dorrit": "./images/little_dorrit.jpg",

        "oliver_twist": "./images/oliver_twist.jpg",

        "nicholas_nickleby": "./images/nicholas_nickleby.jpg",

        "dombey_and_son": "./images/dombey_and_son.jpg",

        "the_pickwick_papers": "./images/the_pickwick_papers.jpg",

        "the_selected_letters_of_charles_dickens": "./images/the_selected_letters_of_charles_dickens.jpg"
    };

    //Then write a function which places an image at the corresponding li element
    let addImagePaths = function (paths) {
        let liElements = ulElement.getElementsByTagName("li");

        // Now loop over these entries

        for (let i = 0; i < liElements.length; i++) {
            let id = liElements[i].getAttribute("id");
            let imageElement = document.createElement("img");
            imageElement.setAttribute("src", paths[id]);
            imageElement.setAttribute("alt", "book cover");
            imageElement.setAttribute("class", "cover");
            liElements[i].appendChild(imageElement);
        }
    };
    addImagePaths(imagePaths);//finally you can see your images on your own page!
};