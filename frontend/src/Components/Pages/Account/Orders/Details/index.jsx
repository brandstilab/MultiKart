'use client';
import Breadcrumb from '@/Utils/CommonComponents/Breadcrumb';
import WrapperComponent from '@/Components/Widgets/WrapperComponent';
import AccountSidebar from '../../Common/AccountSidebar';
import { Col, TabContent, TabPane } from 'reactstrap';
import ResponsiveMenuOpen from '../../Common/ResponsiveMenuOpen';
import Details from './Details';

const OrderDetailsContain = ({ params }) => {
  return (
    <>
      <Breadcrumb title={'Order'} subNavigation={[{ name: 'Order' }]} />
      <WrapperComponent classes={{ sectionClass: 'dashboard-section section-b-space user-dashboard-section', fluidClass: 'container' }} customCol={true}>
        <AccountSidebar tabActive={'order'} />
        <Col xxl={9} lg={8}>
          <ResponsiveMenuOpen />
          <div className='dashboard-right-sidebar'>
            <TabContent>
              <div className='faq-content'>
              <TabPane className='show active'>
                <Details params={params} />
              </TabPane>
              </div>
            </TabContent>
          </div>
        </Col>
      </WrapperComponent>
    </>
  );
};

export default OrderDetailsContain;
