import { styled } from "styled-components";
import { WHITE_COLOR } from "../common/colorTheme";
import {Link} from "react-router-dom"

export const GameStartLayout = styled.div`
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PreviewImg = styled.img`
    width: 18vh;
    height: 18vh;
`

export const Explain = styled.div`
    margin-top: 3.1vh;

    color: #030202;
    font-family: Pretendard;
    font-size: 56px;
    font-weight: 600;
`

export const StartLink = styled(Link)`
    margin-top: 9.4vh;

    width: 60vh;
    height: 11vh; 
    border: 10px solid #030202;
    background-color: ${WHITE_COLOR};

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #030202;
    font-family: Shrikhand;
    font-size: 60px;
`
