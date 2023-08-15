// ----- // ----- /COMPONENTS/ ----- // ----- //
import Users from "@/components/Users";

// ----- // ----- /FUNCTION/ ----- // ----- //
// get all user and convert to JSON
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

// ----- // ----- /PAGE/ ----- // ----- //
async function homePage() {
  const users = await fetchUsers();

  return (
    <div>
      <div>
        <h1>Imprimiendo json</h1>
      </div>
      <div>
        <Users users={users} />
      </div>
    </div>
  );
}

export default homePage;

/** Note -->
- Home page for view user.
*/