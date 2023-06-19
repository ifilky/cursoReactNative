import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Login() {
  return ( 
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={ Logo } alt="Logo Voll" />

      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <EntradaTexto
        label='Email'
        placeholder='Insira seu endereço de email'
        />

        <EntradaTexto
        label='Senha'
        placeholder='Insira sua senha'
        />
      </Box>
      
      <Botao>Entrar</Botao>

      <Link mt={2} href='https://alura.com.br'>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">
          Faça seu cadastro!
          </Text> 
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}