class STDService extends BaseService {
  constructor(liskovModel) {
    super(liskovModel);
    this.model = liskovModel;
  }
  delete(id) {}
  update(id, data) {
    let model = this.checkIfExist(id);
    model.update(data);
  }
  create(data) {}
  show(id) {}
  read(filter) {}
}

class SomeController extends Controller {
  index(request, response, next) {
    const service = new STDService(new Something());
    return service.read(request.toArray());
  }
}
