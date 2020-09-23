import React from 'react';


import {
	Container,
	Text,
	Circle} from './styles';



export default function ViewsText(props) {
	return <Container style={props.style}>
		<Circle/>
		<Text>{props.views}</Text>
	</Container>
}