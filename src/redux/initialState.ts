export interface AsyncState {
  isPending: boolean;
  isFulfilled: boolean;
  isRejected: boolean;
  error: any;
}

export const createAsyncState = (): AsyncState => ({
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
});