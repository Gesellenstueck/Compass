export async function postUser(name) {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(name),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function getUserById(id) {
  const response = await fetch(`/api/users/${id}`);
  const user = await response.json();
  return user;
}

export async function getUsers() {
  const response = await fetch("/api/users");
  const users = await response.json();
  return users;
}
