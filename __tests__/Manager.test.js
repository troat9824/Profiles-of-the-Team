const { test } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager')

test("creates Manager name", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testManager.name).toEqual(expect.stringContaining('Taylor'));

});


test("creates Manager id", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testManager.id).toEqual(expect.stringContaining('ABC123'));

});

test("checking Manager's email", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testManager.email).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking Manager's office number", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 123);
    expect(testManager.officeNumber).toBeGreaterThan(0);
})

test("checking Manager's getName", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testManager.getName()).toEqual(expect.stringContaining('Taylor'));

});


test("checking Manager's getId", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testManager.getId()).toEqual(expect.stringContaining('ABC123'));

});

test("checking Manager's getEmail", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testManager.getEmail()).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking Manager's getRole", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testManager.getRole()).toEqual(expect.stringContaining('Manager'));

});

test("checking Manager's getOfficeNumber", () => {
    const testManager = new Manager('Taylor', 'ABC123', 'Taylor@gmail', 123);
    expect(testManager.getOfficeNumber()).toBeGreaterThan(0);
});