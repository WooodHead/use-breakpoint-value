import useMediaQuery from 'use-media-antd-query';
import { getClosestValue } from './utils';

export default function useBreakpointValue<T = any>(
  values: Partial<Record<string, T>>
): T | undefined {
  const size = useMediaQuery()
  const value = values[size]
  if (value !== undefined) {
    return value;
  }
  const closestValue = getClosestValue(values, size)
  return closestValue;
}
