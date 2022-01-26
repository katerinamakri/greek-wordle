import { useState, createContext } from 'react';
// import PropTypes from 'prop-types';

export const WordContext = createContext({});

function WordProvider(props) {
  const {
    children
  } = props;

  const [wordArray, setWordArray] = useState([]);

  return (
    <WordContext.Provider value={[wordArray, setWordArray]}>
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider;
