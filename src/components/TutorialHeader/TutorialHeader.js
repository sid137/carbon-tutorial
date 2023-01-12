import React from 'react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Link } from 'react-router-dom';

const HeaderRender = ({ isSideNavExpanded, onClickSideNavExpand }) => {
  return (
    <Header aria-label="Carbon Tutorial">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
      />
      <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
        <Switcher size={20} />
      </HeaderGlobalAction>
      <HeaderName element={Link} to="/" prefix="Boundless">
        Carbon Tutorial
      </HeaderName>
      <HeaderNavigation aria-label="Carbon Tutorial">
        <HeaderMenuItem element={Link} to="/repos">
          Repositories
        </HeaderMenuItem>
      </HeaderNavigation>

      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        isPersistent={false}>
        <SideNavItems>
          <HeaderSideNavItems>
            <HeaderMenuItem element={Link} to="/repos">
              Repositories
            </HeaderMenuItem>
          </HeaderSideNavItems>
        </SideNavItems>
      </SideNav>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aira-label="Notifications"
          tooltipAlignment="center">
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
          <UserAvatar size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};
export default function TutorialHeader() {
  return <HeaderContainer render={HeaderRender}> Test</HeaderContainer>;
}