import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'
import BenefitCode from '../../constants/BenefitCode'
import StatusBadge from './StatusBadge'
import {
  formatDate,
  getBenefitCode,
  getProgramBenefit,
} from '../organisms/DashboardUtils'

export default function BenefitCardHeaderActive(props) {
  const t = props.locale === 'en' ? en : fr
  const getBenefitCardTitle = () => {
    if (props.benefit.benefitType === BenefitCode.cppd) {
      return t[BenefitCode.cpp.toLowerCase()]
    } else if (
      props.benefit.benefitType === BenefitCode.cpp &&
      props.activeCppApi
    ) {
      const programBenefit = getProgramBenefit(props.activeCppApi.programCode)
      return programBenefit.map((i) => i.nameEn).toString()
    } else {
      return t[props.benefit.benefitType.toLowerCase()]
    }
  }

  const getBenefitCodeName = () => {
    let benefitCode
    if (props.benefit.benefitType === BenefitCode.cpp && props.activeCppApi) {
      benefitCode = getBenefitCode(props.activeCppApi.benefitCode)
    } else if (
      props.benefit.benefitType === BenefitCode.ei &&
      props.activeEiApi
    ) {
      benefitCode = getBenefitCode(props.activeEiApi.claimStatusCode)
    } else {
      return props.benefit.applicationStatus
    }
    return benefitCode.map((i) => i.nameEn).toString()
  }

  const getNetAmount = () => {
    if (props.benefit.benefitType === BenefitCode.cpp && props.activeCppApi) {
      return props.activeCppApi.netAmount
    } else if (
      props.benefit.benefitType === BenefitCode.ei &&
      props.activeEiApi
    ) {
      return props.activeEiApi.netAmount
    } else {
      return props.benefit.nextPaymentAmount
    }
  }

  const getPaymentDate = () => {
    if (props.benefit.benefitType === BenefitCode.cpp && props.activeCppApi) {
      return formatDate(props.activeCppApi.lastPaymentDate)
    } else if (
      props.benefit.benefitType === BenefitCode.ei &&
      props.activeEiApi
    ) {
      return formatDate(props.activeEiApi.nextRptDueDate)
    } else {
      return props.benefit.nextPaymentDate
    }
  }

  return (
    <div>
      <StatusBadge locale={props.locale} status="inPayment" />
      <div className="px-4 md:px-6">
        <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
          <div
            id={`${props.benefit.benefitType}-active`}
            className="col-span-1 py-4"
          >
            <div className="font-bold font-display text-4xl sm:text-lg md:text-xl lg:text-3xl xl:text-4xl mb-2 ">
              {getBenefitCardTitle()}
            </div>
          </div>
          <HorizontalRule width="w-1/3" visibility="sm:hidden" />
          <div
            id={`${props.benefit.benefitType}-active-paymentStartDate`}
            className="grid col-span-3 gap-y-4 gap-x-1 sm:grid-cols-3 sm:pl-8 lg:pl-10 font-display"
          >
            <div id={`${props.benefit.benefitType}-active-nextPaymentAmount`}>
              <p className="text-base sm:pb-2 ">{t.paymentAmount}</p>
              <p className="font-bold text-4xl sm:text-3xl md:text-4xl whitespace-nowrap">
                {t.netAmount.replace('{0}', getNetAmount())}
              </p>
              <a
                href="./dashboard"
                className="mt-1 text-bright-blue-solid underline"
              >
                {t.viewPaymentHistory}
              </a>
            </div>

            <div id={`${props.benefit.benefitType}-active-nextPaymentDueDate`}>
              <p className="sm:pb-2">
                {props.benefit.benefitType != 'EI'
                  ? t.daysUntilNextPayment
                  : t.nextReportDue}
              </p>
              <p className="text-green-active font-bold text-lg">
                {getPaymentDate()}
              </p>
            </div>

            <div
              id={`${props.benefit.benefitType}-active-latestUpdates`}
              className="sm:pb-2"
            >
              <p className="font-display sm:pb-2">{t.latestStatus}</p>
              <p className="font-display font-bold text-lg">
                {props.benefit.benefitStatusProgress}
              </p>
              <p className="font-bold text-lg">
                {props.benefit.latestStatusDate}
              </p>
              <a
                href={t.url_statusAndMessages}
                className="mt-1 text-bright-blue-solid underline"
              >
                {t.viewMyStatusAndMessages}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
