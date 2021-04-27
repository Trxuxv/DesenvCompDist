import React from 'react';
import BeenhereIcon from '@material-ui/icons/Beenhere';

import { ContainerPage, TitlePage } from "../../components/Main";

const Page = () =>
{
    return (

        <ContainerPage>
            <TitlePage>
                <BeenhereIcon/>Seja Bem-vindo
            </TitlePage>
        </ContainerPage>
    );
}

export default Page;