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

const createTask = () => {};

const getSingleTask = () => {};

const deleteTask = () => {};

const updateTasks = () => {};
