import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { firstCapital, translateBrand, translatePlan } from '../helper';

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Summary = ({ data }) => {

    // Extraer datos
    const { brand, year, plan } = data;

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') return null;
    let tBrand = translateBrand(brand);
    let tPlan = translatePlan(plan);

    return (
        <SummaryContainer>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {firstCapital(tBrand)}</li>
                <li>Año: {year}</li>
                <li>Plan: {firstCapital(tPlan)}</li>
            </ul>
        </SummaryContainer>
    );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired,
}
 
export default Summary;
