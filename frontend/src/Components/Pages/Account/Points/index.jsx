'use client';

import Breadcrumb from '@/Utils/CommonComponents/Breadcrumb';
import WrapperComponent from '@/Components/Widgets/WrapperComponent';
import AccountSidebar from '../Common/AccountSidebar';
import { Col, TabContent, TabPane } from 'reactstrap';
import ResponsiveMenuOpen from '../Common/ResponsiveMenuOpen';
import PointTopBar from './PointTopBar';

const AccountPoints = () => {
  return (
    <>
      <Breadcrumb title={'Point'} subNavigation={[{ name: 'Point' }]} />
      <WrapperComponent classes={{ sectionClass: 'dashboard-section section-b-space user-dashboard-section' ,fluidClass:'container'}} customCol={true}>
        <AccountSidebar tabActive={'point'} />
        <Col xxl={9} lg={8}>
          <ResponsiveMenuOpen />
          <div className='faq-content'>
            <TabContent>
              <TabPane className='show active'>
                <PointTopBar />
              </TabPane>
            </TabContent>
          </div>
        </Col>
      </WrapperComponent>
    </>
  );
};

export default AccountPoints;
