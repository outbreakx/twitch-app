import styled from 'styled-components/native';
import Ico from 'react-native-vector-icons/FontAwesome';


export const Container =  styled.View`
	flex-direction: row;
	align-items: center;
`;
export const Circle = styled.View`
	width: 16px;
	height: 16px;
	border-radius: 20px;
	border-width: 1px;
	background-color: red;
	margin-right: 5px;
`

export const Text = styled.Text`
	font-size: 16px;
	color: grey;
`;