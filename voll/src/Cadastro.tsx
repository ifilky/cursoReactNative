import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';


export default function Login() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        {
          id:  1,
          label: "Nome",
          placeholder: "Insira seu nome completo",
        },
        {
          id:  2,
          label: "Email",
          placeholder: "Insira seu email",
        }
      ]
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: "CEP",
          placeholder: "Insira seu CEP",
        }
      ]
    }
  ]

  function avancarSecao(){
    if(numSecao < secoes.length - 1)
      setNumSecao(numSecao+1)
  }
  function voltarSecao(){
    if(numSecao > 0)
      setNumSecao(numSecao-1)
  }

  return ( 
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={ Logo } alt="Logo Voll" />

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>

      <Box>
        {
          secoes[numSecao].entradaTexto.map(entrada => {
            return (
              <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
            )
          })
        }
      </Box>
      
      {numSecao > 0 && <Botao bgColor='gray.400' onPress={() => voltarSecao()}>Voltar</Botao>}
      <Botao onPress={() => avancarSecao()}>Avançar</Botao>
    </VStack>
  );
}