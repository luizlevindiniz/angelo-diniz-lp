import ThemeSwitch from "../theme/ThemeSwitcher";

export default function Navbar() {
  return (
    <div>
      <ThemeSwitch />
      <h1>Prof Chines | Vote 55123</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Propostas</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
