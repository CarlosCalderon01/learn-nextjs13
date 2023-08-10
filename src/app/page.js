//Example: react server component
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function homePage() {
  const users = await fetchUsers();
  return (
    <div>
      <div>
        <h1>Imprimiendo json</h1>
      </div>
      <div>
        <p>{JSON.stringify(users)}</p>
      </div>
    </div>
  );
}

export default homePage;
