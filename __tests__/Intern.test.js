const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern')

test("creates intern name", () => {
    var internName = "Taylor";
    const testIntern = new Intern(internName);
    expect(testIntern.name).toBe(internName)

});


test("creates intern id", () => {
    var internName = "Taylor";
    var internId ="ABC123"
    const testIntern = new Intern(internName,internId);
    expect(testIntern.id).toBe(internId)

});

test("checking intern's email", () => {
    var internName = "Taylor";
    var internId ="ABC123"
    var internEmail = "Taylor@gmail.com"
    const testIntern = new Intern(internName,internId,internEmail);
    expect(testIntern.email).toBe(internEmail)

});


test("checking intern's getName", () => {
    var internName = "Taylor";
    const testIntern = new Intern(internName);
    expect(testIntern.getName()).toBe(internName)

});


test("checking intern's getId", () => {
    var internName = "Taylor";
    var internId ="ABC123"
    const testIntern = new Intern(internName,internId);
    expect(testIntern.getId()).toBe(internId)

});

test("checking intern's getEmail", () => {
    var internName = "Taylor";
    var internId ="ABC123"
    var internEmail = "Taylor@gmail.com"
    const testIntern = new Intern(internName,internId,internEmail);
    expect(testIntern.getEmail()).toBe(internEmail)

});

test("checking intern's getRole", () => {
    var internName = "Taylor";
    var internId ="ABC123"
    var internEmail = "Taylor@gmail.com"
    const testIntern = new Intern(internName,internId,internEmail);
    expect(testIntern.getRole()).toBe("intern")

});