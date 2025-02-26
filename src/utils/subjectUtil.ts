import { subjectList } from '@/utils/subjectList'

export const getNext = () => {
  const randomIndex = Math.floor(Math.random() * subjectList.length)
  return subjectList[randomIndex]
}