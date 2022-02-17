import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchCard from './SearchCard'

expect.extend(toHaveNoViolations)

jest.mock(
  'next/link',
  () =>
    function Link({ url }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <a href={url}>children </a>
    }
)

describe('SearchCard', () => {
  it('renders SearchCard in english', () => {
    render(
      <SearchCard
        lang="en"
        headerText="header text"
        paraText="paragraph text"
        viewBenefitsServices="View all Test"
        searchBarPlaceholder="placeholder text"
        searchBarText="search text"
      />
    )
    const searchText = screen.getByText('search text')
    expect(searchText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <SearchCard
        lang="en"
        headerText="header text"
        paraText="paragraph text"
        viewBenefitsServices="View all Test"
        searchBarPlaceholder="placeholder text"
        searchBarText="search text"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})