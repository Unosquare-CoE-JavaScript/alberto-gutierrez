interface Controller {
  index(r: Request): Response;
  show(id: string): Response;
  create(data: Request): Response;
  delete(id: string): Response;
  update(id: string, data: Request): Response;
}

class PersonController implements Controller {
  index(r: Request): Response {
    throw new Error("Method not implemented.");
  }
  show(id: string): Response {
    throw new Error("Method not implemented.");
  }
  create(data: Request): Response {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Response {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: Request): Response {
    throw new Error("Method not implemented.");
  }
}
