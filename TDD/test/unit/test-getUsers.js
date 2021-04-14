const expect = require("chai").expect;
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const request = require("request");
const { getUsers } = require("../../services/Users");
chai.should();
chai.use(sinonChai);

let spy;
const data = { users: ["a1", "a2"] };
describe("User requests tests", () => {
  beforeEach(() => {
    spy = sinon.spy();
    sinon.stub(request, "get").callsFake((url, callback) => {
      callback({}, { body: JSON.stringify(data) });
    });
  });
  it("is able to get users", () => {
    getUsers();
  });
  it("Can call the callback", () => {
    getUsers(spy);
    spy.should.have.been.calledOnce;
  });
  it("Calls the correct url", () => {
    getUsers(spy);
    request.get.should.have.been.calledOnceWith(
      "https://someurl.com/api/v1/users",
    );
  });
  it("Returns the correct data", () => {
    getUsers(spy);
    spy.should.have.been.calledOnceWith(data);
  });
  afterEach(() => {
    sinon.restore();
  });
});
