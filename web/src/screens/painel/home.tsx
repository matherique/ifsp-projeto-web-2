import * as React from 'react'
import styled from 'styled-components'

import Checkbox from '@/components/checkbox'
import { Slider } from '@material-ui/core'
import { Country, Indicator } from '@/types'
import { createApiClient } from '@/services/api'

const Container = styled.div`
  display: flex;
`
const List = styled.div`
  flex: 1;
  padding: 20px;

  & > h2 {
    border-bottom: 2px solid var(--black2);
    width: 50%;
  }
`

const Main = styled.div`
  flex: 3;
  padding: 20px;
`

const CheckboxList = styled.div`
  margin: 5px 0px;
  height: 60vh;
  overflow: auto;
`

const YearSelector = styled.div`
  margin: 5px 0px;

  & > h1 {
    width: 100%;
    text-align: center;
  }
`

type HomeProps = {
  countries: Country[]
  indicators: Indicator[]
}

const api = createApiClient()

export default function Home({ countries, indicators }: HomeProps) {
  const [yearInterval, setYearInterval] = React.useState<number[]>([1960, 2020])
  const [selectedCountriesId, setSelectedCountriesId] = React.useState<
    string[]
  >([])
  const [selectedIndicatorsId, setSelectedIndicatorsId] = React.useState<
    string[]
  >([])

  function handleOnChangeCountry(isChecked: boolean, id: string) {
    if (!isChecked) {
      setSelectedCountriesId(selectedCountriesId.filter(c => c !== id))
      return
    }

    setSelectedCountriesId(old => [...old, id])
  }

  function handleOnChangeIndicator(isChecked: boolean, id: string) {
    if (!isChecked) {
      setSelectedIndicatorsId(selectedIndicatorsId.filter(i => i !== id))
      return
    }

    setSelectedIndicatorsId(old => [...old, id])
  }

  React.useEffect(() => {
    if (!selectedCountriesId.length || !selectedIndicatorsId.length) return

    api
      .get('/indicator/filter', {
        params: {
          indicators: selectedIndicatorsId,
          countries: selectedCountriesId,
          start: yearInterval[0],
          end: yearInterval[1]
        }
      })
      .then(r => console.log(r))
      .catch(error => console.log(error.data))
  }, [selectedCountriesId, selectedIndicatorsId, yearInterval])

  return (
    <Container>
      <List>
        <h2>Indicador</h2>
        <CheckboxList>
          {indicators?.map(indicator => (
            <Checkbox
              key={indicator.id}
              name={indicator.code}
              label={indicator.name}
              onChange={e =>
                handleOnChangeIndicator(e.target.checked, indicator.id)
              }
            />
          ))}
        </CheckboxList>
      </List>
      <Main>
        <YearSelector>
          <h1>Anos</h1>

          <Slider
            value={yearInterval}
            onChange={(_, newValue) => setYearInterval(newValue as number[])}
            valueLabelDisplay="on"
            min={1960}
            step={1}
            max={2020}
            onChangeCommitted={() => console.log(yearInterval)}
          />
        </YearSelector>
      </Main>
      <List>
        <h2>Países</h2>
        <CheckboxList>
          {countries?.map(country => (
            <Checkbox
              key={country.id}
              name={country.code}
              label={country.name}
              onChange={e =>
                handleOnChangeCountry(e.target.checked, country.id)
              }
            />
          ))}
        </CheckboxList>
      </List>
    </Container>
  )
}
