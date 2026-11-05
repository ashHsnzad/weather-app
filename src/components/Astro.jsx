import { MdSunny } from "react-icons/md";

import { WiMoonAltWaningCrescent6 } from "react-icons/wi";

import Wrapper from "../styles/Astro";
function Astro({ astro, date }) {
  const sunSetTime = new Date(`${date} ${astro.sunset}`);
  const sunRiseTime = new Date(`${date} ${astro.sunrise}`);
  const duration = (sunSetTime - sunRiseTime) / (1000 * 60);
  const sunDurationHours = Math.floor(duration / 60);
  const sunDurationMinutes = duration % 60;

  return (
    <Wrapper>
      <div className="astro-title">
        <h4>sun & moon</h4>
      </div>
      <section className="astro">
        <div className="sun">
          <div className="sunIcon-duration">
            <MdSunny className="sunIcon" />
            <h4>
              {sunDurationHours} hours and {sunDurationMinutes} minutes
            </h4>
          </div>
          <div className="rise-set">
            <div className="rise">
              <span>Rise</span>
              <h4>{astro.sunrise}</h4>
            </div>
            <div className="set">
              <span>Set</span>
              <h4>{astro.sunset}</h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="moon">
          <div className="moonIcon-phase">
            <WiMoonAltWaningCrescent6 className="moonIcon" />
            <h4>{astro.moon_phase}</h4>
          </div>
          <div className="rise-set">
            <div className="rise">
              <span>Rise</span>
              <h4>{astro.moonrise}</h4>
            </div>
            <div className="set">
              <span>Set</span>
              <h4>{astro.moonset}</h4>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
export default Astro;
