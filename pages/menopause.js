import React from 'react'
import Banner from './components/Banner';
import BlockTextFive from './components/BlockTextFive';
import CustomerFavorites from './components/CustomerFavorites';
import Layout from './components/Layout';

const Menopause = () => {
    return (
        <>
            <Layout title={'Menopause'}>
                <Banner />
                <CustomerFavorites />
                <BlockTextFive />
            </Layout>
        </>
    )
}

export default Menopause;