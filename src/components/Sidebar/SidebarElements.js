import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 30vh;
  background: #11161e;
  display: grid;
  bottom: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  bottom: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

// export const SidebarMenu = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(6, 80px);
//   text-align: center;

//   @media screen and (max-width: 480px) {
//     grid-template-rows: repeat(6, 60px);
//   }
// `;
