import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { fetchTopics } from "../api";
import styles from "../styles/navbar.module.css";

const Navbar = ({ loggedInUser, setLoggedInUser }) => {
  const [topics, setTopics] = useState([]);
  const [subNavIsOpen, setSubNavIsOpen] = useState(false);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  });

  return (
    <nav class={styles.navbar}>
      <div class={styles.toprow}>
        <Link to="/" class={styles.link}>
          Home
        </Link>
        <button
          onClick={() => setSubNavIsOpen(!subNavIsOpen)}
          class={styles.link}
        >
          Topics
        </button>
        {loggedInUser && (
          <Link to="/new-article" class={styles.link}>
            Post New Article
          </Link>
        )}
        {loggedInUser === "" ? (
          <Link to="/log-in" className={`${styles.link} ${styles.end}`}>
            Log In
          </Link>
        ) : (
          <>
            <Link
              to={`/user/${loggedInUser}`}
              class={`${styles.link} ${styles.end}`}
            >
              My Profile
            </Link>
            <button onClick={() => setLoggedInUser("")} class={styles.link}>
              Log Out
            </button>
          </>
        )}
      </div>
      {subNavIsOpen && (
        <div className={styles.bottomrow}>
          {topics.map((topic) => (
            <Link
              to={`/${topic.slug}/articles`}
              key={topic.slug}
              class={styles.bottomlink}
            >
              {topic.slug}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
