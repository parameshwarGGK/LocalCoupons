import { InnerModule } from './inner.module';

describe('InnerModule', () => {
  let innerModule: InnerModule;

  beforeEach(() => {
    innerModule = new InnerModule();
  });

  it('should create an instance', () => {
    expect(innerModule).toBeTruthy();
  });
});
