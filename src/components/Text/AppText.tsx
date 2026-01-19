
import styled from "styled-components/native";

const NormalText = styled.Text<{marginBottom: number}>`
  font-size: 12px;
  font-weight: normal;
  color: #fff;
  margin-bottom: ${(props) => props.marginBottom ?? 0};
`;

const LargeText = styled.Text`
  font-size: 14px;
  font-weight: ${({fontWeight})=> fontWeight ?? 'normal'};
  color: ${({color}) => color ?? '#fff'};
`;

const XLargeText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({color}) => color ?? '#fff'};
`;

const SubTitleText = styled.Text<{marginBottom: number}>`
  font-size: 18px;
  font-weight: normal;
  color: #fff;
  margin-bottom: ${(props) => props.marginBottom ?? 0};
`;

const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const SubHeadingText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

const HeadingText = styled.Text<{marginTop?: number}>`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: ${(props)=> props.marginTop ?? 0};
`;


export { NormalText, LargeText, XLargeText, HeadingText, SubHeadingText, TitleText, SubTitleText }