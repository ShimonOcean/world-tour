import { KeyboardArrowDownRounded } from '@material-ui/icons';
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

    if (direction === 'desc'){
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRounded/>
            </div>  
        )
    } else {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpRounded/>
            </div>  
        )
    }
}

const CountriesTable = ({ countries }) => {

    const orderedCountries = orderBy(countries, 'desc');
    console.log(orderedCountries);
    console.log(countries)    

    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name}>
                    <div>
                    Name 
                    </div>
                    <SortArrow />

                </button>

                <button className={styles.heading_population}>
                    <div>
                    Population
                    </div>

                    <SortArrow direction="desc"/>
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