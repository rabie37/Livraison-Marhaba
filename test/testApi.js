// let server = require('../index');
// let chai = require('chai');
// let chaiHttp = require('chai-http');
// const { should } = require('chai');


// //Assertion Style
// chai.should();
// chai.use(chaiHttp);

// describe('USER API', () => {
//     describe("GET /api/user/list", () => {
//         it("it should GET all the users", (done) => {
//             chai.request(server)
//                 .get("/api/items")
//                 .set('Content-Type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.should.be.a("object");
//                     done();
//                 })
//         })
//         it("it should not GET all the users", (done) => {
//             chai.request(server)
//                 .get("/api/items")
//                 .set('Content-Type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .end((err, response) => {
//                     response.should.have.status(404);
//                     response.should.be.a("object");
//                     done();
//                 })
//         })
//     })


// });