import { expect } from "chai";
import { beforeEach, describe, it } from "mocha";
import { UserService } from "./../src/app/services/UserService";

describe("Custom sequelize usage", () => {
  it("should load UserService", () => {
    const us = new UserService();
  });
});
