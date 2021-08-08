import {
  GetUserReportResponse,
  GetUserReportUsecase
} from '../domain/usecase/get-user-report'
import { UserRepository } from './ports'

export class GetUserReport implements GetUserReportUsecase {
  constructor(private readonly userRepository: UserRepository) {}
  async handle(): Promise<GetUserReportResponse> {
    return await this.userRepository.getReport()
  }
}
