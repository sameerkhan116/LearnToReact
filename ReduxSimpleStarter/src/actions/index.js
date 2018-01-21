export function selectBook(book) {
    // select book is an actioncreator
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}