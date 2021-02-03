import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const SidebarMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`;

export const IconWrapper = styled.div`
  color: #fff;
  padding: 0 10px;
`;

export const TrailingIconWrapper = styled.div`
  color: #fff;
  padding: 0 10px;
  margin-left: auto;
`;

export const SidebarLink = styled(LinkS)`
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
