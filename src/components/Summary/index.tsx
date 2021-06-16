import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import {Container} from "./styles";
import {useContext} from "react";

export function Summary() {
    const transactions = useContext(TransactionsContext);

    console.log(transactions)

    return (
        <Container>
            <div>
                <header>
                    <p>Cash Income</p>
                    <img src={incomeImg} alt={"Cash Income"}/>
                </header>
                <strong>R$8000,00</strong>
            </div>
            <div>
                <header>
                    <p>Cash Outflow</p>
                    <img src={outcomeImg} alt={"Cash Outflow"}/>
                </header>
                <strong>- R$2000,00</strong>
            </div>
            <div className={"highlight-background"}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt={"Total"}/>
                </header>
                <strong>R$6000,00</strong>
            </div>
        </Container>
    )
}