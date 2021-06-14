import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import {Container} from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Cash Income</p>
                    <img src={incomeImg} alt={"Cash Income"}/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Cash Outflow</p>
                    <img src={outcomeImg} alt={"Cash Outflow"}/>
                </header>
                <strong>- R$400,00</strong>
            </div>
            <div className={"highlight-background"}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt={"Total"}/>
                </header>
                <strong>R$600,00</strong>
            </div>
        </Container>
    )
}