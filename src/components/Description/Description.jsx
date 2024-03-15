import css from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={css.descriptionTitle}>Welcome to the Ukraine</h1>
      <p className={css.descriptionText}>
        Donatta for the victory of Ukraine and leave your review.
        <br />
        Help stop the genocide of the Ukrainian population
      </p>
    </>
  );
};

export default Description;
