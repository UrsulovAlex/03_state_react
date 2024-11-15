import { calculateInvestmentResults, formatter } from '../util/investment.js'


export default function Results({input}) {
    let results = [];
    results = [...calculateInvestmentResults(input, results)];
    if (results.length === 0) {
        return <p className='center'>Invalid input data provided.</p>
    }
    const initialInvestment =  results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;


    return (
        <table id='result'>
            <thead>
                <tr> 
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Ivested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(yearData => {
                    const totalInterset = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterset;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterset)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}