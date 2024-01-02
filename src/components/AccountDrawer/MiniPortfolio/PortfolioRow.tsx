import Column, { AutoColumn } from 'components/Column'
import Row from 'components/Row'
import styled, { css, keyframes } from 'styled-components'

const PortfolioRowWrapper = styled(Row)<{ onClick?: any }>`
  gap: 12px;
  height: 68px;
  padding: 0 16px;

  transition: ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.ease} background-color`};

  ${({ onClick }) => onClick && 'cursor: pointer'};

  &:hover {
    cursor: pointer;
  }
`

const EndColumn = styled(Column)`
  align-items: flex-end;
`

export default function PortfolioRow({
  ['data-testid']: testId,
  left,
  title,
  descriptor,
  right,
  onClick,
}: {
  'data-testid'?: string
  left: React.ReactNode
  title: React.ReactNode
  descriptor?: React.ReactNode
  right?: React.ReactNode
  setIsHover?: (b: boolean) => void
  onClick?: () => void
}) {
  return (
    <PortfolioRowWrapper data-testid={testId} onClick={onClick}>
      {left}
      <AutoColumn grow>
        {title}
        {descriptor}
      </AutoColumn>
      {right && <EndColumn>{right}</EndColumn>}
    </PortfolioRowWrapper>
  )
}

const fadeIn = keyframes`
  from { opacity: .25 }
  to { opacity: 1 }
`
export const portfolioFadeInAnimation = css`
  animation: ${fadeIn} ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.in}`};
`
