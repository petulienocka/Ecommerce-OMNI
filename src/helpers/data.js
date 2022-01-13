const products = [
    {
        id: 1,
        name: 'Boheme',
        image:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Boheme.jpg',
        price: '398',
        sixMonth: '798',
        pay: '398+75',
        android:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/Boheme.glb',
        ios:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/boheme.usdz',
        chair: {
            name: 'Boheme Swivel Chair',
            description:
                'This Boheme Swivel Chair is a top-quality office chair with more Danish design heritage than any other office chair in the world, designed in 1958 by the inventor of the double-wheel caster. Its high-quality oak back and plant-tanned Oeko-tex certified leather seat makes it simply one of the coolest office chairs you can imagine.',
            price: ' 199',
            dimensions: 'H: 79 cm SH: 38-51 cm D: 56 cm W: 56 cm',
            image:
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Cognac.png',
            selected: 'Cognac',
            colors: {
                cognac: {
                    name: 'Cognac',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Cognac.png',
                    hex: '#b97a56',
                    class: 'cognac',
                },
                coal: {
                    name: 'Coal',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Coal.png',
                    hex: 'black',
                    class: 'coal',
                },
            },
        },
        desk: {
            name: 'Boheme Elevation Desk',
            description:
                "This Boheme Elevation Desk is a brilliant multi-purpose mechanical elevation desk that is mobile, portable, foldable, and writable. This desk doubles as a whiteboard and is perfect for smaller spaces or to put away in the closet after the work day, if the kids don't highjack it to draw on it.",
            price: ' 199',
            dimensions: 'H: 71.5-113 cm D: 60 cm W: 100 cm',
            image:
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/White-Eclipse.png',
            selected: 'White',
            colors: {
                white: {
                    name: 'White',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/White-Eclipse.png',
                    hex: 'white',
                    class: 'white',
                },
            },
        },
    },
    {
        id: 2,
        name: 'Rebel',
        image:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Rebel.jpg',
        price: '448',
        sixMonth: '848',
        pay: '448+75',
        android:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/Deluxe.glb',
        ios:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/deluxe.usdz',
        chair: {
            name: 'Deluxe Chair',
            description:
                'This Deluxe Swivel Chair is a top-quality and utterly luxurious office chair, and it has more Danish design heritage than any other office chair in the world, designed in 1958 by the inventor of the double-wheel caster. It is fully-upholstered in gorgeous plant-tanned Oeko-tex certified leather, which makes it soft, plush, and simply superior in every way.',
            price: ' 249',
            dimensions: 'H: 79 cm SH: 38-51 cm D: 56 cm W: 56 cm',
            image:
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Deluxe-Cognac.png',
            selected: 'Cognac',
            colors: {
                cognac: {
                    name: 'Cognac',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Deluxe-Cognac.png',
                    hex: '#b97a56',
                    class: 'cognac',
                },
                coal: {
                    name: 'Coal',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Deluxe-Black.png',
                    hex: 'black',
                    class: 'coal',
                },
            },
        },
        desk: {
            name: 'Boheme Elevation Desk',
            description:
                "This Boheme Elevation Desk is a brilliant multi-purpose mechanical elevation desk that is mobile, portable, foldable, and writable. This desk doubles as a whiteboard and is perfect for smaller spaces or to put away in the closet after the work day, if the kids don't highjack it to draw on it.",
            price: ' 199',
            dimensions: 'H: 71.5-113 cm D: 60 cm W: 100 cm',
            image:
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/White-Eclipse.png',
            selected: 'White',
            colors: {
                white: {
                    name: 'White',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/White-Eclipse.png',
                    hex: 'white',
                    class: 'white',
                },
            },
        },
    },
    {
        id: 3,
        name: 'Deluxe',
        image:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Luxe.jpg',
        price: '498',
        sixMonth: '998',
        pay: '498+75',
        android:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/Rebel.glb',
        ios:
            'https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/rebel.usdz',
        chair: {
            name: 'Deluxe Swivel Chair',
            description:
                'This Deluxe Swivel Chair is a top-quality and utterly luxurious office chair, and it has more Danish design heritage than any other office chair in the world, designed in 1958 by the inventor of the double-wheel caster. It is fully-upholstered in gorgeous plant-tanned Oeko-tex certified leather, which makes it soft, plush, and simply superior in every way.',
            price: ' 249',
            dimensions: 'H: 79 cm SH: 38-51 cm D: 56 cm W: 56 cm',
            image:
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Deluxe-Cognac.png',
            selected: 'Coal',
            colors: {
                cognac: {
                    name: 'Cognac',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Deluxe-Cognac.png',
                    hex: '#b97a56',
                    class: 'cognac',
                },
                coal: {
                    name: 'Coal',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Kevi-Deluxe-Black.png',
                    hex: 'black',
                    class: 'coal',
                },
            },
        },
        desk: {
            name: 'Deluxe Elevation Desk',
            description:
                'The Deluxe Elevation Desk sports a beautiful table top in linoleum, framed with natural oak and supported by a top-of-the-line Linak elevation system, which makes ergonomic work incredibly classy and easy. Style, durability, and comfort all come together in this all-Danish, handmade classic for the future of work.',
            price: ' 249',
            dimensions: 'H: 63-128 cm D: 70 cm W: 140 cm',
            image:
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Desk-Lake.png',
            selected: 'Lake',
            colors: {
                lake: {
                    name: 'Lake',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Desk-Lake.png',
                    hex: '#3a4a53',
                    class: 'lake',
                },
                black: {
                    name: 'Black',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Desk-Coal.png',
                    hex: 'black',
                    class: 'black',
                },
                moss: {
                    name: 'Moss',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Desk-Moss.png',
                    hex: '#848a73',
                    class: 'moss',
                },
                pebble: {
                    name: 'Pebble',
                    image:
                        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Desk-Pebble.png',
                    hex: '#b3afa4',
                    class: 'pebble',
                },
            },
        },
    },
];

export { products };
