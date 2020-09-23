import React from 'react';

import {
	Container,
	TagText
} from './styles'

export default function Stream({id = 0,value}) {
	return <Container id={id}>
		<TagText>{value}</TagText>
	</Container>
}