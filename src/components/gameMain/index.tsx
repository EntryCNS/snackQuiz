import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style"
import { RESTART, SKIP, STOP } from './txt';
import STOPICON from "../../assets/StopIcon.svg"
import SKIPICON from "../../assets/SkipIcon.svg"
import {snackAnswerList, snackNumber} from '../../assets/snackItem/snackAnswer';
import ClockIcon from "../../assets/ClockIcon.svg"
import CurrectNumIcon from "../../assets/CurrectNumIcon.svg"
import type { gameTimerDataType } from './type';
import CorrectSignImg from "../../assets/CorrectSign.svg"
import TimeOverSignImg from "../../assets/TimeOverSign.svg"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useLocation } from 'react-router-dom';

// 왠지 모르겠지만 useEffect에 stt시작 코드를 넣으면 뭔가 꼬이는 듯 -> 컴퓨터 껐켜 해야함
// https://velog.io/@bami/%ED%83%80%EC%9D%B4%EB%A8%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-with-JavaScript
const GameMain = () => {
    const RANDOMNUMLIST = useState<Array<number>>([...Array(snackNumber)].map((v,i) => i).sort(() => Math.random() - 0.5))
    const [CurrentRandomListNum, SetCurrentRandomListNum] = useState<number>(0)
    const [CurrentQuizNum,setCurrentQuizNum] = useState<number>(0)
    const [InputWord, setInputWord] = useState<string>('')
    const [IsTimerRunning, setIsTimerRunning] = useState<boolean>(false)
    const [AnswerCount, setAnswerCount] = useState(0)
    const [IsCorrect, setIsCorrect] = useState<boolean>(false)
    const [IsTimeover, setIsTimeover] = useState<boolean>(false)
    // 0.01초 = 1 , 5분
    const [Timer, setTimer] = useState<number>(6000)
    const TimerRef = useRef<number|null>();
    
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();

    // const imgLink = `../../assets/snackItem/${CurrentQuizNum.current}.png`
    const AnswerLetterNumber = snackAnswerList[CurrentQuizNum].length;

    const onSkip = async() => {
        SetCurrentRandomListNum((CurrentRandomListNum)=>CurrentRandomListNum+1)
        setCurrentQuizNum(RANDOMNUMLIST[0][CurrentRandomListNum])

        // isEnd()
    }

    const onStopStart = () => {
        if (TimerRef.current) {
            window.clearInterval(TimerRef.current);
            TimerRef.current = null
        } else {
            TimerRef.current = window.setInterval(handleCount, 1000);  
        }

        if(listening){
            SpeechRecognition.stopListening()
        } else {
            SpeechRecognition.startListening({
                continuous: true,
                language: 'ko'
            })
        }
    }
    
    // const isEnd = () => {
    //     if(CurrentQuizNum >= snackNumber - 1 ){
    //         setCurrentQuizNum(snackNumber - 1)
    //     }
    // }

    const onCorrect = async() => {
        setIsCorrect(true)
        setAnswerCount(AnswerCount + 1)

        setTimeout(()=>{
            SetCurrentRandomListNum((CurrentRandomListNum)=>CurrentRandomListNum+1)
            setCurrentQuizNum(RANDOMNUMLIST[0][CurrentRandomListNum])
            // isEnd()

            setIsCorrect(false)
        },500)
    }

    const onContextMenuHandler = (e:any) => {
        e.preventDefault();

        onCorrect()
    }

    const onTimeover = () => {
        setIsTimeover(true)

        if (TimerRef.current) {
            window.clearInterval(TimerRef.current);
            setTimer(0);
            TimerRef.current = null;
        }

        if(listening){
            SpeechRecognition.stopListening()
        }
    }

    const handleCount = ()=>{
        setTimer((Timer) => Timer - 100)
    }

    // const keyDown = (event:React.KeyboardEvent) => {
    
    //     if (event.key === "T" || event.key === "t") {
    //       event.preventDefault();

    //       onCorrect()
    //     }
    //   };

    // let TimerInterval = (setInterval(manageTimer,1000))

    useEffect(()=>{
        console.log(transcript)
        if(transcript.includes(snackAnswerList[CurrentQuizNum])){
            onCorrect()
        }
    },[transcript])
    
    useEffect(()=>{
        if(Timer < 0){
            onTimeover()
        }
    },[Timer])
    
    useEffect(() => {
        if(!listening){
            SpeechRecognition.startListening({
                continuous: true,
                language: 'ko'
            })
        }

        // if (TimerRef.current !== null) return;
        TimerRef.current = window.setInterval(handleCount, 1000);

        // keyDown()
      }, []);
    
    // const loopTimer = 

    //}

    // const useTimer = () => {
    //     if(!IsTimerRunning) return 0
    
    //     setTimer((Timer)=> Timer - 10)
    //     //console.log(Math.ceil((Timer%6000)/100).toString().padStart(2,'0'))
        
    //     if(Timer <= 0 ){
    //         setIsTimerRunning(false)
    //     }
    // }

    // const TimerUse = setInterval(()=>(
    //     useTimer

    //     clearInterval(TimerUse)
        
    // ),100)
    
    
    // const chkTime = () => {
    //     if(Timer.milliseconds <= 10){
    //         setTimer((Timer)=>({
    //             ...Timer,
    //             milliseconds : 59
    //         }))
    //     }

    //     if(Timer.milliseconds <= 0){
    //         setTimer((Timer)=>({
    //             ...Timer,
    //             seconds : Timer.seconds - 1,
    //             milliseconds : 59
    //         }))
    //     }

    //     console.log(Timer)
    
    //     if(Timer.seconds <= 0){
    //         setTimer((Timer)=>({
    //             ...Timer,
    //             minutes : Timer.minutes - 1,
    //             seconds : 59
    //         }))
    //     }
    
    //     if(Timer.seconds <= 0){
    //         return 0
    //     }
        
    // }

    return (
        <S.GameMainLayout>
            <S.HeaderBtnBox>
                {
                    listening ? 
                    <S.HeaderBtn onClick={onStopStart}>
                        {STOP}
                        <S.StopIcon src={STOPICON}/>
                    </S.HeaderBtn>
                    :
                    <S.HeaderBtn onClick={onStopStart}>
                        {RESTART}
                        <S.RestartSvg xmlns="http://www.w3.org/2000/svg" width="38" height="44" viewBox="0 0 38 44" fill="none">
                            <path d="M38 22L0.5 43.6506V0.349365L38 22Z" fill="#030202"/>
                        </S.RestartSvg>
                    </S.HeaderBtn>
                }
                <S.HeaderBtn onClick={onSkip} onContextMenu={onContextMenuHandler}>
                    {SKIP}
                    <S.StopIcon src={SKIPICON}/>
                </S.HeaderBtn>
            </S.HeaderBtnBox>

            <S.QuizImg src={require(`../../assets/snackItem/${CurrentQuizNum}.png`)}/>

            <S.answerBoxRow HowManyBox={AnswerLetterNumber}>
            {
                [...Array(AnswerLetterNumber)].map((d,idx)=>(
                    
                    <S.answerBox>
                        {IsCorrect && snackAnswerList[CurrentQuizNum][idx]}
                    </S.answerBox>
                ))
            }
            </S.answerBoxRow>

            <S.GameInfoRow>
                <S.InfoBox>
                    <S.LeftTimeImg src={ClockIcon}/>
                    {Math.floor(Timer/6000).toString().padStart(2,'0')}:{Math.floor((Timer%6000)/100).toString().padStart(2,'0')}:{(Timer%100).toString().padStart(2,'0')}
                </S.InfoBox>
                <S.InfoBox> 
                    <S.CurrectNumImg src={CurrectNumIcon}/>
                    {AnswerCount.toString().padStart(3,'0')}/{snackNumber.toString().padStart(3,'0')}
                </S.InfoBox>
            </S.GameInfoRow>

            {
                IsCorrect &&
                <S.CorrectImg src={CorrectSignImg}/>
            }

            {
                IsTimeover &&
                <S.TimeoutImgBox>
                    <S.TimeoverImg src={TimeOverSignImg}/>
                    <S.TimeoverScoreText>{AnswerCount.toString().padStart(2,'0')}</S.TimeoverScoreText>
                </S.TimeoutImgBox>
            }

        </S.GameMainLayout>
    );
};

export default GameMain;