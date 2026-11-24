import { VscWarning } from "react-icons/vsc";
import Wrapper from "../styles/AlertsHeader";
function AlertsHeader({ alerts }) {
  return (
    <Wrapper>
      {alerts.length && (
        <div className="alerts">
          <VscWarning />
          <span>{alerts.length}</span>
          <h4>{alerts[0].event}</h4>
        </div>
      )}
    </Wrapper>
  );
}
export default AlertsHeader;
