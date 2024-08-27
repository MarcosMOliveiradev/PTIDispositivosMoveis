import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Image, VStack, Text, Center } from "native-base";

import CaloriesIco from '../assets/fire_115156.svg';
export type menuDTO = {
    id: string
    nome: string
    caloria: number
    valor: number
    image: string | null
}
type props = TouchableOpacityProps & {
    data: menuDTO
}
import menuDefault from '../assets/menuDefault.png';
export function MenuCard({ data, ...rest }: props) {
    return (
        <TouchableOpacity
            // onPress={()}
            id={data.id}
            {...rest}
        >
            <HStack ml={10} mt={2} w='75%' borderRadius={10} alignItems="center">
                <VStack ml={2} flex={1}>
                    <Text fontSize="20px" fontWeight={"bold"} mt={2}>{data.nome}</Text>
                    <HStack alignItems={"center"}>
                        <CaloriesIco width={28} height={28}/>
                        <Text fontSize="15px" mt={2}>{data.caloria} Calorias</Text>
                    </HStack>
                    <Text fontSize="15px" color={"yellow.600"} mt={2}>R$ {data.valor}</Text>
                </VStack>
                <Image
                    source={data.image ? {uri: data.image} : menuDefault}
                    alt={data.nome}
                    width={32}
                    height={32}
                />
            </HStack>
        </TouchableOpacity>
    );
}