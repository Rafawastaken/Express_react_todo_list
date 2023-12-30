import endpoints from "./endpoints";

export const getAllTasks = async () => {
  try {
    const response = await fetch(endpoints.getAllTasks);
    const data = await response.json();
    return data.tasks;
  } catch (error) {
    console.log(error);
  }
};

export const toggleTask = async (taskID, currentStatus) => {
  const endpointPatch = `${endpoints.updateTask}/${taskID}`;
  fetch(endpointPatch, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: !currentStatus,
    }),
  }).then((response) => {
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  });
};

export const createTask = (taskName) => {
  fetch(endpoints.createTask, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: taskName }),
  }).then((response) => {
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  });
};

export const getSingleTask = async (taskID) => {
  const endpointSingleTask = `${endpoints.getSingleTask}/${taskID.taskID}`;

  try {
    const response = await fetch(endpointSingleTask, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTask = async (taskID) => {
  const endpointDelete = `${endpoints.deleteTask}/${taskID}`;
  fetch(endpointDelete, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  });
};

export const updateTasks = (taskID, taskName, taskStatus) => {
  const endpointPatch = `${endpoints.updateTask}/${taskID.taskID}`;

  fetch(endpointPatch, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: taskName, completed: taskStatus }),
  }).then((response) => {
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  });
};
