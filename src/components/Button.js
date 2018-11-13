import React, { Component } from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableHighlight`
  width: 130;
  height: 40;
  background-color: ${props => props.theme.CYAN};
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20;
  color: ${props => props.theme.VIVIDWHITE};
`;

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props;

    return (
      <ButtonContainer underlayColor={theme.CYAN} onPress={onPress}>
        <Text>{text}</Text>
      </ButtonContainer>
    );
  }
}

export default withTheme(Button);
