const { test } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Intern = require('../lib/intern')

test("creates intern name", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.name).toEqual(expect.stringContaining('Taylor'));

});


test("creates intern id", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.id).toEqual(expect.stringContaining('ABC123'));

});

test("checking intern's email", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.email).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking intern's school", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.school).toEqual(expect.stringContaining('that one place'));
})

test("checking intern's getName", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.getName()).toEqual(expect.stringContaining('Taylor'));

});


test("checking intern's getId", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.getId()).toEqual(expect.stringContaining('ABC123'));

});

test("checking intern's getEmail", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.getEmail()).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking intern's getRole", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.getRole()).toEqual(expect.stringContaining('Intern'));

});

test("checking intern's school", () => {
    const testIntern = new Intern('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testIntern.getSchool()).toEqual(expect.stringContaining('that one place'));
});