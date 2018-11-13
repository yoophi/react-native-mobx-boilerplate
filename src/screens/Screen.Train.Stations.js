import React, { Component } from "react";
import { Button, Text } from "react-native";
import styled from "styled-components/native";
import ApplicationState from "../store/Application.State.Mobx";
import { observer, inject } from "mobx-react";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.BLACK};
`;

const TitleText = styled.Text`
  font-size: 30;
  color: ${props => props.theme.VIVIDWHITE};
`;

const DefaultText = styled.Text`
  font-size: 12;
  color: ${props => props.theme.VIVIDWHITE};
`;

@inject("ApplicationState")
@observer
class TrainStationsScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>{this.props.navigation.state.routeName}</TitleText>
        <DefaultText>
          DemostrationVariable:{" "}
          {ApplicationState.AppGlobalState.DemostrationVariable.toString()}
        </DefaultText>
        <Button
          title={"Toggle Demo Variable"}
          onPress={() => {
            ApplicationState.AppGlobalState.DemostrationVariable = !ApplicationState
              .AppGlobalState.DemostrationVariable;
          }}
        />
      </ContainerView>
    );
  }
}

export default TrainStationsScreen;
