const company = {
	name: 'Название компании',
	slogan: 'Самая клевая компания',
	logo: 'img/logo.png',
	tel: [
		'88007553535',
		'+74991234567'
	],
	email: 'info@name.ru',
	copyright: '&copy; 2012&ndash;2016 ЗАО &laquo;Компания&raquo;',
	formatTel: function(tel) {
		const telFormatted = tel[0] == '+' ? `${tel.substr(0, 2)} ${tel.substr(2, 3)} ${tel.substr(5, 3)}-${tel.substr(8, 2)}-${tel.substr(10, 2)}` : `${tel[0]} ${tel.substr(1, 3)} ${tel.substr(4, 3)}-${tel.substr(7, 2)}-${tel.substr(9, 2)}`;
		return telFormatted
	}
}

const navSections =[
	{
		en: 'main',
		ru: 'главная'
	},
	{
		en: 'catalogue',
		ru: 'каталог'
	},
	{
		en: 'delivery',
		ru: 'доставка и оплата'
	},
	{
		en: 'price-list',
		ru: 'прайс-лист'
	},
	{
		en: 'contacts',
		ru: 'контакты'
	}
]

const developer = {
	company: 'компания &laquo;Компания&raquo;',
	link: 'mail@developer.com',
	logo: 'img/developer.png'
}

const categories = [
	{
		name: 'Автомобили',
		submenu: [
			{
				name: 'Легковые'
			},
			{
				name: 'Грузовые'
			}
		]
	},
	{
		name: 'Бытовая техника',
		submenu: [
			{
				name: 'Микроволновки'
			},
			{
				name: 'Холодильники'
			},
			{
				name: 'Посудомоечные машины'
			},
			{
				name: 'Чайники',
				active: true
			}			
		],
		active: true
	},
	{
		name: 'Мобильная техника',
		submenu: [
			{
				name: 'Смартфоны', 
			},
			{
				name: 'планшеты'
			}
		]
	},
	{
		name: 'Компьютеры'
	},
	{
		name: 'Одежда',
		submenu: [
			{
				name: 'куртки', 
			},
			{
				name: 'пальто'
			}
		]
	},
	{
		name: 'Недвижимость',
	}
]

const catalogue = {
	text: [
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	],
	items: [
		{
			name: 'Лучший чайник',
			img: 'img/item_placeholder.png',
			price: '1900',
			id: 1223,
			link: ''
		},
		{
			name: 'Так себе чайник',
			img: 'img/item_placeholder.png',
			price: '500',
			id: 4354,
			link: ''
		},
		{
			name: 'Дорогой чайник',
			img: 'img/item_placeholder.png',
			price: '34000',
			id: 4543,
			link: ''
		},
		{
			name: 'Чайник с&nbsp;длинным и&nbsp;непонятным названием',
			img: 'img/item_placeholder.png',
			price: '1234',
			id: 9873,
			link: ''
		},
		{
			name: 'Чайник с&nbsp;семизначной ценой',
			img: 'img/item_placeholder.png',
			price: '1234567',
			id: 9873,
			link: ''
		},
		{
			name: 'Очень дешевый чайник',
			img: 'img/item_placeholder.png',
			price: '67',
			id: 9873,
			link: ''
		},
	],
	formatPrice: function(item) {
		let price = item.price;
		const digitGroups = Math.floor(price.length / 3);
		let priceArr = [];
		for (let i = 0; i <= digitGroups; i++) {
			let group = ''
			if (price.length >= 3) {
				group = price.slice(-3);
				price = price.slice(0, -3);			
			} else {
				group = price
			}
			priceArr.unshift(group);
			if (price.length == 0) {
				break
			}
		}
		return priceArr.join(' ')
	}
}

const slides = [
	'img/slide1.png',
	'img/slide2.png'
]

exports.locals = {
	company: company,
	navSections: navSections,
	developer: developer,
	categories: categories,
	catalogue: catalogue,
	slides: slides
}
