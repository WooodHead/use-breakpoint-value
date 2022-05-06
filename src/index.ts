import useMediaQuery from 'use-media-antd-query';

export default function useBreakpointValue<T = any>(
  values: Partial<Record<string, T>>
): T | undefined {
  const size = useMediaQuery()
  return values[size]
}
