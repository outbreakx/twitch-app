import styled from 'styled-components/native';


export const Container =  styled.View`
	flex-direction: row;
	margin-top: 10px;
`;

export const StreamContent = styled.View`
	margin-left: 10px;
`;
export const StreamImage = styled.Image`
	width: 150px;
	height: 100px;
`;
export const StreamTitle = styled.Text`
	color: white;
	font-size: 18px;
`;
export const StreamDescription = styled.Text`
	color: grey;
	font-size: 14px;
	width: 300px;
`;
export const StreamCategory = styled.Text`
	color: grey;
	font-size: 12px;
`;
export const StreamTags = styled.View`
	margin-top: 15px;
	flex-flow: row;
	width: 280px;
	overflow: hidden;
`;

export const ImageContainer = styled.View`

`;