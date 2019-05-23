const chai = require("chai");
const chaiHttp = require("chai-http");

const { app, runServer, closeServer } = require("../server");

const expect = chai.expect;

chai.use(chaiHttp);

describe("movie data", function () {
    before(function () {
        return runServer();
    });

    after(function () {
        return closeServer();
    });

    //GET test
    it("should GET movie data", function () {
        return chai
            .request(app)
            .get("/3api/playing")
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
    });

    it("should GET movie data", function () {
        return chai
            .request(app)
            .get("/3api/upcoming")
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
    });

    it("should GET movie data", function () {
        return chai
            .request(app)
            .get("/3api/popular")
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
    });

    it("should GET movie data", function () {
        return chai
            .request(app)
            .get("/3api/top")
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
    });

    it("should GET movie genres", function () {
        return chai
            .request(app)
            .get("/3api/genres")
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
    });
});