import { FaDog } from 'react-icons/fa';
import { BsBell, BsPerson, BsThreeDots } from 'react-icons/bs';
import { RiHome7Fill } from 'react-icons/ri';

function SidePanel(props) {
  return(
    <div className="text-gray-200 w-24 m-0 flex flex-col border-r-2 border-brown-light shadow">
      <SidePanelIcon icon={<FaDog size="32"/>}/>
      <SidePanelIcon icon={<RiHome7Fill size="32"/>}/>
      <SidePanelIcon icon={<BsBell size="32"/>}/>
      <SidePanelIcon icon={<BsPerson size="32"/>}/>
      <SidePanelIcon icon={<BsThreeDots size="32"/>}/>
    </div>
  );
}

function SidePanelIcon(props) {
  return(
    <div className="sidepanel-icon">
      {props.icon}
    </div>
  );
}

export default SidePanel;
