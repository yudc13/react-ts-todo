import {compose} from 'redux';

declare global {
  interface window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}
