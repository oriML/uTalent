/**
 * 
 * this component has to have a talk with the backend
 * the FILTER MUST COME FROM SERVER
 * method to do it: user select filter and then clicks on Search button
 * the idea is that a consumer is looking for specific talent and he dosnt care
 * from others. So interactive search experience wouldn't be necessary here
 * 
 */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFilteredCards } from '../../store/features/cards/cards'

import * as S from './style'

const FeedNavbar = ({tags}) => {

    const dispatch = useDispatch();

    const [ checkboxsValues, setCheckboxsValue] = useState([])
    const [ searchValues, setSearchValues] = useState([])

    const handleCheckBoxsValue = e => {
        
        const value = e.target.name;
        
        if(!checkboxsValues.some(v => v === value))
            setCheckboxsValue( p => [ ...p, value ] )
        else 
            setCheckboxsValue( checkboxsValues.filter( v => v !== value) )

    }

    const handleSearchValue = e => {
        
        const values = e.target.value;    
        setSearchValues(values.split(' '))
    }

    const handleSearchInputs = () => {

        dispatch( getFilteredCards(searchValues.concat(checkboxsValues)) )
        
    }

    return(

        <S.SearchBarsWrapper>
            {/* <S.Mui_CheckBoxNavBar bgColor='#00C565'>
                {
                    tags.map(tag => {
                        return <label>
                                    {tag}
                                    <input type="checkbox" name={tag} onClick={handleCheckBoxsValue} />
                                </label>
                    })
                }
               
            </S.Mui_CheckBoxNavBar> */}

            <S.SearchNavBar bgColor='#62BAAC'>

                <input type="search" placeholder='חפש לפי תגית, מקצוע, כישרון' onChange={handleSearchValue}/>

            </S.SearchNavBar>

                
            <S.Mui_Button  onClick={handleSearchInputs} />

        </S.SearchBarsWrapper>

    )
    
}

export default FeedNavbar