import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  addListener() {},
  removeListener() {},
}));

Enzyme.configure({ adapter: new Adapter() });
