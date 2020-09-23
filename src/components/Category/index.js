import React from 'react';


import {
	Container,
	CategoryImage,
	CategoryText} from './styles';


import ViewsText from '../ViewsText';

export default function Category({id, category}) {
	return <Container id={id}>
		<CategoryImage source={{uri: category.image}} resizeMode="contain"/>
		<CategoryText>{category.name}</CategoryText>
		<ViewsText views={category.views}/>
	</Container>
}