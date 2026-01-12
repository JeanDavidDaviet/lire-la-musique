import alterations from '../../alterations';

const AlterationFactory = ({ signatures, chosenScale }) => {
  const typeOfAlterationComponent = alterations[chosenScale];
  return typeOfAlterationComponent({ signatures, chosenScale });
};

export default AlterationFactory;
