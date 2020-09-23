import React from 'react';


import {Container, ContainerLeft, ContainerRight, Icon} from './styles';

import {Text, View} from 'react-native';

export default function Header() {
	return <Container>
		<ContainerLeft>
			<Icon name='user-circle' color='white' size={24} first/>
		</ContainerLeft>
		<ContainerRight>
			<Icon name='bell' color='white' size={24}/>
			<Icon name='comment' color='white' size={24}/>
			<Icon name='search' color='white' size={24}/>
		</ContainerRight>		
	</Container>
}