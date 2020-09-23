import React from 'react';


import Category from '../../components/Category';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';

import {Container, SContainer} from './styles';

import DataCategories from '../../data/categories';
import DataStreams from '../../data/streams';


import Stream from '../../components/Stream';
import OfflineChannel from '../../components/OfflineChannel';

export default function Main(){
	return <Container>
		<Title>Following</Title>
		<SubTitle>Followed Categories</SubTitle>
		<SContainer horizontal={true} contentContainerStyle={{}}>
			{DataCategories.map( (item, index) => {
				return <Category category={item} key={index} id={index}/>
			})}
			
		</SContainer>
		
		<SubTitle>Live Channels</SubTitle>
		
		{ DataStreams.map( (item, index) => {
			return <Stream stream={item}/>
		} )}
		

		<SubTitle>Offiline Channels</SubTitle>

		{ DataStreams.map( (item, index) => {
			return <OfflineChannel channel={item}/>
		} )}


	</Container>
}