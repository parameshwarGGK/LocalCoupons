import { OuterModule } from './outer.module';

describe('OuterModule', () => {
  let outerModule: OuterModule;

  beforeEach(() => {
    outerModule = new OuterModule();
  });

  it('should create an instance', () => {
    expect(outerModule).toBeTruthy();
  });
});
