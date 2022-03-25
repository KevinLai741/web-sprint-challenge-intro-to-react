import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const Character = (props) => {
    const { name, birth_year } = props;

    const WrapperDiv = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 2px solid #5F9EA0;
        color: #2F4F4F;
        padding: 10px;
    `

    return (
        <WrapperDiv>
            <h2>{name}</h2>
            <h3>{birth_year}</h3>
        </WrapperDiv>
    )
};

export default Character; 