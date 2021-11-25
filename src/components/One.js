import React from "react";
import { ImageBackground, StyleSheet} from "react-native";
import { Input, Icon, Stack, NativeBaseProvider, Text } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"

const image = { uri: "https://i.ibb.co/8D7m95K/Ellipse-1.png" };
export const One = () => {
  return (
    <>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Stack space={4} w="100%" alignItems="center" style={styles.middle}>
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputRightElement={
          <Icon
            as={<MaterialIcons name="visibility-off" />}
            size={5}
            mr="2"
            color="muted.400"
          />
        }
        placeholder="Password"
      />
    </Stack>
    </ImageBackground>
    <Text fontSize="3xl">Sign Up</Text>
 
    </>
  )
}
const styles = StyleSheet.create({
    image: {
      height: 300,
      width: "100%",
    },
    middle: {
        marginTop: "20%",
        flex: 1,
        justifyContent: "center",
      }
  });
export default () => {
  return (
    <NativeBaseProvider>
        <One />
    </NativeBaseProvider>
  )
}
