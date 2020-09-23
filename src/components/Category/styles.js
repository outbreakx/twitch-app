import styled from 'styled-components/native';
import Ico from 'react-native-vector-icons/FontAwesome';


export const Container =  styled.TouchableOpacity`
	margin-left: ${props => props.id > 0 ? '10' : '0'}px;
`;

export const CategoryImage = styled.Image`
	width: 125px;
	height: 175px;
`;
export const CategoryText = styled.Text`
	color: white;
	padding-left: 5px;
`;