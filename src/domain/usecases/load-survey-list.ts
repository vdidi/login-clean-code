import { SurveyModel } from '@/domain/models'

export interface LoadSurveyList {
  laodAll: () => Promise<SurveyModel>
}
