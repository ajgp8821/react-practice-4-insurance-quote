import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ summary, setSummary ] = useState({
    quote:0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [ load, setLoad ] = useState(false);

  // Extraer datos
  const { quote, data } = summary;

  return (
    <Container>
      <Header
        title="Cotizador de seguros"
      />

      <FormContainer>
        <Form
          setSummary={setSummary}
          setLoad={setLoad}
        />
        
        {load ? <Spinner /> : null}

        
        {!load
          ?
            <div>
              <Summary
                data={data}
              />
              <Result
                quote={quote}
              />
            </div>
          :
            null
        }
      </FormContainer>
    </Container>
  );
}

export default App;
