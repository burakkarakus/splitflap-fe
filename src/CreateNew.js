import React, { useState } from 'react'
import App from './App'
import CustomInput from './components/CustomInput/CustomInput';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const handleClick = () => {
    const mergedText = []
    for (let i of document.querySelectorAll(
        `input[name*=flappingInput]`
    )) {
        mergedText.push(i.value);
    }
    alert("clicked : " + mergedText.join(''))
}

const CreateNew = () => {
    const [state, setState] = useState('');
    return (
        <><App />
            <Container className='marginalized'>
                <div className='align-center'>
                    <h4>Panonuzda görmek istediğiniz harfleri sırasıyla yazınız:</h4>
                    <br />

                    <CustomInput stateChanger={setState} name="1" />
                    <CustomInput stateChanger={setState} name="2" />
                    <CustomInput stateChanger={setState} name="3" />
                    <CustomInput stateChanger={setState} name="4" />
                    <CustomInput stateChanger={setState} name="5" />
                    <CustomInput stateChanger={setState} name="6" />
                    <CustomInput stateChanger={setState} name="7" />
                    <CustomInput stateChanger={setState} name="8" />
                    <CustomInput stateChanger={setState} name="9" />
                    <CustomInput stateChanger={setState} name="10" />
                    <CustomInput stateChanger={setState} name="11" />
                    <CustomInput stateChanger={setState} name="12" />
                    <br />
                    <br />
                    <Button variant="success" onClick={() => handleClick()}>Gönder</Button>{' '}
                </div>
            </Container></>
    )
}

export default CreateNew