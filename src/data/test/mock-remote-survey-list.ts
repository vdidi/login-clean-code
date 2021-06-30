import { RemoteLoadSurveyList } from '@/data/usecases'
import faker from 'faker'

export const mockSurveyRemoteModel = (): RemoteLoadSurveyList.Model => ({
  id: faker.random.uuid(),
  question: faker.random.words(10),
  didAnswer: faker.random.boolean(),
  date: faker.date.recent().toISOString()
})

export const mockSurveyRemoteListModel = (): RemoteLoadSurveyList.Model[] => ([
  mockSurveyRemoteModel(),
  mockSurveyRemoteModel(),
  mockSurveyRemoteModel()
])
