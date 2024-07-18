import { Routes, Route, Navigate } from 'react-router-dom';
import InboxDashboard from '../pages/inbox';
import GroupsDashboard from '../pages/groups';
import SettingsDashboard from '../pages/settings';
import FolderDashboard from '../pages/folders';
import AllMenu from '../pages/allMenu';
import VolumeDashboard from '../pages/volume';
import BoxListDashboard from '../pages/boxList';
import NotificationDashboard from '../pages/notification';
import MoreMessageDashboard from '../pages/moreMessage';
import Logout from '../pages/folders';
import Channel from '../pages/inbox/Channel';
import DirectMessage from '../pages/inbox/DirectMessage';
import GroupMessage from '../pages/inbox/GroupMessage';
import Labels from '../pages/inbox/Labels';
import PrimaryMessage from '../pages/inbox/Primary';
import All from '../components/primary-sections/All';
import New from '../components/primary-sections/New';
import Assigned from '../components/primary-sections/Assigned';
import Closed from '../components/primary-sections/Closed';
import Starred from '../components/primary-sections/Starred';
import Spam from '../components/primary-sections/Spam';
import Dashboard from '../dashboard';
import General from '../components/channel-sections/General';
import Announcements from '../components/channel-sections/Announcements';
import Feedback from '../components/channel-sections/Feedback';
import Alice from '../components/direct-sections/Alice';
import Bob from '../components/direct-sections/Bob';
import Charlie from '../components/direct-sections/Charlie';
import Dev from '../components/group-sections/Dev';
import Marketing from '../components/group-sections/Marketing';
import Sales from '../components/group-sections/Sales';
import Urgent from '../components/label-sections/Urgent';
import Important from '../components/label-sections/Important';
import Later from '../components/label-sections/Later';

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate replace to="inbox" />} />
          <Route path="inbox" element={<InboxDashboard />}>
            <Route index element={<Navigate replace to="primary" />} />
            <Route path="primary" element={<PrimaryMessage />}>
              <Route index element={<Navigate replace to="all" />} />
              <Route path="all" element={<All />} />
              <Route path="all/:messageId" element={<All />} />
              <Route path="new" element={<New />} />
              <Route path="assigned" element={<Assigned />} />
              <Route path="closed" element={<Closed />} />
              <Route path="starred" element={<Starred />} />
              <Route path="spam" element={<Spam />} />
              <Route path="add-block" element={<Spam />} />
            </Route>
            <Route path="channel" element={<Channel />}>
              <Route index element={<Navigate replace to="general" />} />
              <Route path="general" element={<General />} />
              <Route path="announcement" element={<Announcements />} />
              <Route path="feedback" element={<Feedback />} />
            </Route>
            <Route path="direct" element={<DirectMessage />}>
              <Route index element={<Navigate replace to="alice" />} />
              <Route path="alice" element={<Alice />} />
              <Route path="bob" element={<Bob />} />
              <Route path="charlie" element={<Charlie />} />
            </Route>
            <Route path="group" element={<GroupMessage />} >
              <Route index element={<Navigate replace to="dev" />} />
              <Route path="dev" element={<Dev />} />
              <Route path="marketing" element={<Marketing />} />
              <Route path="sales" element={<Sales />} />
            </Route>
            <Route path="labels" element={<Labels />}>
              <Route index element={<Navigate replace to="urgent" />} />
              <Route path="urgent" element={<Urgent />} />
              <Route path="important" element={<Important />} />
              <Route path="later" element={<Later />} />
            </Route>
          </Route>
          <Route path="groups" element={<GroupsDashboard />} />
          <Route path="all-menu" element={<AllMenu />} />
          <Route path="volume" element={<VolumeDashboard />} />
          <Route path="folders" element={<FolderDashboard />} />
          <Route path="box-list" element={<BoxListDashboard />} />
          <Route path="settings" element={<SettingsDashboard />} />
          <Route path="more-message" element={<MoreMessageDashboard />} />
          <Route path="notification" element={<NotificationDashboard />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </>
  );
};

export default Home;
