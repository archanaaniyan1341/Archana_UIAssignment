import { calculatePoints } from "../utils/rewardCalculator";

test('calculate points correctly for amount above $100', () => {
    expect(calculatePoints(120)).toBe(90);
});

test('calculate points correctly for amount between $50 and $100',() => {
    expect(calculatePoints(75)).toBe(25);
});

test('calculate points correctly for amount less than $50',() => {
    expect(calculatePoints(45)).toBe(0);
});