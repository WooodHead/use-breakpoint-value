import useMediaQuery from 'use-media-antd-query';

export function useBreakpointValue<T = any>(
  values: Partial<Record<string, T>>
): T | undefined {
  const size = useMediaQuery()
  console.log('size', size);
  console.log('values', values);
  return values[size]
}
