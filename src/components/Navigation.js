import Link from "next/link";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/dashboard">dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
