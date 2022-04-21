const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test("creates Employee name", () => {
    const testEmployee = new Employee('Taylor', 'ABC123', 'Taylor@gmail');
    expect(testEmployee.name).toEqual(expect.stringContaining('Taylor'));

});


test("creates Employee id", () => {
    const testEmployee = new Employee('Taylor', 'ABC123', 'Taylor@gmail');
    expect(testEmployee.id).toEqual(expect.stringContaining('ABC123'));

});

test("checking Employee's email", () => {
    const testEmployee = new Employee('Taylor', 'ABC123', 'Taylor@gmail');
    expect(testEmployee.email).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking Employee's getName", () => {
    const testEmployee = new Employee('Taylor', 'ABC123', 'Taylor@gmail');
    expect(testEmployee.getName()).toEqual(expect.stringContaining('Taylor'));

});


test("checking Employee's getId", () => {
    const testEmployee = new Employee('Taylor', 'ABC123', 'Taylor@gmail');
    expect(testEmployee.getId()).toEqual(expect.stringContaining('ABC123'));

});

test("checking Employee's getEmail", () => {
    const testEmployee = new Employee('Taylor', 'ABC123', 'Taylor@gmail');
    expect(testEmployee.getEmail()).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking Employee's getRole", () => {
    const testEmployee = new Employee('Taylor', 'ABC123', 'Taylor@gmail');
    expect(testEmployee.getRole()).toEqual(expect.stringContaining('Employee'));

});