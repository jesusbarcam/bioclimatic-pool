import { PoolsModule } from './pools.module';

describe('PoolsModule', () => {
  let poolsModule: PoolsModule;

  beforeEach(() => {
    poolsModule = new PoolsModule();
  });

  it('should create an instance', () => {
    expect(poolsModule).toBeTruthy();
  });
});
