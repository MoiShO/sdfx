// Info and Pagination
// The API will automatically paginate the responses. You will receive up to 20 documents per page.

// Each resource contains an info object with information about the response.

export interface Info {
    count: number,	// The length of the response
    pages: number,	// The amount of pages
    next: String, //(url)	Link to the next page (if it exists)
    prev: String  //(url)	Link to the previous page (if it exists)
}
