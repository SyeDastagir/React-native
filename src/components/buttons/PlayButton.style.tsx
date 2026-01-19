import styled from 'styled-components/native'

const PlayButtonStyle = styled.View`
  background-color: ${({backgroundColor}) => backgroundColor ?? '#ffffff'};
  border-radius: 4px;
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  flex: 1;
  height: 40px;
  align-items: center;
  justify-content: center;
`

export {PlayButtonStyle};