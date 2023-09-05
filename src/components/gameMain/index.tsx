import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style"
import { SKIP, STOP } from './txt';
import STOPICON from "../../assets/StopIcon.svg"
import SKIPICON from "../../assets/SkipIcon.svg"
import {snackAnswerList, snackNumber} from '../../assets/snackItem/snackAnswer';
import ClockIcon from "../../assets/ClockIcon.svg"
import CurrectNumIcon from "../../assets/CurrectNumIcon.svg"
import type { gameTimerDataType } from './type';

const GameMain = () => {
    const [CurrentQuizNum,setCurrentQuizNum] = useState<number>(0)
    const [IsTimerRunning, setIsTimerRunning] = useState<boolean>(false)
    const [Timer, setTimer] = useState<gameTimerDataType>({
        'minutes' : 4,
        'seconds' : 59,
        'milliseconds' : 59
    })
    // const imgLink = `../../assets/snackItem/${CurrentQuizNum.current}.png`
    const AnswerLetterNumber = snackAnswerList[CurrentQuizNum].length;
    

    const onSkip = async() => {
        setCurrentQuizNum(CurrentQuizNum+1)
        isEnd()
    }
    
    const isEnd = () => {
        console.log(CurrentQuizNum)
        if(CurrentQuizNum >= snackNumber - 1 ){
            setCurrentQuizNum(snackNumber - 1)
        }
    }

    const doTimer = () => {
        if(!IsTimerRunning) return 0

        setInterval(()=>{
            setTimer((Timer)=>({
                ...Timer,
                milliseconds : Timer.milliseconds - 1
            }))
            
            chkTime()

            if(Timer.seconds <= 0){
                return 0
            }
            
        },10)
    }
    
    const chkTime = () => {
        // if(Timer.milliseconds <= 10){
        //     setTimer((Timer)=>({
        //         ...Timer,
        //         milliseconds : 59
        //     }))
        // }

        if(Timer.milliseconds <= 0){
            setTimer((Timer)=>({
                ...Timer,
                seconds : Timer.seconds - 1,
                milliseconds : 59
            }))
        }

        console.log(Timer)
    
        // if(Timer.seconds <= 0){
        //     setTimer((Timer)=>({
        //         ...Timer,
        //         minutes : Timer.minutes - 1,
        //         seconds : 59
        //     }))
        // }
    
        // if(Timer.seconds <= 0){
        //     return 0
        // }
        
    }

    useEffect(()=>{
        if(CurrentQuizNum >= snackNumber - 1 ){
            setCurrentQuizNum(snackNumber - 1)
        }

        doTimer()

    },[Timer.milliseconds])

    return (
        <S.GameMainLayout>
            <S.HeaderBtnBox>
                <S.HeaderBtn>
                    {STOP}
                    <S.StopIcon src={STOPICON}/>
                </S.HeaderBtn>
                <S.HeaderBtn onClick={onSkip}>
                    {SKIP}
                    <S.StopIcon src={SKIPICON}/>
                </S.HeaderBtn>
            </S.HeaderBtnBox>

            <S.QuizImg src={require(`../../assets/snackItem/${CurrentQuizNum}.png`)}/>
            
            <S.answerBoxRow HowManyBox={AnswerLetterNumber}>
            {
                [...Array(AnswerLetterNumber)].map((d)=>(
                    <S.answerBox></S.answerBox>
                ))
            }
            </S.answerBoxRow>

            <S.GameInfoRow>
                <S.InfoBox>
                    <S.LeftTimeImg src={ClockIcon}/>
                    {Timer.minutes.toString().padStart(2,'0')}:{Timer.seconds.toString().padStart(2,'0')}:{Timer.milliseconds.toString().padStart(2,'0')}
                </S.InfoBox>
                <S.InfoBox>
                    <S.CurrectNumImg src={CurrectNumIcon}/>
                    001/120
                </S.InfoBox>
            </S.GameInfoRow>
            

        </S.GameMainLayout>
    );
};

export default GameMain;