const request = require('supertest');
const app = require('../server');

describe('Student Application Endpoints Test Suite', () => {
    test('GET /health should return 200 and UP status', async () => {
        const response = await request(app).get('/health');
        // Deliberate test failure to demonstrate CI quality gate
        expect(response.statusCode).toBe(500); 
    });

    test('GET /api/student should return 200 with student details', async () => {
        const response = await request(app).get('/api/student');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Aditi Saraswat');
    });

    test('GET / should return 200 and HTML page content', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
