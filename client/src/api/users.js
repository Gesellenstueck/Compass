export async function getUserById(id) {
  const response = await fetch(`http://localhost:5000/users/${id}`);
  const user = await response.json();
  return user;
}
