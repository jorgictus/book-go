import Favorite, {
  initialState,
  changePage,
  clearData,
  setBookAsFavorite,
} from "./Favorites.slice";

describe("Books reducer", () => {
  it("should change Page", () => {
    const data = { currentPage: 2 };
    const action = changePage(data);

    expect(Favorite(initialState, action)).toEqual({
      ...initialState,
      pagination: {
        ...data,
      },
    });
  });

  it("should clear data", () => {
    const action = clearData();

    expect(Favorite(initialState, action)).toEqual({
      ...initialState,
    });
  });

  it("should clear BookData ", () => {
    const action = setBookAsFavorite(true);

    expect(Favorite(initialState, action)).toEqual({
      ...initialState,
      isFavorite: true,
    });
  });
});
