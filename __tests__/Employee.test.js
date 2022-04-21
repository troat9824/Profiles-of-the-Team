const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test("creates new ee name", () => {
    const employeeName = "Taylor";
    const testEmployee = new Employee(employeeName);
    expect(testEmployee.name).toBe(employeeName)

});


test("checking employee's Id", () => {
    const employeeName = "Taylor";
    const employeeId ="ABC123"
    const testEmployee = new Employee(employeeName,employeeId);
    expect(testEmployee.id).toBe(employeeId)

});

test("checking employee's email", () => {
    const employeeName = "Taylor";
    const employeeId ="ABC123"
    const employeeEmail = "Taylor@gmail.com"
    const testEmployee = new Employee(employeeName,employeeId,employeeEmail);
    expect(testEmployee.email).toBe(employeeEmail)

});


test("checking employee's getName", () => {
    const employeeName = "Taylor";
    const testEmployee = new Employee(employeeName);
    expect(testEmployee.getName()).toBe(employeeName)

});


test("checking employee's getId", () => {
    const employeeName = "Taylor";
    const employeeId ="ABC123"
    const testEmployee = new Employee(employeeName,employeeId);
    expect(testEmployee.getId()).toBe(employeeId)

});

test("checking employee's getEmail", () => {
    const employeeName = "Taylor";
    const employeeId ="ABC123"
    const employeeEmail = "Taylor@gmail.com"
    const testEmployee = new Employee(employeeName,employeeId,employeeEmail);
    expect(testEmployee.getEmail()).toBe(employeeEmail)

});

test("checking employee's getRole", () => {
    const employeeName = "Taylor";
    const employeeId ="ABC123"
    const employeeEmail = "Taylor@gmail.com"
    const testEmployee = new Employee(employeeName,employeeId,employeeEmail);
    expect(testEmployee.getRole()).toBe("Employee")

});