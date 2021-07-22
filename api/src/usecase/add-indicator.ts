import {
  AddIndicatorParams,
  AddIndicatorUseCase
} from '../domain/usecase/add-indicator'
import { IndicatorRepository } from './ports'

/**
 * TODO create individuals usecase to add country, add indicator and add indicator data to separete
 *  */
export class AddIndicator implements AddIndicatorUseCase {
  constructor(private readonly indicatorRepository: IndicatorRepository) {}

  async handle({ data }: AddIndicatorParams): Promise<boolean> {
    const [indicator_code, indicator_name, source_note, source_organization] =
      data
        .toString()
        .split('\r\n')
        .filter(Boolean)
        .slice(1)[0]
        .split(',"')
        .map(l => l?.replace(/"/g, ''))

    await this.indicatorRepository.add({
      code: indicator_code,
      name: indicator_name,
      note: source_note,
      source_organization: source_organization
    })

    return true
  }
}
