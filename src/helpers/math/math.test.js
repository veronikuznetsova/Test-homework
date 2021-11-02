import {usdcny} from './math';

describe ('math functionality', () => {

    test('check if usdcny(15) = "101.25 Chinese Yuan"', () => {
        expect(usdcny(15)).toBe("101.25 Chinese Yuan");
    });

    test('check if usdcny(15) = "101.25 Chinese Yuan"', () => {
        expect(usdcny(465)).toBe("3138.75 Chinese Yuan");
    });

});