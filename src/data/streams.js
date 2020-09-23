const Streams =  [...Array(5)].map( (item, index) => {
	index += 1;
	return {
		name: 'name ' + index,
		description: 'description ' + index,
		categoryName: 'category',
		tags: ['English', 'Portuguese'],
		views: index * 1000,
		image: 'https://via.placeholder.com/125x175'
	}
});


export default Streams;