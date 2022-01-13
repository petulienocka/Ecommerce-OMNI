import React from 'react';
import { Helmet } from 'react-helmet';

import '../helpers/i18n';
import { useTranslation } from 'react-i18next';

import CTA from '../components/cta';

import './main.scss';

import Hero from '../components/hero';
import BlogIndex from './blogs';
import Banner from '../components/prototypeBanner';
import Main from '../shop/main';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { SimpleGrid, Container } from '@chakra-ui/react';
import { Stack, Heading, Text, Flex } from '@chakra-ui/react';

import Model3d from '../components/3d';
import PlanSelection from '../components/planSelection';
import LandingModal from '../components/landing/modal';

const HomePage = ({
    selectedData,
    onAdd,
    price,
    plan,
    months,
    products,
    setSelectedData,
    setShowSelectedData,
    showSelectedData,
    setPlan,
    setPrice,
    setMonths,
}) => {
    const { t } = useTranslation();

    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setShowModal(true), 3000);
    }, []);

    // const [chairBohemeColor, setChairBohemeColor] = useState([]);
    // const [chairRebelColor, setChairRebelColor] = useState([]);
    // const [chairDeluxeColor, setChairDeluxeColor] = useState([]);
    // const [deskBohemeColor, setDeskBohemeColor] = useState([]);
    // const [deskRebelColor, setDeskRebelColor] = useState([]);
    // const [deskDeluxeColor, setDeskDeluxeColor] = useState([]);

    // function handleColorChair(e) {
    //     e.preventDefault();
    //     let newData = [...products];
    //     let changedItem = {
    //         ...products.find((i) => i.name === selectedData.name),
    //     };
    //     let changedItemIndex = products.findIndex(
    //         (i) => i.name === selectedData.name
    //     );

    //     changedItem.chair.selected = e.target.value;

    //     newData[changedItemIndex] = changedItem;
    //     setChairBohemeColor(newData[0]);
    //     setChairRebelColor(newData[1]);
    //     setChairDeluxeColor(newData[2]);
    // }

    // function handleColorDesk(e) {
    //     e.preventDefault();
    //     let newData = [...products];
    //     let changedItem = {
    //         ...products.find((i) => i.name === selectedData.name),
    //     };
    //     let changedItemIndex = products.findIndex(
    //         (i) => i.name === selectedData.name
    //     );

    //     changedItem.desk.selected = e.target.value;

    //     newData[changedItemIndex] = changedItem;
    //     setDeskBohemeColor(newData[0]);
    //     setDeskRebelColor(newData[1]);
    //     setDeskDeluxeColor(newData[2]);
    // }

    // function notify() {
    //     toast.dark(selectedData.name + ' Package has been added to cart');
    // }

    return (
        <div>
            <Helmet>
                <meta name="description" content={t`description.index`}></meta>
                <meta name="title" content={t`titles.index`}></meta>
                <title>{t`titles.index`}</title>
            </Helmet>

            {showModal ? <LandingModal /> : null}

            <div className="wrapper">
                <Hero />

                <section
                    id="title-section"
                    style={{ textTransform: 'uppercase' }}
                >
                    <h1 id="products">{t`packages.title`}</h1>
                </section>

                <div>
                    <Main
                        products={products}
                        onAdd={onAdd}
                        setSelectedData={setSelectedData}
                        setShowSelectedData={setShowSelectedData}
                    ></Main>
                    {selectedData && showSelectedData ? (
                        <>
                            <Container
                                id="folded"
                                maxW={'8xl'}
                                py={{ base: 10, md: 0 }}
                                px={10}
                                bgColor={'#f9f7f4'}
                                borderBottom={'1px solid black'}
                            >
                                <SimpleGrid
                                    columns={{ base: 1, md: 2 }}
                                    spacing={{ base: 0, md: 10 }}
                                >
                                    <Stack
                                        spacing={4}
                                        pt={{ base: 0, md: '15vh' }}
                                    >
                                        <Heading fontWeight={'normal'}>
                                            <h1 style={{ color: 'black' }}>
                                                {selectedData.name} Package
                                            </h1>
                                        </Heading>
                                        <Text color={'black'} fontSize={'2xl'}>
                                            {price} kr/mo
                                        </Text>

                                        <Stack spacing={10}>
                                            <PlanSelection
                                                setPlan={setPlan}
                                                setPrice={setPrice}
                                                setMonths={setMonths}
                                                item={selectedData}
                                                plan={plan}
                                                months={months}
                                                selectedData={selectedData}
                                            />

                                            {/* <Stack
                                                    direction={'row'}
                                                    align={'center'}
                                                >
                                                    <Stack
                                                        direction={'row'}
                                                        align={'center'}
                                                    >
                                                        {Object.values(
                                                            selectedData.chair
                                                                .colors
                                                        ).map((key) => {
                                                            return (
                                                                <>
                                                                    <ItemButtonChair
                                                                        hex={
                                                                            key.hex
                                                                        }
                                                                        name={
                                                                            key.name
                                                                        }
                                                                        image={
                                                                            key
                                                                        }
                                                                        click={
                                                                            handleColorChair
                                                                        }
                                                                    ></ItemButtonChair>
                                                                </>
                                                            );
                                                        })}
                                                    </Stack>

                                                    <Stack
                                                        direction={'row'}
                                                        align={'center'}
                                                        px={10}
                                                    >
                                                        {Object.values(
                                                            selectedData.desk
                                                                .colors
                                                        ).map((key) => {
                                                            return (
                                                                <>
                                                                    <ItemButtonDesk
                                                                        hex={
                                                                            key.hex
                                                                        }
                                                                        name={
                                                                            key.name
                                                                        }
                                                                        image={
                                                                            key
                                                                        }
                                                                        click={
                                                                            handleColorDesk
                                                                        }
                                                                    ></ItemButtonDesk>
                                                                </>
                                                            );
                                                        })}
                                                    </Stack>
                                                </Stack> */}
                                            <Stack
                                                direction={'row'}
                                                align={'center'}
                                            >
                                                <button
                                                    className="add-cart"
                                                    style={{
                                                        backgroundColor:
                                                            'black',
                                                        color: 'white',
                                                        padding: '0.5rem',
                                                        width: '100%',
                                                    }}
                                                    onClick={() => {
                                                        onAdd(selectedData);
                                                        // notify();
                                                    }}
                                                >
                                                    Add to cart
                                                </button>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Flex>
                                        <Model3d model={selectedData} />
                                    </Flex>
                                </SimpleGrid>
                            </Container>

                            <br />

                            {/* <ToastContainer position="top-right" /> */}
                        </>
                    ) : null}
                </div>

                <Banner />

                <CTA />

                <section style={{ height: '2rem' }}></section>

                {/* <Tip /> */}
                <BlogIndex />

                {/* EMPTY SECTION  */}
                <section style={{ height: '2rem' }}></section>
            </div>
        </div>
    );
};
// function ItemButtonChair(props) {
//     let colorHeaderClassName = `selectedChair ${props.click}`;

//     return (
//         <>
//             <Button
//                 type="button"
//                 value={props.name}
//                 name={props.name}
//                 onClick={props.click}
//                 onMouseEnter={props.enter}
//                 className={colorHeaderClassName}
//                 style={{
//                     backgroundColor: props.hex,
//                     color: props.hex,
//                     border: '1px solid grey',
//                     borderRadius: '0px',
//                 }}
//             />
//         </>
//     );
// }

// function ItemButtonDesk(props) {
//     let colorHeaderClassName = `selectedDesk ${props.click}`;

//     return (
//         <>
//             <Button
//                 type="button"
//                 value={props.name}
//                 name={props.name}
//                 onClick={props.click}
//                 className={colorHeaderClassName}
//                 style={{
//                     backgroundColor: props.hex,
//                     color: props.hex,
//                     border: '1px solid grey',
//                     borderRadius: '0px',
//                 }}
//             />
//         </>
//     );
// }
export default HomePage;
