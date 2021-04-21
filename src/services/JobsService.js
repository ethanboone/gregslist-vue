import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class JobsService {
  async getJobs() {
    const res = await api.get('jobs')
    AppState.jobs = res.data
  }
}

export const jobsService = new JobsService()
