'use client';
import AccountSidebar from '../Common/AccountSidebar';
import { Col, TabContent, TabPane } from 'reactstrap';
import DashboardContent from './DashboardContent';
import ResponsiveMenuOpen from '../Common/ResponsiveMenuOpen';
import Breadcrumbs from '@/Utils/CommonComponents/Breadcrumb';
import WrapperComponent from '@/Components/Widgets/WrapperComponent';

const AccountDashboard = () => {
  return (
    <>
      <Breadcrumbs title={'Dashboard'} subNavigation={[{ name: 'Dashboard' }]} />
      <WrapperComponent classes={{ sectionClass: 'dashboard-section section-b-space user-dashboard-section', fluidClass: 'container' }} customCol={true}>
        <AccountSidebar tabActive={'dashboard'} />
        <Col xxl={9} lg={8}>
          <ResponsiveMenuOpen />
          <div className='dashboard-right-sidebar'>
            <TabContent>
              <TabPane className='show active'>
                <DashboardContent />
              </TabPane>
            </TabContent>
          </div>
        </Col>
      </WrapperComponent>
    </>
  );
};

export default AccountDashboard;
