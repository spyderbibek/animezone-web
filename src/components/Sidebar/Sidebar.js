import React from 'react';
import {
  FaImage,
  FaListUl,
  FaDownload,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import MenuItem from './MenuItem/MenuItem';
import { Backdrop, SidebarContainer } from './SidebarElements';

const buttonStyle = {
  fontSize: '1rem',
  alignItems: 'center',
  display: 'flex',
};

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {isOpen ? <Backdrop onClick={toggle} /> : null}
      <SidebarContainer isOpen={isOpen}>
        {/* <SidebarMenu> */}
        <MenuItem
          leadingIcon={<FaListUl style={buttonStyle} />}
          title="Features"
          scrollTo="features"
        />
        <MenuItem
          leadingIcon={<FaImage style={buttonStyle} />}
          title="Screenshots"
          scrollTo="screenshots"
        />
        <MenuItem
          leadingIcon={<FaDownload style={buttonStyle} />}
          title="Download App"
          scrollTo="download"
        />

        <MenuItem
          leadingIcon={<FaDiscord style={buttonStyle} />}
          trailingIcon={<FaExternalLinkAlt />}
          title="Discord"
          scrollTo="download"
        />
        <MenuItem
          leadingIcon={<FaReddit style={buttonStyle} />}
          trailingIcon={<FaExternalLinkAlt />}
          title="Reddit"
          scrollTo="download"
        />
        <MenuItem
          leadingIcon={<FaGithub style={buttonStyle} />}
          trailingIcon={<FaExternalLinkAlt />}
          title="Github"
          scrollTo="download"
        />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
