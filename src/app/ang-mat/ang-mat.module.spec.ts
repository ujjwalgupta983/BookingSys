import { AngMatModule } from './ang-mat.module';

describe('AngMatModule', () => {
  let angMatModule: AngMatModule;

  beforeEach(() => {
    angMatModule = new AngMatModule();
  });

  it('should create an instance', () => {
    expect(angMatModule).toBeTruthy();
  });
});
