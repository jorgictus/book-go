import Books, {
  initialState,
  changeFilter,
  changePage,
  clearData,
  clearBookData
} from "./Books.slice";

describe("Books reducer", () => {
  it("should change Filter", () => {
    const data = { q: "any book to search", startIndex: 1, maxResults: 10 };
    const action = changeFilter(data);
    expect(Books(initialState, action)).toEqual({
      ...initialState,
      filters: {
        ...data,
      },
    });
  });

  it("should change Page", () => {
    const data = { currentPage: 2 };
    const action = changePage(data);

    expect(Books(initialState, action)).toEqual({
      ...initialState,

      pagination: {
        ...data,
      },
    });
  });

  it("should clear data", () => {
    const action = clearData();

    expect(Books(initialState, action)).toEqual({
      ...initialState,
    });
  });

  it("should clear BookData ", () => {
    const action = clearBookData();

    expect(Books(initialState, action)).toEqual({
      ...initialState,
    });
  });

  
});
