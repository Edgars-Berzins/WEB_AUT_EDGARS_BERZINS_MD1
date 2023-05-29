import selectableGridPage from "../pageObjects/selectable.page";

describe('Selectable', () => {
  context("Selectable grid scenarios", () => {
    beforeEach(() => {
      selectableGridPage.visit(); //visit "Selectable"
      selectableGridPage.gridSelector.click(); //select "Grid" tab
    });

    it("passes", () => {
      selectableGridPage.two.click();//Select "Two"
      selectableGridPage.four.click();//Select "Four"
      selectableGridPage.six.click();//Select "Six"
      selectableGridPage.eight.click();//Select "Eight"

      selectableGridPage.shouldBeHighlighted(selectableGridPage.two);//Validate "Two" IS selected
      selectableGridPage.shouldBeHighlighted(selectableGridPage.four);//Validate "Four" IS selected
      selectableGridPage.shouldBeHighlighted(selectableGridPage.six);//Validate "Six" IS selected
      selectableGridPage.shouldBeHighlighted(selectableGridPage.eight);//Validate "Eight" IS selected

      selectableGridPage.shouldNotBeHighlighted(selectableGridPage.one);//Validate "One" is NOT selected
      selectableGridPage.shouldNotBeHighlighted(selectableGridPage.three);//Validate "Three" is NOT selected
      selectableGridPage.shouldNotBeHighlighted(selectableGridPage.five);//Validate "Five" is NOT selected
      selectableGridPage.shouldNotBeHighlighted(selectableGridPage.seven);//Validate "Seven" is NOT selected
      selectableGridPage.shouldNotBeHighlighted(selectableGridPage.nine);//Validate "Nine" is NOT selected
    });
  });
});
