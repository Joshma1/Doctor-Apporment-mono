import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('AvailabilityController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/availability/:doctorId (GET) should get availability slots', async () => {
    const res = await request(app.getHttpServer()).get('/availability/1');
    expect(res.status).toBe(200);
  });

  afterAll(async () => {
    await app.close();
  });
});