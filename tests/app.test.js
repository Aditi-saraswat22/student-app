const request = require('supertest');
const app = require('../server');

describe('Student Application Endpoints Test Suite', () => {
    test('GET /health should return 200 and UP status', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('UP');
        expect(response.body.service).toBe('student-app');
    });

    test('GET /api/student should return 200 with student details', async () => {
        const response = await request(app).get('/api/student');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Aditi Saraswat');
        expect(response.body.rollNumber).toBe('2301010020');
        expect(response.body.university).toBe('K. R. Mangalam University');
    });

    test('GET / should return 200 and HTML page content', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toContain('text/html');
        expect(response.text).toContain('DevOps CI/CD Student Portal');
    });
});
