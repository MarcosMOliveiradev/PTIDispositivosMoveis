import { ScrollView, Text, VStack } from "native-base";

export function Home() {
    return (
        <ScrollView _contentContainerStyle={{ pb: 8 }}>
            <VStack flex={1} alignItems={"center"} top={8}>
                <Text>Home teste</Text>
            </VStack>
        </ScrollView>
    );
}