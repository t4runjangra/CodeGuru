function getUserDetail(detailKey) {
    const user = {
        username: "srija_dev",
        email: "srija@example.com",
        city: "Hyderabad"
    };

    return detailKey in user ? user[detailKey] : "Detail not available";
}

function updateMarks() {
    const marks = {
        math: 70,
        english: 65,
        science: 80
    };

    const updatedMarks = {};

    for (let subject in marks) {
        updatedMarks[subject] = marks[subject] + 5;
    }

    return updatedMarks;
}

function modifyBook() {
    const book = {
        title: "The Mystery Box",
        author: "A. Writer",
        publishedYear: 2010,
        isAvailable: true
    };

    book.title = "The secret key";
    book.genre = "Thriller";

    delete book.isAvailable;
    delete book["author"];

    return book;
}

function createProduct(name, price, discount) {
    return {
        name,
        price,
        discount,

        calculateFinalPrice() {
            return this.price - this.discount;
        },

        updateDiscount(newDiscount) {
            this.discount = newDiscount;
            return this.calculateFinalPrice();
        }
    };
}

export default {
    getUserDetail,
    updateMarks,
    modifyBook,
    createProduct
};