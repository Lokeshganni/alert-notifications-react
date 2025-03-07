import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="app-component">
    <h1>Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle />
      <div>
        <h1>Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill />
      <div>
        <h1>Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
    <Notification>
      <MdWarning />
      <div>
        <h1>Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
    <Notification>
      <MdInfo />
      <div>
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
