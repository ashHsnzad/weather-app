import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import CarouselWrapper from "../styles/Carousel";

function Carousel({ firstTwoDays, currentTime }) {
  const [indexes, setIndexes] = useState(
    Array.from({ length: 8 }, (value, index) => index),
  );
  let firstIndex = indexes[0];
  let lastIndex = indexes[indexes.length - 1];

  console.log(indexes);
  console.log(lastIndex);
  console.log(firstIndex);
  const currentHour = currentTime?.split(" ")[1].split(":")[0];
  const firstHour = firstTwoDays?.find(
    (hour) => hour?.time?.split(" ")[1].split(":")[0] === currentHour,
  );

  const next12Hours = firstTwoDays
    ?.filter((hour) => hour.time_epoch >= firstHour.time_epoch)
    .slice(0, 12);
  console.log(next12Hours);

  const nextHour = () =>
    setIndexes((prev) => Array.from(prev, (index) => index + 1));

  const prevHour = () =>
    setIndexes((prev) => Array.from(prev, (index) => index - 1));

  return (
    <CarouselWrapper>
      <div className="hourly-title">
        <h4>HOURLY WEATHER</h4>
      </div>
      <section className="carousel">
        <button onClick={prevHour} disabled={firstIndex === 0}>
          <IoArrowBack />
        </button>

        <div className="hourly-data">
          {next12Hours.map((nextHour, i) => {
            const {
              time_epoch,
              time,
              temp_c,
              temp_f,
              condition: { icon, text },
              chance_of_rain,
            } = nextHour;
            if (indexes.includes(i))
              return (
                <div key={time_epoch} className="each-hour">
                  {time.split(" ")[1]}
                  <img src={icon} alt={text} />
                  <span className="temp">
                    {temp_c}
                    <sup>&deg;</sup>
                    <small>c</small>
                  </span >
                  <span className="precipitation">
                    <FaDroplet />
                    {chance_of_rain}%
                  </span>
                </div>
              );
          })}
        </div>

        <button onClick={nextHour} disabled={lastIndex === 11}>
          <IoArrowForward />
        </button>
      </section>
    </CarouselWrapper>
  );
}
export default Carousel;
