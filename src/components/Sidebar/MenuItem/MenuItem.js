import React from 'react';
import {
  SidebarMenuItem,
  LeftValue,
  IconWrapper,
  SidebarLink,
  TrailingIconWrapper,
} from './MenuItemElements';

const MenuItem = ({ leadingIcon, trailingIcon, title, scrollTo }) => {
  return (
    <SidebarMenuItem>
      <LeftValue>
        <IconWrapper>{leadingIcon}</IconWrapper>
        {scrollTo ? (
          <SidebarLink to={scrollTo}>{title}</SidebarLink>
        ) : (
          <SidebarLink href="">{title}</SidebarLink>
        )}
      </LeftValue>
      {trailingIcon ? (
        <TrailingIconWrapper>{trailingIcon}</TrailingIconWrapper>
      ) : null}
    </SidebarMenuItem>
  );
};

export default MenuItem;
