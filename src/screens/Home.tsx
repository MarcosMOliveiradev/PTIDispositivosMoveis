import { ScrollView, Text, VStack, HStack, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { menuDTO } from "../dtos/menuDTO";
import { MenuCard } from "../components/MenuCard";

export function Home() {
    const [menu, setMenu] = useState<menuDTO[]>()

    const teste: menuDTO[] = [
        {
            id: '1',
            nome: 'Beef Burger',
            caloria: 70,
            valor: 12.01,
            image: null
        },
        {
            id: '1',
            nome: 'Beef Burger',
            caloria: 70,
            valor: 12.00,
            image: null
        }
    ]
    useEffect(() => {
        setMenu(teste)
    }, [])

    return (
        <ScrollView _contentContainerStyle={{ pb: 8 }}>
            <VStack flex={1} alignItems={"center"} top={8}>
                    <Text fontSize={20} pb={10}>Menu</Text>
                <HStack alignContent={"center"}>
                    <FlatList
                        data={menu}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <MenuCard data={item}></MenuCard>
                        )}
                    />
                </HStack>
            </VStack>
        </ScrollView>
    );
}