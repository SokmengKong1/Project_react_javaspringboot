
 const API_URL = ("http://localhost:8080/Table");

// const API_URL = ("https://crud-render-h6q5.onrender.com/api/students");
export const Service = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
export const createItem = async (item) => {
  const response = await fetch(API_URL + "/create", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return response.text();
};
export const updateItem = async (item) => {
  const response = await fetch(API_URL + "/update", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
  return response;
}
export const deleteItem = async (item) => {
  const response = await fetch(API_URL + "/delete", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
  return response;
}
export const deleteItems = async (item) => {
  const response = await fetch(API_URL + "/delete", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return response.text();
};
export const getById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};