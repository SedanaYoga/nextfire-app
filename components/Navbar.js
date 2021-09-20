import Link from "next/link"

const Navbar = () => {
  const user = true
  const username = true

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref>
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin" passHref>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <img src={user?.photoURL} alt="user-photo" />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <>
            <li>
              <Link href="/enter" passHref>
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
