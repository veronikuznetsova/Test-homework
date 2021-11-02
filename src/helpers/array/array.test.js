import {doArr} from './array';

describe ('math functionality', () => {

    let arr;
  
    beforeEach(() => {
      return arr = "Veronika Kuznetsova";
    });

    test('check if doArr "Robin Singh" = ["Robin", "Singh"]', () => {
        expect(doArr("Robin Singh")).toEqual(["Robin", "Singh"]);
    });

    test('check if doArr "I love arrays they are my favorite" = ["I", "love", "arrays", "they", "are", "my", "favorite"]', () => {
        expect(doArr("I love arrays they are my favorite")).toEqual(["I", "love", "arrays", "they", "are", "my", "favorite"]);
    });

});
