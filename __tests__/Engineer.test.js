const { test } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer')

test("creates Engineer name", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testEngineer.name).toEqual(expect.stringContaining('Taylor'));

});


test("creates Engineer id", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testEngineer.id).toEqual(expect.stringContaining('ABC123'));

});

test("checking Engineer's email", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testEngineer.email).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking Engineer's github", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'taylor.github');
    expect(testEngineer.github).toEqual(expect.stringContaining('taylor.github'));
})

test("checking Engineer's getName", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testEngineer.getName()).toEqual(expect.stringContaining('Taylor'));

});


test("checking Engineer's getId", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testEngineer.getId()).toEqual(expect.stringContaining('ABC123'));

});

test("checking Engineer's getEmail", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testEngineer.getEmail()).toEqual(expect.stringContaining('Taylor@gmail'));

});

test("checking Engineer's getRole", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'that one place');
    expect(testEngineer.getRole()).toEqual(expect.stringContaining('Engineer'));

});

test("checking Engineer's getGitHub", () => {
    const testEngineer = new Engineer('Taylor', 'ABC123', 'Taylor@gmail', 'taylor.github');
    expect(testEngineer.getGithub()).toEqual(expect.stringContaining('taylor.github'));
});