import yandexTranslate from "../src/js/get-film/yandex-translate/index";

test("adds 1 + 2 to equal 3", () => {

  expect(yandexTranslate(1, 3)).toBe(4);

});

module.exports = yandexTranslate;