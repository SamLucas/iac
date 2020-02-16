import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import { MdDashboard, MdTimeline } from "react-icons/md";
import { FaToolbox, FaRegNewspaper, FaRegUserCircle } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { GoTextSize } from "react-icons/go";

const DefaultPropsIcons = css`
  font-size: 18px;
  margin: 15px;
`;

export const Container = styled.div`
  border-radius: 15px;
  background-color: white;
  padding: 20px;
`;

export const Lista = styled.ul`
  li {
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    cursor: pointer;
    list-style: none;

    &:hover {
      background-color: ${props => props.theme.colors.first};
      border-radius: 15px;
      color: white;
    }
  }
`;

export const LinkPerson = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto 30px;

  p,
  h3 {
    margin: 3px 0px 0px;
    text-align: center;
  }

  img {
    max-width: 300px;
    max-height: 200px;
    border-radius: 15px;
    margin-bottom: 10px;
  }
`;

export const SeparateList = styled.div`
  border: 0.5px solid ${props => props.theme.colors.background};
  margin: 10px 0px;
`;

export const IconDashBoard = styled(MdDashboard)`
  ${DefaultPropsIcons}
`;
export const IconFerramentas = styled(FaToolbox)`
  ${DefaultPropsIcons}
`;
export const IconLinhaDePesquisa = styled(MdTimeline)`
  ${DefaultPropsIcons}
`;
export const IconMembros = styled(FiUsers)`
  ${DefaultPropsIcons}
`;
export const IconNoticias = styled(FaRegNewspaper)`
  ${DefaultPropsIcons}
`;
export const IconProfile = styled(FaRegUserCircle)`
  ${DefaultPropsIcons}
`;
export const IconSite = styled(GiWorld)`
  ${DefaultPropsIcons}
`;
export const IconLogout = styled(IoIosLogOut)`
  ${DefaultPropsIcons}
`;
export const IconText = styled(GoTextSize)`
  ${DefaultPropsIcons}
`;
