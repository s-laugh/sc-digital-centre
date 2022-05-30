import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const EIStatus = [
  {
    value: 3433,
    status: StatusCodes.inPayment,
  },
  {
    value: 3438,
    status: StatusCodes.underReview,
  },
]

export const EITypes = [
  {
    value: 1,
    type: TypeCodes.EIUnknown,
  },
]
