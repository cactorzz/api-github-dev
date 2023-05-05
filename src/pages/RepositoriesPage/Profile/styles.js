import styled from "styled-components";


export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    flex-direction: row;
    align-items: center;
  }
`;

export const Button = styled.a`
padding-bottom: 0.5rem;
display: flex;
align-items: center;
text-align: left;
text-decoration: none;
font-size: ${(props) => props.theme.fontSize.normal};
background: transparent;
color: ${(props) => props.theme.colors.text};
cursor: pointer;

&:hover {
  color: rgba(255, 255, 255, 0.5);
}
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSize.title};
  margin: 0;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    display: none;
  }
`;


export const Inner = styled.div`
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  font-size: small;
  line-height: 1.5;
  margin: 0;

  svg {
    margin-right: 10px;
  }
`;
