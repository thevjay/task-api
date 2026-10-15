const request = require("supertest")
const app = require("../src/server");

describe("Task API", () => {
    test("GET /health returns status ok", async () => {
        const response = await request(app).get("/health");

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ status: "ok" })
    });

    test("POST /tasks creates a task", async () => {
        const response = await request(app)
            .post("/tasks")
            .send({ title: "Learn CI/CD"})

        expect(response.status).toBe(201);
        expect(response.body.title).toBe("Learn CI/CD");
        expect(response.body.completed).toBe(false);
    });

    test("POST /tasks rejects an empty title", async () => {
        const response = await request(app)
            .post("/tasks")
            .send({ title: " " });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Task title is required");
    });
})