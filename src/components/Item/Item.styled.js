import styled from 'styled-components';

export const ContactField = styled.div`
align-items:center;

`;


export const DataContact = styled.p`
margin: 0;
padding: 0;
font-weight: 700;
`;

export const Button = styled.button`
padding: 4px;
margin: 0;
margin-left: auto;
width: 64px;
font-size: 9px;
border-radius: 15px;
border-color: blue;
background-color: blue;
color: white;

cursor: pointer;
transition: background-color 300ms linear;
&:hover,
&:focus {
background-color: #0084ff;
}

`;