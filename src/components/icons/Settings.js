import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const IconRightContainer = styled.TouchableOpacity`
  height: 100%;
  padding-right: 15;
  justify-content: center;
`;

const Settings = ({ onPress }) => (
  <IconRightContainer onPress={onPress}>
    <Ionicons name="md-settings" size={25} color="white" />
  </IconRightContainer>
);

export default Settings;
