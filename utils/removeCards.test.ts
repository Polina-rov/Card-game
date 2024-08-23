import removeCards from "./removeCards";

test("delete 2 elements from Cards", () => {
    expect(removeCards(["0", "2"])).toEqual(["0", "2"]);
});
