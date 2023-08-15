// ----- // ----- /Docs/ ----- // ----- //
// https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive
// https://nextjs.org/docs/app/api-reference/functions/use-router

// ----- // ----- /DIRECTIVE/ ----- // ----- //
"use client";

// ----- // ----- /LIBRARY/ ----- // ----- //
import { useRouter } from "next/navigation";

// ----- // ----- /PAGE/ ----- // ----- //
function Users({ users }) {
  // Crea un hook que sirve para cambiar de pagina.
  const router = useRouter();

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              router.push(`/users/${user.id}`);
            }}
          >
            <div>
              <h5>
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} alt={user.email} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

/** Note -->
- Imprimo usuarios en base a un valor "id" de un objeto "user". 
*/
