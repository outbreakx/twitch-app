const Categories = [...Array(5)].map( (item, index) => {
	index += 1;
	return {
		name: 'category ' + index,
		image: 'https://via.placeholder.com/125x175',
		views: index * 1000
	}
});

export default Categories;