import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Image, VStack, Text } from "native-base";

import { menuDTO } from "../dtos/menuDTO";

type props = TouchableOpacityProps & {
    data: menuDTO
}

import menuDefault from '../assets/menuDefault.png'

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
                    <Text fontSize="15px" mt={2}>{data.caloria} Calorias</Text>
                    <Text fontSize="15px" mt={2}>R$ {data.valor}</Text>
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