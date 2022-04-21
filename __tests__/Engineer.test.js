const { test } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer')

test("creates engineer name", () => {
    const engineerName = "Taylor";
    const testEngineer = new Engineer(engineerName);
    expect(testEngineer.name).toBe(engineerName)

});


test("creates engineer id", () => {
    const engineerName = "Taylor";
    const engineerId ="ABC123"
    const testEngineer = new Engineer(engineerName,engineerId);
    expect(testEngineer.id).toBe(engineerId)

});

test("checking engineer's email", () => {
    const engineerName = "Taylor";
    const engineerId ="ABC123"
    const engineerEmail = "Taylor@gmail.com"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail);
    expect(testEngineer.email).toBe(engineerEmail)

});

test("checking engineer's gitHub", () => {
    const engineerName = "Taylor";
    const engineerId ="ABC123"
    const engineerEmail = "Taylor@gmail.com"
    const engineerGithub = "taylor.github"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail,engineerGithub);
    expect(testEngineer.engineerGithub).toBe(engineerGithub)
})

test("checking engineer's getName", () => {
    const engineerName = "Taylor";
    const testEngineer = new Engineer(engineerName);
    expect(testEngineer.getName()).toBe(engineerName)

});


test("checking engineer's getId", () => {
    const engineerName = "Taylor";
    const engineerId ="ABC123"
    const testEngineer = new Engineer(engineerName,engineerId);
    expect(testEngineer.getId()).toBe(engineerId)

});

test("checking engineer's getEmail", () => {
    const engineerName = "Taylor";
    const engineerId ="ABC123"
    const engineerEmail = "Taylor@gmail.com"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail);
    expect(testEngineer.getEmail()).toBe(engineerEmail)

});

test("checking engineer's getRole", () => {
    const engineerName = "Taylor";
    const engineerId ="ABC123"
    const engineerEmail = "Taylor@gmail.com"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail);
    expect(testEngineer.getRole()).toBe("Engineer")

});

test("checking engineer's gitHub", () => {
    const engineerName = "Taylor";
    const engineerId ="ABC123"
    const engineerEmail = "Taylor@gmail.com"
    const engineerGithub = "taylor.github"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail,engineerGithub);
    expect(testEngineer.getGithub()).toBe(engineerGithub)
});