import React from 'react';

import {
	Container,
	StreamImage,
	ImageContainer,
	StreamContent,
	StreamTitle,
	StreamDescription,
	StreamCategory,
	StreamTags,
} from './styles'


import StreamTag from '../StreamTag';
import ViewsText from '../ViewsText';

export default function Stream({stream}) {
	return <Container>
		<ImageContainer>
			<StreamImage source={{uri: stream.image }} resizeMode="stretch"/>
			<ViewsText views={stream.views} style={{marginTop: -25, marginLeft: 5}}/>
		</ImageContainer>
		
		<StreamContent>
			<StreamTitle>{stream.description}</StreamTitle>
			<StreamDescription numberOfLines={1}>{stream.description}</StreamDescription>
			<StreamCategory>{stream.categoryName}</StreamCategory>
			<StreamTags>
				{stream.tags.map( (item, index) => {
					return <StreamTag value={item} key={index} id={index}/>	
				})}
			</StreamTags>
		</StreamContent>
		
	</Container>
}