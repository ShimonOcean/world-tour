import { KeyboardArrowDownRounded, KeyboardArrowUpOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styles from './CountriesTable.module.css';

const orderBy = (countries, direction) => {
    if (direction === 'asc'){
        return countries.sort((a,b) => a.population > b.population ? 1 : -1)
    }
    if (direction === 'desc'){
        return countries.sort((a,b) => a.population > b.population ? -1 : 1)
    }
    return countries;
}

const SortArrow = ({ direction }) => {
    if (!direction){
        return <></>;
    }

    if (direction === 'asc'){
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRounded color="inherit"/>
            </div>  
        )
    } else {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpOutlinedUp color="inherit"/>
            </div>  
        )
    }
}

const CountriesTable = ({ countries }) => {
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const orderedCountries = orderBy(countries, 'desc');  

    const switchDirection = () => {
        if (!direction){
            setDirection("desc")
        } else if (direction === "desc"){
            setDirection("asc")
        } else {
            setDirection(null)
        }
    }

    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name}>
                    <div>
                    Name 
                    </div>
                    <SortArrow />

                </button>

                <button className={styles.heading_population} onClick={switchDirection}>
                    <div>
                    Population
                    </div>

                    <SortArrow direction={direction}/>
                </button>

            </div>
            
            {orderedCountries.map((country) => (<div className={styles.row}>
                <div className={styles.name} key={styles.name}>{country.name}</div>

                <div className={styles.population} key={styles.population}>{country.population}</div>
            </div>))}
        </div>
    )
}

export default CountriesTable;