const SecondPage = ({ number, paragraph, image }: any) => {
  return (
    <>
      <div className="first-row">
        <div className="rows">
          <img src={image} alt="m" />
          <h1>{number}</h1>
        </div>
        <div className="para">
          <p>{paragraph}</p>
          <div className="vl"></div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
