// ----- // ----- /LIBRARY/ ----- // ----- //
import Link from "next/link";

// ----- // ----- /PAGE/ ----- // ----- //
function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/dashboard">DashBoard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

/** Note -->
- Component navigation for menu. i use before version of nextjs13
*/