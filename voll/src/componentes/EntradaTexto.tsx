import { FormControl, ITextProps, Input } from "native-base";

interface InputProps extends ITextProps {
    label?: string;
    placeholder?: string;
}

export function EntradaTexto({ label, placeholder, ...rest}: InputProps){
    return (
        <FormControl mt={3}>
            { label }
            <Input
            placeholder={placeholder}
            size='lg'
            w="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={3}
            {...rest}
            />
      </FormControl>
    )
}