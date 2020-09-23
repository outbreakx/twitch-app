import styled from 'styled-components/native';
import Ico from 'react-native-vector-icons/FontAwesome';


export const Container =  styled.View`
	height: 40px;
	flex-direction: row;
	align-items: center;

	background-color: black;
`;

export const ContainerLeft =  styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const ContainerRight =  styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	margin-right: 10px;
`;


export const Icon = styled(Ico)`
	margin-left: ${props => props.first ? '0' : '15'}px;
`;