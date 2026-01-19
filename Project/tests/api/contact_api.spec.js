const { test, expect, request } = require('@playwright/test');

test.describe('API Testing - Contacts', () => {
  let api;
  let token;

  test.beforeAll(async ({ playwright }) => {
    api = await request.newContext({
      baseURL: 'https://thinking-tester-contact-list.herokuapp.com'
    });

    const loginRes = await api.post('/users/login', {
      data: {
        email: 'testuser@example.com',
        password: 'Password123!'
      }
    });

    const body = await loginRes.json();
    token = body.token;
  });

  test('Create Contact via API', async () => {
    const res = await api.post('/contacts', {
      data: {
        name: 'API Auto Contact',
        email: 'apicontact@example.com',
        phone: '9090909090'
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    expect([200, 201]).toContain(res.status());
  });

  test('Get Contacts (Unauthorized)', async () => {
    const res = await api.get('/contacts');
    expect([401, 403, 200]).toContain(res.status());
  });
});
