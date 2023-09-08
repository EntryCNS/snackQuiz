import { styled } from "styled-components";
import { BLACK_COLOR, ORANGE_COLOR } from "../common/colorTheme";
import { Link } from "react-router-dom";

export const MainLayout = styled.div`
`

export const LogoStyled = styled.img`
    width: 38rem;
    height: 37rem;
`

export const DesignTxtBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #F6FCFF;
    font-family: Shrikhand;
    font-size: 70px;

    width: 100%;
    height: 31vh;
    background-color: ${BLACK_COLOR};
`

export const LowRow = styled.div`
    display: flex;

    width: 100%;
    height: calc(100vh - 9vh - 31vh);
`

export const GameLink = styled(Link)`
    background-color: ${ORANGE_COLOR};
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #030202;
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 600;
    text-decoration: none;

    position: relative;
`

export const Arrow = styled.svg`
    position: absolute;

    right: 4.4vh;
    bottom: 3.7vh;
`

export const LowRightCol = styled.div`
    width: 50%;
`

export const mainPic1 = styled.img`
    width: 100%;
    height: 28vh;
    object-fit: cover;
`

export const GameIntroBox = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const GameIntroTitle = styled.h5`
    margin: 3% 0 7% 0;

    color: #FF6F00;
    font-family: Shrikhand;
    font-size: 63px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
`

export const GameIntroTxt = styled.p`
    white-space: pre-wrap;

    color: #030202;
    font-family: Pretendard;
    font-size: 21px;
    font-weight: 500;
`