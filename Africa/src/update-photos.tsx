export default function UpdatePhotos({ imgg, day, date }: any) {
  return (
    <>
      <div>
        <div>
          <img src={imgg} alt="day" />
        </div>
        <div>
          <h5>{day}</h5>
        </div>
        <div>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}
