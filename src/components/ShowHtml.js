const styles = {
  padding: "1rem 2rem",
  color: "rgba(41, 41, 41, 0.829)",
  fontSize: "1.2rem",
};
const ShowHtml = (props) => {
  return (
    <>
      <article style={styles}>{props.input}</article>
    </>
  );
};
export default ShowHtml;
