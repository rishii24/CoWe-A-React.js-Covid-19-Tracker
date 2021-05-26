import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';

import style from './country.module.css';

import { fetchCountries } from '../../api'

const Country = ({handleCountryChange}) => {

    const [fetchedCountries, setfetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setfetchedCountries(await fetchCountries())
        }

        fetchAPI();
    }, [setfetchedCountries])

    // console.log(fetchedCountries)

    return (
        <FormControl className={style.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country
