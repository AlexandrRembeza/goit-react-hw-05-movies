import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 17px;
  text-decoration: none;
  padding: 5px 10px;
  margin-left: 10px;
  margin-top: 15px;

  color: black;
  border: 2px solid #d22f2f;
  border-radius: 5px;

  & svg {
    margin-right: 5px;
  }

  &:hover,
  &:focus {
    background-color: #d22f2f;
    color: #ffffff;
  }
`;

export const MovieImage = styled.img`
  display: block;
  width: 300px;
  height: auto;
  border-radius: 30px;

  margin-right: 30px;
`;
export const AdditionalInfo = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 20px;
  font-weight: 500;

  text-decoration: none;
  padding: 5px 13px;

  color: #d22f2f;
  border-radius: 5px;
  transition: scale 100ms linear;

  &.active {
    color: #ffffff;
    background-color: #d22f2f;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
