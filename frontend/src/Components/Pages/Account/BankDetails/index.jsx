'use client';
import Breadcrumb from '@/Utils/CommonComponents/Breadcrumb';
import WrapperComponent from '@/Components/Widgets/WrapperComponent';
import AccountSidebar from '../Common/AccountSidebar';
import { Col, TabContent, TabPane } from 'reactstrap';
import ResponsiveMenuOpen from '../Common/ResponsiveMenuOpen';
import BankDetailForm from './BankDetailForm';

const BankDetailsContent = () => {
  return (
    <>
      <Breadcrumb title={'BankDetails'} subNavigation={[{ name: 'BankDetails' }]} />
      <WrapperComponent classes={{ sectionClass: 'dashboard-section section-b-space user-dashboard-section',fluidClass:'container' }} customCol={true}>
        <AccountSidebar tabActive={'bank-details'} />
        <Col xxl={9} lg={8}>
          <ResponsiveMenuOpen />
          <div className='faq-content'>
            <TabContent>
              <TabPane className='show active'>
                <BankDetailForm />
              </TabPane>
            </TabContent>
          </div>
        </Col>
      </WrapperComponent>
    </>
  );
};

export default BankDetailsContent;
