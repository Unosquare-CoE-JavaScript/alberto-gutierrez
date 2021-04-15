interface IService {
  model: Object;
  fn(): Response;
}

function tryService(service: IService) {
  service.fn();
}
