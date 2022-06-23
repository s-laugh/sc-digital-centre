import { ProgramCodes } from './ProgramCodes'
import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const CPPPrograms = {
  32294: ProgramCodes.CPP,
  32295: ProgramCodes.CPPD,
}

export const CPPTypes = {
  Beneficial: TypeCodes.CPPRetirement,
  Survivor: TypeCodes.CPPSurvivor,
}

export const CPPStatus = {
  Active: StatusCodes.inPayment,
  Inactive: StatusCodes.inactive,
  Received: StatusCodes.applicationReceived,
  Decision: StatusCodes.decisionSent,
  Hold: StatusCodes.paymentHold,
}