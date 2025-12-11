import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={styles.container}>
      <nav className={styles.nav_container}>
        <div className={styles.outer}>
          {/* Logo */}
          <div className={styles.name_container}>
            <Code2 className={styles.logo} />
            <span>
              <Link className={styles.name} to="/">
                Learn DSA
              </Link>
            </span>
          </div>
          <div className={styles.navigation}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>
          <div className={styles.buttons}>
            <button className={styles.login_button}>Log In</button>
            <button className={styles.signup_button}>Sign Up</button>
          </div>

          {/* Mobile Navigation */}
          <button
            className={styles.mobileNav}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={styles.mobileButton} />
            ) : (
              <Menu className={styles.mobileMenu} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileContainer}>
            <div className={styles.mobileOuter}>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
              <div className={styles.mobileAuthButtons}>
                <button className={styles.mobileLoginButton}>Log In</button>
                <button className={styles.mobileSignUpButton}>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
