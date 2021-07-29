import * as React from 'react'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'

import Checkbox from '@/components/checkbox'
import { Slider } from '@material-ui/core'
import { Country, Indicator, IndicatorData } from '@/types'
import { createApiClient } from '@/services/api'

const Container = styled.div`
  display: flex;
`
const List = styled.div`
  flex: 1;
  padding: 20px;

  & > h2 {
    border-bottom: 2px solid var(--black);
    width: 50%;
  }
`

const Main = styled.div`
  flex: 3;
  padding: 20px;

  display: flex;
  flex-direction: column;
`

const CheckboxList = styled.div`
  margin: 5px 0px;
  height: 70vh;
  overflow: auto;
`

const YearSelector = styled.div`
  margin: 5px 0px;

  & > h1 {
    width: 100%;
    text-align: center;
  }
`

const ChartContent = styled.div`
  flex-grow: 1;
  height: 200px;

  h3 {
    text-align: center;
  }

  p {
    margin: 10px 0px;
  }
`

type HomeProps = {
  countries: Country[]
  indicators: Indicator[]
}

const api = createApiClient()

const colors = Array.from({ length: 12 }, (_, i) => `hsl(${i * 30}, 100%, 50%)`)

type IndicatorResponseData = {
  year: number
  [key: string]: number
}

type FilterResponse = {
  [key: string]: IndicatorResponseData[]
}

export default function Home({ countries, indicators }: HomeProps) {
  const [yearInterval, setYearInterval] = React.useState<number[]>([1960, 2020])
  const [chartData, setChartData] = React.useState<FilterResponse>()
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
      .get<FilterResponse>('/indicator/filter', {
        params: {
          indicators: selectedIndicatorsId,
          countries: selectedCountriesId
        }
      })
      .then(r => {
        setChartData(r.data)
      })
      .catch(error => console.log(error.data))
  }, [selectedCountriesId, selectedIndicatorsId])

  function filterChartDataList() {
    if (!chartData) return
    let newChartData: FilterResponse = {}
    selectedIndicatorsId.forEach(ind => {
      const indicator = chartData[ind]

      const filteredList = indicator.filter(
        i => i.year >= yearInterval[0] && i.year <= yearInterval[1]
      )
      Object.assign(newChartData, { [ind]: filteredList })
    })

    setChartData(newChartData)
  }

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
            onChangeCommitted={() => filterChartDataList()}
          />
        </YearSelector>
        {!!chartData ? (
          <ChartContent>
            {indicators
              .filter(indicator => selectedIndicatorsId.includes(indicator.id))
              .map(indicator => {
                const indicatorChartData = chartData[indicator.id]
                return (
                  <React.Fragment key={indicator.id}>
                    <h3>{indicator.name}</h3>
                    <ResponsiveContainer width="100%" height="50%">
                      <LineChart
                        width={500}
                        height={100}
                        data={indicatorChartData}
                        stackOffset="expand"
                        syncId="anyid"
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="year"
                          domain={[0, 'dataMax + 1000']}
                          /* tickFormatter={toPercent} */
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {selectedCountriesId.map((id, i) => {
                          return (
                            <Line
                              type="monotone"
                              name={
                                countries.find(c => c.id === id)?.name || id
                              }
                              key={id}
                              dataKey={id}
                              stroke={colors[i]}
                              fill={colors[i]}
                            />
                          )
                        })}
                      </LineChart>
                    </ResponsiveContainer>
                  </React.Fragment>
                )
              })}
          </ChartContent>
        ) : null}
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
