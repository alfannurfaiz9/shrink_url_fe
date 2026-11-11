export interface AsyncState {
  isPending: boolean
  isFulfilled: boolean
  isRejected: boolean
  error: string | null
}

export const createAsyncState = (): AsyncState => ({
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
});