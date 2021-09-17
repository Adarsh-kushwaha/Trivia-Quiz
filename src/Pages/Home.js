import React,{Fragment} from 'react'
import Form from '../Components/Form/Form'
import Header from '../Components/Layout/Header'

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <div className="md:grid grid-cols-2 gap-4 px-8  justify-between">
                <div><h2 className="text-4xl font-semibold pt-8 px-8">Give General Knowledge Quiz Now...</h2></div>
                <Form/>

            </div>
        </Fragment>
    )
}

export default Home
