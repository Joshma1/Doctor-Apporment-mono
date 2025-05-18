import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('DoctorsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/doctors/:id (GET) should get a doctor profile', async () => {
    const res = await request(app.getHttpServer()).get('/doctors/1');
    expect(res.status).toBe(200);
  });

  afterAll(async () => {
    await app.close();
  });
});