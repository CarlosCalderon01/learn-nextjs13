// ----- // ----- /FUNCTION/ ----- // ----- //

// Get User in format JSON.
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

// ----- // ----- /PAGE/ ----- // ----- //
//Get a specific user from home and create a new template
async function UsersPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div>
      <div>
        <div>
          <h1>User Details!</h1>
        </div>
        <div>
          <h2>
            {user.id} {user.first_name} {user.last_name}
          </h2>
        </div>
        <div>
          <p>{user.email}</p>
        </div>
        <div>
          <img src={user.avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UsersPage;

/** Note -->

*/