import React from 'react'

import styles from './cars.module.css'

const Cars = ({car}) => {

    return (
        <>
            <div className={styles.card}>
                <h1 className={styles.carro}>{car.name}</h1>
                <p className={styles.marca}>O carro é da marca: {car.brand}</p>
                <p>KM: {car.km}</p>
            </div>

        </>

    )
}

export default Cars