import { CurrencyAmount } from '@uniswap/sdk-core'
import { DAI, USDC_MAINNET } from 'constants/tokens'
import { mocked } from 'test-utils/mocked'

import useAutoRouterSupported from './useAutoRouterSupported'
import useDebounce from './useDebounce'
import useIsWindowVisible from './useIsWindowVisible'

const USDCAmount = CurrencyAmount.fromRawAmount(USDC_MAINNET, '10000')
const DAIAmount = CurrencyAmount.fromRawAmount(DAI, '10000')

jest.mock('./useAutoRouterSupported')
jest.mock('./useDebounce')
jest.mock('./useIsWindowVisible')
jest.mock('state/routing/useRoutingAPITrade')
jest.mock('state/routing/usePreviewTrade')
jest.mock('state/user/hooks')

beforeEach(() => {
  // ignore debounced value
  mocked(useDebounce).mockImplementation((value) => value)

  mocked(useIsWindowVisible).mockReturnValue(true)
  mocked(useAutoRouterSupported).mockReturnValue(true)
})
