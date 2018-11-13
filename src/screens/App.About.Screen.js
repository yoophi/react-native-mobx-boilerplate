import React, { Component } from "react";
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
class AppAboutScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>{this.props.navigation.state.routeName}</TitleText>
        <DefaultText>
          DemostrationVariable:{" "}
          {ApplicationState.AppGlobalState.DemostrationVariable.toString()}
        </DefaultText>
      </ContainerView>
    );
  }
}

export default AppAboutScreen;
