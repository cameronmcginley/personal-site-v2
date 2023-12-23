import "../globals.css";

const MainContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContainer;
