import styled from "styled-components"
import { BLACK_COLOR } from "../common/colorTheme"

export const GameMainLayout = styled.div`
    margin-top: 7.7vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderBtnBox = styled.div`
    width: 42.5vh;

    display: flex;
    justify-content: space-around;

    position: absolute;
    top: 2vh;
    right: 9.3vh;
`

export const HeaderBtn = styled.button`
    width: 18vh;
    height: 6vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #F6FCFF;
    border-radius: 0.625rem;
    border: 1px solid $${BLACK_COLOR};

    color: ${BLACK_COLOR};
    font-family: Pretendard;
    font-size: 21px;
    font-weight: 300;
`

export const StopIcon = styled.img`
    margin-left: 1.25vh;

    width: 2.5vh;
    height: 3.1vh;
`

export const SkipIcon = styled.img`
    margin-left: 1.25vh;

    width: 3.1vh;
    height: 2.3vh;
`

export const QuizImg = styled.img`
    width: 37.5vh;
    height: 37.5vh;
`

export const answerBoxRow = styled.div<{HowManyBox : number}>`
    width: calc(12.5vh + (12.5vh + 9.3vh) * (${props => props.HowManyBox} - 1));

    display: flex;
    justify-content: space-between;
`

export const answerBox = styled.div`
    margin-top: 9.3vh;

    width: 12.5vh;
    height: 12.5vh;
    border-radius: 2.5rem;
    border: 5px solid ${BLACK_COLOR};
`

export const GameInfoRow = styled.div`
    display: flex;
`

export const InfoBox = styled.div`
    margin: 5.6vh 4vh 0 4vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    color: ${BLACK_COLOR};
    font-family: Shrikhand;
    font-size: 35px;
`

export const LeftTimeImg = styled.img`
    margin-bottom: 1.8vh;

    width: 6.25vh;
    height: 6.25vh;
`

export const CurrectNumImg = styled.img`
    margin-bottom: 1.8vh;

    width: 6.25vh;
    height: 5.05vh;
`
