import React from 'react';
import Logo from "../../../assets/Logo.svg"
import * as S from "./style"

const Nav = () => {
    return (
        <S.NavLayout>
            <S.LogoStyled src={Logo}/>
        </S.NavLayout>
    );
};

export default Nav;