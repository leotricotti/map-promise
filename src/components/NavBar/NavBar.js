import logo from "../../assets/images/logo/converse.webp";
import { MenuItems } from "./MenuItems";
import styles from "./NavBar.module.css";
import { CartWidget } from "../Widgets/CartWidget";
import { NavToggle } from "../Widgets/NavToggle";

export function NavBar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navToggle}>
        <NavToggle />
      </div>
      <div className={styles.navRight}>
        <div className={styles.logoContainer}>
          <a href="/">
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </a>
        </div>
        <nav className={styles.navContainer}>
          <ul className={styles.navItem}>
            {MenuItems.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.url} className={styles.navLink}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.cart}>
        <p>Cart</p>
        <CartWidget />
      </div>
    </header>
  );
}
