import './App.css';

function Header() {
    return (
        <div className="header">Danna´s Clothes</div>
    );
}

function CardWrapper() {
    const store = [
        {
            img: 'img/ropa1.jpeg',
            name: 'Chamarra Levis',
            price: '$567'
        },
        {
            img: 'img/ropa2.jpeg',
            name: 'Chamarra Cuadra',
            price: '$6777'
        },
        {
            img: 'img/ropa3.jpeg',
            name: 'Chamarra Calvin',
            price: '$3000'
        },
        {
            img: 'img/ropa4.jpeg',
            name: 'Camisa Polo',
            price: '$3500'
        },
        {
            img: 'img/ropa5.jpeg',
            name: 'Camisa Polo',
            price: '$3600'
        },
        {
            img: 'img/ropa6.jpeg',
            name: 'Pantalon chays',
            price: '$457'
        },
        {
            img: 'img/ropa7.jpeg',
            name: 'Pantalon 5.7',
            price: '$890'
        },
        {
            img: 'img/ropa8.jpeg',
            name: 'Pantalon multicam',
            price: '$900'
        },
        {
            img: 'img/ropa9.jpeg',
            name: 'Calcetines Nike',
            price: '$200'
        },
        {
            img: 'img/ropa10.jpeg',
            name: 'Calcetines adidas',
            price: '$150'
        },
        {
            img: 'img/ropa11.jpeg',
            name: 'Gorro',
            price: '$300'
        },
        {
            img: 'img/ropa12.jpeg',
            name: 'Gorro Nike',
            price: '$285'
        },
        {
            img: 'img/ropa13.jpeg',
            name: 'Gorro Nike',
            price: '$245'
        },
            {img: 'img/ropa14.jpeg',
            name: 'Camisa de béisbol',
            price: '$699'
        },
        {
            img: 'img/ropa15.jpeg',
            name: 'Camisa de béisbol',
            price: '$699'
        },
        {
            img: 'img/ropa16.jpeg',
            name: 'Camisa de béisbol',
            price: '$699'
        },
    ]

    return (
        <div className="card-wrapper">
            {
                store.map((chamarra, idx) => <Card key={idx} img={chamarra.img} name={chamarra.name} price={chamarra.price} />)
            }
        </div>
    );
}

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} />
            <p className="name">{props.name}</p>
            <p className="price">{props.price}</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <CardWrapper />
        </div>
    );
}

export default App;
