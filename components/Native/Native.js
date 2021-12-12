import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Menu,
    HamburgerIcon,
    Box,
    Pressable,
    Center,
    NativeBaseProvider,
  } from "native-base";

const Native = () => {
    return (
        <NativeBaseProvider>
        <Center flex={1} px="3">
        <Box h="80%" w="90%" alignItems="flex-start">
      <Menu
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          )
        }}
      >
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
      </Menu>
    </Box>
        </Center>
      </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({})

export default Native;
