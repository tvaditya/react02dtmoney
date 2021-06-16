import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import { Container, TransactionTypeContainer, RadioBox} from './styles';
import {FormEvent, useState} from "react";
import {useTransactions} from "../../hooks/useTransactions";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={"react-modal-overlay"}
            className={"react-modal-content"}
        >
            <button
                type={"button"}
                onClick={onRequestClose}
                className={"react-modal-close"}
            >
                <img src={closeImg} alt={"Close model"} />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Register Transaction</h2>
                <input
                    placeholder={"Title"}
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder={"Value"}
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type={"button"}
                        onClick={() => {setType('deposit');}}
                        isActive={type==='deposit'}
                        activeColor={"green"}
                    >
                        <img src={incomeImg} alt={"Income"} />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        type={"button"}
                        onClick={() => {setType('withdrawal');}}
                        isActive={type==='withdrawal'}
                        activeColor={'red'}
                    >
                        <img src={outcomeImg} alt={"Outflow"} />
                        <span>Outflow</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder={"Category"}
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type={"submit"}>
                    Register
                </button>
            </Container>
        </Modal>
    )
}