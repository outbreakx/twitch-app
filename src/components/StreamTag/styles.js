import styled from 'styled-components/native';


export const Container = styled.View`
	background-color: grey;
	border-radius: 10px;
	padding: 5px;
	margin-left: ${props => props.id > 0 ? '10' : '0'}px;
`;


export const TagText = styled.Text`
	font-size: 12px;
	color: white;
`;