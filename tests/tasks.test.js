const { createTask } = require("../src/tasks")


test("creates a task", () => {
    const task = createTask("Learn CI/CD");

    expect(task.title).toBe("Learn CI/CD");
    expect(task.completed).toBe(false);
});

test("rejects an empty title", () => {
  expect(() => createTask("  ")).toThrow(
    "Task title is required"
  );
});