const { test, expect } = require('@playwright/test')

test('Mock GET /posts response', async ({ page }) => {
  // 1. Mock the API
  await page.route('https://jsonplaceholder.typicode.com/posts', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([{ title: 'Mocked Post', id: 1 }]),
    });
  });

  // 2. Open the page that calls the API
  await page.goto('https://jsonplaceholder.typicode.com/posts');

  // 3. Validate the fake data
  const text = await page.locator('body').innerText();
  await expect(text).toContain('Mocked Post');
});



// 1) GET - Fetch all data

test('Get', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total Posts:", body.length);
    expect(body.length).toBeGreaterThan(0);
});

// 2) POST - Create a new post..


test('POST: Create a post with Riyaz Hussain data', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'QA Automation',
      body: 'This post is created by Riyaz Hussain for teaching API automation using Playwright.',
      userId: 777     // You can set any custom user ID
    }
  });

  expect(response.status()).toBe(201); // Created
  const body = await response.json();
  console.log("Created Post ID:", body.id);
  expect(body).toHaveProperty('id');
  expect(body.title).toBe('QA Automation');
});

// 3) PUT - Update an existing post with YOUR DATA

test('PUT: Update a post with Riyaz’s new title', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      id: 1,
      title: 'Updated by Riyaz - Playwright in Action',
      body: 'The post was updated successfully by Riyaz using Playwright PUT method.',
      userId: 777
    }
  }); 

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("Updated Post Title:", body.title);
  expect(body.title).toBe('Updated by Riyaz - Playwright in Action');
});

// 4) DELETE - Delete a post


test('DELETE: Delete a post created by Riyaz', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  console.log("Post deleted successfully by Riyaz");
});


