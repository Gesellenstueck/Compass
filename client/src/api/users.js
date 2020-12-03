export async function getUserById(id) {
  const response = await fetch(`http://localhost:5000/users/${id}`);
  const user = await response.json();
  return user;
}

export async function getUsers() {
  const response = await fetch("http://localhost:5000/users");
  const users = await response.json();
  return users;
}

export async function postUser(name) {
  const response = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    body: JSON.stringify(name),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const newName = await response.json();
  return newName;
}
