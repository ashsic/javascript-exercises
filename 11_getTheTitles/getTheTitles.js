const getTheTitles = function(library) {
    const titles = [];
    library.forEach((book) => {
        titles.push(book.title);
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
