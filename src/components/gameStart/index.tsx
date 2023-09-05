import React from 'react';
import * as S from "../gameStart/style"
import SnackPreview from "../../assets/SnackPreview.svg"
import {EXPLAIN, STARTBTN} from "./txt"

const GameStart = () => {
    return (
        <S.GameStartLayout>
            <S.PreviewImg src={SnackPreview}/>
            <S.Explain>{EXPLAIN}</S.Explain>
            <S.StartLink to='/gameMain'>{STARTBTN}</S.StartLink>
        </S.GameStartLayout>
    );
};

export default GameStart;