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

const createTask = () => {};

const getSingleTask = () => {};

const deleteTask = () => {};

const updateTasks = () => {};
