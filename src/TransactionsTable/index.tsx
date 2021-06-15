import { Container } from "./styles";
import {useEffect} from "react";

export function TransactionsTable() {
    useEffect(()=> {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Value</th>
                    <th>Category</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Software Project</td>
                        <td className={"deposit"}>R$5000</td>
                        <td>Development</td>
                        <td>10/06/2021</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className={"withdrawal"}>- R$1500</td>
                        <td>Home&Care</td>
                        <td>11/06/2021</td>
                    </tr>
                    <tr>
                        <td>Software Consultory</td>
                        <td className={"deposit"}>R$3000</td>
                        <td>Desenvolvimento</td>
                        <td>12/06/2021</td>
                    </tr>
                    <tr>
                        <td>Supermarket</td>
                        <td className={"withdrawal"}>- R$500</td>
                        <td>Food</td>
                        <td>13/06/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}