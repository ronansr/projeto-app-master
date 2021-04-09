import React, { useState } from 'react';
import { Container, Text, Form, Input, Button } from './styles';

export default function Home(){
    const [ name, setName] = useState('') 
    const [ email, setEmail ] = useState('') 
    const [ phone, setPhone ] = useState('') 
    const [ addressZip, setAddressZip ] = useState('') 
    const [ addressStreet, setAddressStreet ] = useState('') 
    const [ addressNumber, setAddressNumber ] = useState('') 
    const [ addressComplement, setAddressComplement ] = useState('') 
    const [ addressDistrict, setAddressDistrict ] = useState('') 
    const [ addressCity, setAddressCity ] = useState('') 
    const [ addressState, setAddressState ] = useState('')
    const [ borderColors, setBorderColors ] = useState({
        name: 'transparent',
        email: 'transparent',
        phone: 'transparent',
        addressZip: 'transparent',
        addressStreet: 'transparent',
        addressNumber: 'transparent',
        addressComplement: 'transparent',
        addressDistrict: 'transparent',
        addressCity: 'transparent',
        addressState: 'transparent'
    });
    const [ sending, setSending ] = useState(false);
    const [ status, setStatus ] = useState(false); //controla a exibição do formuário

    const maskAddressZip = () => {
        if(addressZip.length === 5)
            setAddressZip(addressZip.slice(0,5) + '-' + addressZip.slice(5));
    }

    const maskPhone = () => {
        if(phone.length === 1)
            setPhone('(' + phone);
        if(phone.length === 3)
            setPhone(phone + ')');
        if(phone.length === 9)
            setPhone(phone + '-');
    }
    

    const sendForm = async (event) => {
        event.preventDefault();
        const status = checkFields();
        if(status){
            try{
                setSending(true);
                const response = await fetch(`https://simple-api-selection.herokuapp.com/submit/`, 
                {
                    method: 'POST', 
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        addressZip: addressZip,
                        addressStreet: addressStreet,
                        addressNumber: addressNumber,
                        addressComplement: addressComplement,
                        addressDistrict: addressDistrict,
                        addressCity: addressCity,
                        addressState: addressState
                    })
                });

                console.log('resposta da api: ', JSON.stringify(response));
                
                setSending(false);
                
                if(response.ok)
                    setStatus(true);
                else {
                    alert('Poxa, tente novamente mais tarde...');
                }
                

            } catch(e) {
                console.log('Erro ao fazer post');
            }

        } else {
            alert('Preencha todos os campos!');
        }
    }

    const checkFields = () => {

        if(name === ''){
            setBorderColors({name: 'red'});
            return false;
        }

        if(email === ''){
            setBorderColors({email: 'red'});
            return false;
        }

        if(phone === '' || phone.length < 14){
            setBorderColors({phone: 'red'});
            return false;
        }

        if(addressZip === '' || addressZip.length < 9){
            setBorderColors({addressZip: 'red'});
            return false;
        }

        if(addressStreet === ''){
            setBorderColors({addressStreet: 'red'});
            return false;
        }

        if(addressNumber === ''){
            setBorderColors({addressNumber: 'red'});
            return false;
        }

        if(addressComplement === ''){
            setBorderColors({addressComplement: 'red'});
            return false;
        }

        if(addressDistrict === ''){
            setBorderColors({addressDistrict: 'red'});
            return false;
        }

        if(addressCity === ''){
            setBorderColors({addressCity: 'red'});
            return false;
        }

        if(addressState === ''){
            setBorderColors({addressState: 'red'});
            return false;
        }

        return true;
    }

    return(
        <Container>
            <Text>Cadastre-se para receber os adesivos</Text>
            {!status && <Form onSubmit={sendForm} >
                <Input placeholder='Nome' type="text" onChange={event => setName(event.target.value)} width={'25%'} borderColor={borderColors.name}/>
                <Input placeholder='Email' type="text" onChange={event => setEmail(event.target.value)} width={'20%'} borderColor={borderColors.email}/>
                <Input placeholder='Telefone' type="phone" value={phone} onChange={event => setPhone(event.target.value)} width={'15%'} maxLength={14} onKeyPress={maskPhone} borderColor={borderColors.phone}/>
                <Input placeholder='CEP' type="text" value={addressZip} onChange={event => setAddressZip(event.target.value)} width={'10%'} maxLength={9} onKeyPress={maskAddressZip} borderColor={borderColors.addressZip}/>
                <Input placeholder='Logradouro' type="text" onChange={event => setAddressStreet(event.target.value)} width={'30%'} borderColor={borderColors.addressStreet}/>
                <Input placeholder='Número' type="text" onChange={event => setAddressNumber(event.target.value)} width={'100px'} borderColor={borderColors.addressNumber}/>
                <Input placeholder='Complemento' type="text" onChange={event => setAddressComplement(event.target.value)} borderColor={borderColors.addressComplement}/>
                <Input placeholder='Bairro' type="text" onChange={event => setAddressDistrict(event.target.value)} borderColor={borderColors.addressDistrict}/>
                <Input placeholder='Cidade' type="text" onChange={event => setAddressCity(event.target.value)} borderColor={borderColors.addressCity}/>
                <Input placeholder='Estado' type="text" onChange={event => setAddressState(event.target.value)} maxLength={2} borderColor={borderColors.addressState}/>
               
                <Button type={sending? 'reset': 'submit'} ><span>{sending? 'Enviando...' : 'Enviar'}</span> </Button>
            </Form>}

            {status && <Text>Muito bom! Você receberá seus adesivos em alguns dias</Text>}
        </Container>
    );
}