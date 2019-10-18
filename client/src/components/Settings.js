import React from 'react';
import TabsHorizontal from './widgets/TabsHorizontal';
import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';
import EmailIcon from '@material-ui/icons/Email';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';

const tabs = [
    { id: '1', label: 'Email Settings', icon: <EmailIcon />, panel: 'Email Settings', },
    { id: '2', label: 'Tax Settings', icon: <AttachMoneyIcon />, panel: 'Tax Settings', },
    { id: '3', label: 'User Settings', icon: <PeopleIcon />, panel: 'User Settings', },
    { id: '4', label: 'Access Rights', icon: <DesktopAccessDisabledIcon />, panel: 'Access Rights', },
]

export default function Settings() {
    return (
        <div>
           <TabsHorizontal tabs={tabs} />
        </div>
    );
}