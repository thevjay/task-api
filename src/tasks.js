function createTask(title) {
    if(!title || !title.trim()){
        throw new Error("Task title is required");
    }

    return {
        id: 1,
        title: title.trim(),
        completed: false,
    }
}

module.exports = { createTask };