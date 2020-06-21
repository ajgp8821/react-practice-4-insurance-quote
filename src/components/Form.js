import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { getYearsList, getDifferenceYear, calculateBrand, getPlan } from '../helper';

const Field = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 .5rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({ setSummary, setLoad }) => {

    const [ data, setData ] = useState({
        brand: '',
        year: '',
        plan: ''
    });
    const [ error, setError ] = useState(false);

    // Extraer los valores del state
    const { brand, year, plan } = data;

    // Leer los datos del formulario y colocarlos en el state
    const getInformation = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    // Cuando el usuario presiona submit
    const quoteInsurance = e => {
        e.preventDefault();

        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Una base de 2000
        let result = 2000;

        // Obtener la diferencia de años
        const differenceYear = getDifferenceYear(year);

        // por cada año hay que restar el 3% del valor
        result -= (( differenceYear * 3 ) * result) / 100;

        // European 30%
        // American 15%
        // Asian 5
        result = calculateBrand(brand) * result;
        
        // Basic aumenta 20%
        // Full 50%
        result = parseFloat(getPlan(plan) * result).toFixed(2);

        setLoad(true);

        setTimeout(() =>{
            // Elimina el spinner
            setLoad(false);

            // Total: Pasa la información al componente principal
            setSummary({
                quote: Number(result),
                data,
            });
            
        }, 3000);
    
    }

    const years = getYearsList();

    return (
        <form
            onSubmit={quoteInsurance}
        >
            { error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="american">Americano</option>
                    <option value="european">Europeo</option>
                    <option value="asian">Asiático</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    {years.map(y =>
                        <option
                            key={y}
                            value={y}
                        >{y}</option>
                    )}
                </Select>
            </Field>


            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={getInformation}
                /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan === "full"}
                    onChange={getInformation}
                /> Completo
            </Field>

            <Button
                type="submit"
            >Cotizar</Button>

        </form>
    );
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoad: PropTypes.func.isRequired,
}
 
export default Form;
