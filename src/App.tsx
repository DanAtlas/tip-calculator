import Layout from './components/layout/Layout';
import FormContent from './components/form-content/FormContent';
import TipResult from './components/tip-result/TipResult';
import { useAppContext } from './utils/contextHelper';

function App() {
  const { tipValues, setTipValues } = useAppContext();
  
  const handleSetBill = (billAmount: number) => {
    const updateBill = {
      ...tipValues,
      billAmount,
    };
    
    setTipValues(updateBill);
  };

  const handleSetPeople = (numPeople: number) => {
    const updateNumPeople = {
      ...tipValues,
      numPeople,
    };
    setTipValues(updateNumPeople);
  };

  const handleResetTipVal = () => {
    const resetTip = {
      ...tipValues,
      billAmount: 0,
      numPeople: 0,
      tip: 0,
    };
    setTipValues(resetTip);
  };

  return (
    <>
      <Layout layoutSize='medium'>
        <FormContent 
          onSetBill={handleSetBill} 
          onSetPeople={handleSetPeople} 
        />
        <TipResult tipValues={tipValues} onReset={handleResetTipVal} />
      </Layout>
    </>
  );
}

export default App;