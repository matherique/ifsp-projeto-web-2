import {
  GetUserReportDataResponse,
  GetUserReportDataUsecase
} from '../domain/usecase/get-user-report-data'
import { UserRepository } from './ports'

export class GetUserReportData implements GetUserReportDataUsecase {
  constructor(private readonly userRepository: UserRepository) {}
  async handle(): Promise<GetUserReportDataResponse> {
    return await this.userRepository.getReport()
  }
}
