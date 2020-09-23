import React from 'react';


import {
	Container,
	RContainer,
	OCImage,
	OCName,
	OCVideos,
	Circle
} from './styles';


export default function OfflineChannel({channel}) {
	return <Container>
		<OCImage source={{uri: channel.image}} resizeMode="cover"/>
		<RContainer>
			<OCName>{channel.name}</OCName>
			<OCVideos>{1} new videos</OCVideos>
		</RContainer>
		<Circle/>
	</Container>
}